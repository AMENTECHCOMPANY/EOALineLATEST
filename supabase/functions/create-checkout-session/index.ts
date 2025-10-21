import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface CheckoutRequest {
  line_items: Array<{
    price: string;
    quantity: number;
  }>;
  success_url: string;
  cancel_url: string;
  customer_email?: string;
  metadata?: Record<string, string>;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY')
    
    if (!STRIPE_SECRET_KEY) {
      throw new Error('Stripe secret key not configured')
    }

    const { line_items, success_url, cancel_url, customer_email, metadata }: CheckoutRequest = await req.json()

    // Create Stripe checkout session
    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'mode': 'payment',
        'success_url': success_url,
        'cancel_url': cancel_url,
        'payment_method_types[0]': 'card',
        'payment_method_types[1]': 'paypal',
        'shipping_address_collection[allowed_countries][0]': 'US',
        'shipping_address_collection[allowed_countries][1]': 'CA',
        'shipping_address_collection[allowed_countries][2]': 'GB',
        'shipping_address_collection[allowed_countries][3]': 'DE',
        'shipping_address_collection[allowed_countries][4]': 'FR',
        'shipping_address_collection[allowed_countries][5]': 'ES',
        'shipping_address_collection[allowed_countries][6]': 'IT',
        'shipping_address_collection[allowed_countries][7]': 'NL',
        'shipping_address_collection[allowed_countries][8]': 'BE',
        'shipping_address_collection[allowed_countries][9]': 'AT',
        'shipping_address_collection[allowed_countries][10]': 'CH',
        'billing_address_collection': 'required',
        'customer_email': customer_email || '',
        ...Object.fromEntries(
          line_items.flatMap((item, index) => [
            [`line_items[${index}][price]`, item.price],
            [`line_items[${index}][quantity]`, item.quantity.toString()],
          ])
        ),
        ...Object.fromEntries(
          Object.entries(metadata || {}).map(([key, value]) => [`metadata[${key}]`, value])
        ),
      }),
    })

    if (!stripeResponse.ok) {
      const errorText = await stripeResponse.text()
      console.error('Stripe API error:', errorText)
      throw new Error(`Stripe API error: ${stripeResponse.status}`)
    }

    const session = await stripeResponse.json()

    // Log the checkout session creation
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    await supabase
      .from('checkout_sessions')
      .insert({
        session_id: session.id,
        customer_email: customer_email,
        amount_total: session.amount_total,
        currency: session.currency,
        status: 'created',
        metadata: metadata
      })

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error creating checkout session:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})