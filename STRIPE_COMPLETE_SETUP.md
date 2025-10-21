# ESSENCE OF ARMOR - Complete Stripe Setup Guide

## Overview
This guide will help you set up your Stripe account with all products, SKUs, descriptions, and Bible verses ready for sales.

## Prerequisites

1. **Stripe Account**: Create a free account at https://dashboard.stripe.com/register
2. **API Keys**: You'll need your Secret Key from the Stripe Dashboard

---

## Step 1: Get Your Stripe Secret Key

1. Go to https://dashboard.stripe.com/apikeys
2. Click on "Reveal test key" or "Reveal live key" (depending on your mode)
3. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)
4. Add it to your `.env` file:
   ```
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   ```

---

## Step 2: Run the Product Creation Script

The script will create all 11 products with:
- Complete descriptions
- Bible verses
- SKUs for inventory tracking
- Product images
- Color and size metadata
- Pricing in USD

Run the following command:

```bash
npm run create-stripe-products
```

This will:
- Create all products in your Stripe account
- Generate Price IDs for each product
- Display a summary of all created products
- Provide the STRIPE_PRICES mapping to copy

---

## Step 3: Copy the STRIPE_PRICES Mapping

After the script completes, you'll see output like:

```javascript
export const STRIPE_PRICES = {
  'LV-JK-F': 'price_xxxxxxxxxxxxx',
  'LV-JK-M': 'price_xxxxxxxxxxxxx',
  // ... more mappings
};
```

Copy this entire mapping and paste it into `src/lib/stripe.ts` replacing the existing STRIPE_PRICES object.

---

## Products Created

### LA VEIRA Collection

#### 1. LA VEIRA Jacket - Female
- **SKU**: LV-JK-F
- **Price**: $45.00
- **Colors**: Black, Beige
- **Sizes**: XS, S, M, L, XL
- **Verse**: "She is clothed with strength and dignity - Proverbs 31:25"

#### 2. LA VEIRA Jacket - Male
- **SKU**: LV-JK-M
- **Price**: $45.00
- **Colors**: Beige, Black
- **Sizes**: S, M, L, XL, XXL
- **Verse**: "Be on your guard; stand firm in the faith; be courageous; be strong - 1 Corinthians 16:13"

#### 3. LA VEIRA Short - Female
- **SKU**: LV-SH-F
- **Price**: $39.99
- **Colors**: Black, Beige
- **Sizes**: XS, S, M, L, XL
- **Verse**: "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised - Proverbs 31:30"

#### 4. LA VEIRA Short - Male
- **SKU**: LV-SH-M
- **Price**: $39.99
- **Colors**: Beige, Black
- **Sizes**: S, M, L, XL, XXL
- **Verse**: "As iron sharpens iron, so one man sharpens another - Proverbs 27:17"

#### 5. LA VEIRA Full Set - Jacket and Skirt
- **SKU**: LV-SET-JK-SK-F
- **Price**: $74.99
- **Colors**: Black, Beige
- **Sizes**: XS, S, M, L, XL
- **Verse**: "Your beauty should not come from outward adornment rather, it should be that of your inner self, the unfading beauty of a gentle and quiet spirit - 1 Peter 3:3-4"

#### 6. LA VEIRA Full Set - Jacket and Short (Female)
- **SKU**: LV-SET-JK-SH-F
- **Price**: $79.99
- **Colors**: Beige, Black
- **Sizes**: XS, S, M, L, XL
- **Verse**: "Blessed is she who has believed that the Lord would fulfill His promises to her - Luke 1:45"

#### 7. LA VEIRA Full Set - Jacket and Short (Male)
- **SKU**: LV-SET-JK-SH-M
- **Price**: $79.99
- **Colors**: Black, Beige
- **Sizes**: S, M, L, XL, XXL
- **Verse**: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future - Jeremiah 29:11"

---

### TUMI Collection

#### 8. TUMI Jacket - Female
- **SKU**: TM-JK-F
- **Price**: $49.99
- **Colors**: Black, Beige
- **Sizes**: XS, S, M, L, XL
- **Verse**: "Your beauty should not come from outward adornment rather, it should be that of your inner self, the unfading beauty of a gentle and quiet spirit - 1 Peter 3:3-4"

#### 9. TUMI Jacket - Male
- **SKU**: TM-JK-M
- **Price**: $49.99
- **Colors**: Black, Beige
- **Sizes**: S, M, L, XL, XXL
- **Verse**: "As iron sharpens iron, so one man sharpens another - Proverbs 27:17"

#### 10. TUMI T-Shirt - Female
- **SKU**: TM-TS-F
- **Price**: $34.99
- **Colors**: White, Beige, Black
- **Sizes**: XS, S, M, L, XL
- **Verse**: "God is within her, she will not fall; God will help her at break of day - Psalm 46:5"

#### 11. TUMI T-Shirt - Male
- **SKU**: TM-TS-M
- **Price**: $34.99
- **Colors**: Black, White, Beige
- **Sizes**: S, M, L, XL, XXL
- **Verse**: "I can do all things through Christ who strengthens me - Philippians 4:13"

---

## Step 4: Verify Your Stripe Dashboard

