import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@19.1.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2024-12-18.acacia",
});

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { action, productData } = await req.json();

    let result;

    switch (action) {
      case "create":
        const stripeProduct = await stripe.products.create({
          name: productData.name,
          description: productData.description,
          images: productData.image_url ? [productData.image_url] : [],
        });

        const stripePrice = await stripe.prices.create({
          product: stripeProduct.id,
          unit_amount: productData.price,
          currency: "eur",
        });

        result = {
          stripe_product_id: stripeProduct.id,
          stripe_price_id: stripePrice.id,
        };
        break;

      case "update":
        if (productData.stripe_product_id) {
          await stripe.products.update(productData.stripe_product_id, {
            name: productData.name,
            description: productData.description,
            images: productData.image_url ? [productData.image_url] : [],
          });
        }
        result = { success: true };
        break;

      case "delete":
        if (productData.stripe_product_id) {
          await stripe.products.update(productData.stripe_product_id, {
            active: false,
          });
        }
        result = { success: true };
        break;

      default:
        throw new Error("Invalid action");
    }

    return new Response(JSON.stringify(result), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
