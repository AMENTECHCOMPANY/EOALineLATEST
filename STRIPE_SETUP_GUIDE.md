# Stripe Products Setup Guide

This guide will help you create all products in Stripe for your E.O.A Line store.

## Products to Create in Stripe

### LA VEIRA Collection - Women

1. **LA VEIRA Jacket Black Female** (SKU: LV-JK-BLK-F)
   - Price: €34.99
   - Currency: EUR

2. **LA VEIRA Jacket Beige Female** (SKU: LV-JK-BGE-F)
   - Price: €34.99
   - Currency: EUR

3. **LA VEIRA Short Black Female** (SKU: LV-SH-BLK-F)
   - Price: €34.99
   - Currency: EUR

4. **LA VEIRA Short Beige Female** (SKU: LV-SH-BGE-F)
   - Price: €34.99
   - Currency: EUR

5. **LA VEIRA Set Black Female** (SKU: LV-SET-BLK-F)
   - Price: €34.99
   - Currency: EUR

6. **LA VEIRA Set Beige Female** (SKU: LV-SET-BGE-F)
   - Price: €34.99
   - Currency: EUR

7. **LA VEIRA Set Short Black Female** (SKU: LV-SET-SH-BLK-F)
   - Price: €49.99
   - Currency: EUR

8. **LA VEIRA Set Short Beige Female** (SKU: LV-SET-SH-BGE-F)
   - Price: €49.99
   - Currency: EUR

### LA VEIRA Collection - Men

9. **LA VEIRA Jacket Black Male** (SKU: LV-JK-BLK-M)
   - Price: €34.99
   - Currency: EUR

10. **LA VEIRA Jacket Beige Male** (SKU: LV-JK-BGE-M)
    - Price: €34.99
    - Currency: EUR

11. **LA VEIRA Short Black Male** (SKU: LV-SH-BLK-M)
    - Price: €34.99
    - Currency: EUR

12. **LA VEIRA Short Beige Male** (SKU: LV-SH-BGE-M)
    - Price: €34.99
    - Currency: EUR

13. **LA VEIRA Set Short Black Male** (SKU: LV-SET-SH-BLK-M)
    - Price: €49.99
    - Currency: EUR

14. **LA VEIRA Set Short Beige Male** (SKU: LV-SET-SH-BGE-M)
    - Price: €49.99
    - Currency: EUR

### TUMI Collection - Women

15. **TUMI Jacket Black Female** (SKU: TM-JK-BLK-F)
    - Price: €34.99
    - Currency: EUR

16. **TUMI Jacket Beige Female** (SKU: TM-JK-BGE-F)
    - Price: €34.99
    - Currency: EUR

17. **TUMI T-Shirt Black Female** (SKU: TM-TS-BLK-F)
    - Price: €34.99
    - Currency: EUR

18. **TUMI T-Shirt White Female** (SKU: TM-TS-WHT-F)
    - Price: €34.99
    - Currency: EUR

19. **TUMI T-Shirt Beige Female** (SKU: TM-TS-BGE-F)
    - Price: €34.99
    - Currency: EUR

20. **TUMI Pants Black Female** (SKU: TM-PN-BLK-F)
    - Price: €34.99
    - Currency: EUR

21. **TUMI Set Hoodie Female** (SKU: TM-SET-HD-F)
    - Price: €59.99
    - Currency: EUR

22. **TUMI Complete Set Female Black** (SKU: TM-COMPLETE-F-BLK)
    - Price: €99.99
    - Currency: EUR

23. **TUMI Complete Set Female White** (SKU: TM-COMPLETE-F-WHT)
    - Price: €99.99
    - Currency: EUR

24. **TUMI Complete Set Female Beige** (SKU: TM-COMPLETE-F-BGE)
    - Price: €99.99
    - Currency: EUR

### TUMI Collection - Men

25. **TUMI Jacket Black Male** (SKU: TM-JK-BLK-M)
    - Price: €34.99
    - Currency: EUR

26. **TUMI Jacket Beige Male** (SKU: TM-JK-BGE-M)
    - Price: €34.99
    - Currency: EUR

27. **TUMI T-Shirt Black Male** (SKU: TM-TS-BLK-M)
    - Price: €34.99
    - Currency: EUR

28. **TUMI T-Shirt White Male** (SKU: TM-TS-WHT-M)
    - Price: €34.99
    - Currency: EUR

29. **TUMI T-Shirt Beige Male** (SKU: TM-TS-BGE-M)
    - Price: €34.99
    - Currency: EUR

30. **TUMI Pants Black Male** (SKU: TM-PN-BLK-M)
    - Price: €34.99
    - Currency: EUR

31. **TUMI Set Hoodie Male** (SKU: TM-SET-HD-M)
    - Price: €59.99
    - Currency: EUR

32. **TUMI Complete Set Male Black** (SKU: TM-COMPLETE-M-BLK)
    - Price: €99.99
    - Currency: EUR

33. **TUMI Complete Set Male White** (SKU: TM-COMPLETE-M-WHT)
    - Price: €99.99
    - Currency: EUR

34. **TUMI Complete Set Male Beige** (SKU: TM-COMPLETE-M-BGE)
    - Price: €99.99
    - Currency: EUR

## How to Create Products in Stripe

### Step 1: Access Stripe Dashboard
1. Go to https://dashboard.stripe.com/
2. Log in with your account

### Step 2: Create Each Product
For each product listed above:

1. Click "Products" in the left sidebar
2. Click "Add product"
3. Fill in the details:
   - **Name**: Use the product name (e.g., "LA VEIRA Jacket Black Female")
   - **Description**: Add a description if desired
   - **Pricing**: Click "Add pricing"
     - **Price**: Enter the price (e.g., 34.99)
     - **Currency**: Select EUR
     - **Billing**: One-time
   - **Metadata** (optional but recommended):
     - Add a field `sku` with the value from the list (e.g., "LV-JK-BLK-F")
4. Click "Save product"
5. **IMPORTANT**: Copy the Price ID (starts with `price_`) that was created

### Step 3: Update Your Code
After creating all products, update the `STRIPE_PRICES` object in `/tmp/cc-agent/55236460/project/src/lib/stripe.ts` with the actual Price IDs you copied from Stripe.

Replace the placeholder IDs (e.g., `price_1QQvQvRuGl8XwXwXwXwXwXwX`) with your actual Price IDs.

### Alternative: Using Stripe CLI or API
You can also automate this process using the Stripe CLI or API. See Stripe's documentation for more details:
- https://stripe.com/docs/cli
- https://stripe.com/docs/api/products
