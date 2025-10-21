import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const STRIPE_WEBHOOK_SECRET = Deno.env.get('STRIPE_WEBHOOK_SECRET')
    const signature = req.headers.get('stripe-signature')
    
    if (!STRIPE_WEBHOOK_SECRET || !signature) {
      throw new Error('Missing webhook secret or signature')
    }

    const body = await req.text()
    
    // Verify webhook signature (simplified for demo)
    // In production, use proper Stripe webhook signature verification
    
    const event = JSON.parse(body)
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object
        
        // Update checkout session status
        await supabase
          .from('checkout_sessions')
          .update({
            status: 'completed',
            payment_status: session.payment_status,
            customer_details: session.customer_details,
            updated_at: new Date().toISOString()
          })
          .eq('session_id', session.id)

        // Create order record
        await supabase
          .from('orders')
          .insert({
            session_id: session.id,
            customer_email: session.customer_details?.email,
            amount_total: session.amount_total,
            currency: session.currency,
            status: 'confirmed',
            shipping_details: session.shipping_details,
            metadata: session.metadata
          })

        console.log('Order created for session:', session.id)
        break

      case 'payment_intent.succeeded':
        console.log('Payment succeeded:', event.data.object.id)
        break

      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object.id)
        break

      default:
        console.log('Unhandled event type:', event.type)
    }

    return new Response(
      JSON.stringify({ received: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})