1. Go to https://dashboard.stripe.com/products
2. You should see all 11 products listed
3. Click on each product to verify:
   - Product name is correct
   - Description includes the Bible verse
   - SKU is in metadata
   - Colors and sizes are in metadata
   - Product images are displayed
   - Price is correct

---

## Step 5: Configure Stripe for Production

### Test Mode vs Live Mode

Your Stripe account has two modes:

1. **Test Mode** (for development)
   - Use test credit cards
   - No real money is processed
   - Test card: `4242 4242 4242 4242`

2. **Live Mode** (for production)
   - Real credit cards
   - Real money is processed
   - Requires business verification

### Switching to Live Mode

When you're ready to accept real payments:

1. Go to https://dashboard.stripe.com
2. Toggle from "Test mode" to "Live mode" (top right)
3. Complete business verification if required
4. Get your **Live Secret Key** from https://dashboard.stripe.com/apikeys
5. Update your `.env` file with the live key:
   ```
   STRIPE_SECRET_KEY=sk_live_your_live_secret_key_here
   ```
6. Re-run the product creation script in Live mode:
   ```bash
   npm run create-stripe-products
   ```

---

## Step 6: Set Up Stripe Webhook (Important!)

Webhooks allow Stripe to notify your application when payment events occur.

1. Go to https://dashboard.stripe.com/webhooks
2. Click "Add endpoint"
3. Enter your webhook URL:
   ```
   https://your-supabase-url.supabase.co/functions/v1/stripe-webhook
   ```
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click "Add endpoint"
6. Copy the **Webhook signing secret** (starts with `whsec_`)
7. Add it to your Supabase secrets:
   - Go to your Supabase project settings
   - Add a new secret: `STRIPE_WEBHOOK_SECRET`
   - Paste the webhook signing secret

---

## Step 7: Test Your Checkout Flow

1. Visit your website at `/shop`
2. Add a product to cart
3. Click "Checkout"
4. Use test card `4242 4242 4242 4242`
5. Complete the checkout
6. Verify you're redirected to the success page
7. Check your Stripe Dashboard for the payment

---

## Step 8: Configure Tax Settings (Optional)

1. Go to https://dashboard.stripe.com/settings/tax
2. Enable automatic tax calculation if needed
3. Configure tax rates for your regions

---

## Step 9: Set Up Email Receipts

1. Go to https://dashboard.stripe.com/settings/emails
2. Enable customer email receipts
3. Customize email templates with your branding

---

## Step 10: Business Information

Update your business information:

1. Go to https://dashboard.stripe.com/settings/public
2. Add:
   - Business name: "Essence of Armor"
   - Support email
   - Business website
   - Logo

---

## Troubleshooting

### Error: "No such price"
- Make sure you've copied the STRIPE_PRICES mapping to `src/lib/stripe.ts`
- Verify the Price IDs match those in your Stripe Dashboard

### Error: "Invalid API Key"
- Check that your `STRIPE_SECRET_KEY` is correct in `.env`
- Make sure you're using the right key (test vs live)
- Verify the key starts with `sk_test_` or `sk_live_`

### Webhook Not Working
- Verify the webhook URL is correct
- Check that the webhook signing secret is in Supabase
- Make sure the webhook is active in Stripe Dashboard

### Products Not Showing in Dashboard
- Wait a few seconds for Stripe to process
- Refresh the Stripe Dashboard
- Check the script output for any errors

---

## SKU Reference Guide

Use these SKUs to track inventory and manage orders:

### LA VEIRA Collection
- **LV-JK-F**: Jacket Female
- **LV-JK-M**: Jacket Male
- **LV-SH-F**: Short Female
- **LV-SH-M**: Short Male
- **LV-SET-JK-SK-F**: Full Set Jacket & Skirt
- **LV-SET-JK-SH-F**: Full Set Jacket & Short (Female)
- **LV-SET-JK-SH-M**: Full Set Jacket & Short (Male)

### TUMI Collection
- **TM-JK-F**: Jacket Female
- **TM-JK-M**: Jacket Male
- **TM-TS-F**: T-Shirt Female
- **TM-TS-M**: T-Shirt Male

---

## Next Steps After Setup

1. Monitor your first transactions in the Stripe Dashboard
2. Set up fraud prevention rules
3. Configure payout schedule
4. Add additional payment methods (Apple Pay, Google Pay)
5. Enable international payments if needed
6. Set up subscription products (if applicable)

---

## Support

### Stripe Support
- Documentation: https://stripe.com/docs
- Support: https://support.stripe.com

### Your Application
- If you need to modify products, use the Admin Dashboard at `/admin`
- For technical issues, check the browser console and network tab

---

## Checklist

Before going live, verify:

- [ ] All 11 products created in Stripe
- [ ] STRIPE_PRICES mapping copied to `src/lib/stripe.ts`
- [ ] Test checkout completed successfully
- [ ] Webhook configured and working
- [ ] Business information updated
- [ ] Live mode API keys configured (when ready)
- [ ] Email receipts enabled
- [ ] Tax settings configured (if applicable)

---

**Your Stripe account is now ready for sales! 🎉**

All products include meaningful Bible verses and are properly configured for checkout. Customers can now purchase your faith-based apparel with confidence.
