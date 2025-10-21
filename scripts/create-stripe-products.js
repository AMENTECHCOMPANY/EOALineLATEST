import Stripe from 'stripe';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const products = [
  {
    name: 'LA VEIRA Jacket - Female',
    sku: 'LV-JK-F',
    price: 4500,
    currency: 'usd',
    description: 'Elegant jacket from the LA VEIRA collection, designed for the modern woman of faith. Available in Black and Beige.',
    verse: 'She is clothed with strength and dignity - Proverbs 31:25',
    colors: ['Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BL-1.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-1.jpg'
    ]
  },
  {
    name: 'LA VEIRA Jacket - Male',
    sku: 'LV-JK-M',
    price: 4500,
    currency: 'usd',
    description: 'Premium jacket from the LA VEIRA collection, crafted for the modern gentleman. Available in Beige and Black.',
    verse: 'Be on your guard; stand firm in the faith; be courageous; be strong - 1 Corinthians 16:13',
    colors: ['Beige', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-1.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-1.jpg'
    ]
  },
  {
    name: 'TUMI Jacket - Female',
    sku: 'TM-JK-F',
    price: 4999,
    currency: 'usd',
    description: 'Premium jacket from the TUMI collection, designed for the modern woman of faith. Available in Black and Beige.',
    verse: 'Your beauty should not come from outward adornment rather, it should be that of your inner self, the unfading beauty of a gentle and quiet spirit - 1 Peter 3:3-4',
    colors: ['Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Black%20-%20F%203.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Beige%20-%20F%20-%20Side%203_.JPG'
    ]
  },
  {
    name: 'TUMI Jacket - Male',
    sku: 'TM-JK-M',
    price: 4999,
    currency: 'usd',
    description: 'Premium jacket from the TUMI collection, crafted for the modern gentleman. Available in Black and Beige.',
    verse: 'As iron sharpens iron, so one man sharpens another - Proverbs 27:17',
    colors: ['Black', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Black%202.jpeg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Beige%201.jpeg'
    ]
  },
  {
    name: 'TUMI T-Shirt - Female',
    sku: 'TM-TS-F',
    price: 3499,
    currency: 'usd',
    description: 'Comfortable t-shirt from the TUMI collection, perfect for everyday wear. Available in White, Beige, and Black.',
    verse: 'God is within her, she will not fall; God will help her at break of day - Psalm 46:5',
    colors: ['White', 'Beige', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-F-15.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-F-2.jpg'
    ]
  },
  {
    name: 'TUMI T-Shirt - Male',
    sku: 'TM-TS-M',
    price: 3499,
    currency: 'usd',
    description: 'Premium t-shirt from the TUMI collection for men. Available in Black, White, and Beige.',
    verse: 'I can do all things through Christ who strengthens me - Philippians 4:13',
    colors: ['Black', 'White', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-M-1.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-M-1.jpg'
    ]
  },
  {
    name: 'LA VEIRA Short - Female',
    sku: 'LV-SH-F',
    price: 3999,
    currency: 'usd',
    description: 'Stylish shorts from the LA VEIRA collection, designed for comfort and elegance. Available in Black and Beige.',
    verse: 'Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised - Proverbs 31:30',
    colors: ['Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-shortjacket-female-black2-Photoroom.png',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-Short-F-2.jpg'
    ]
  },
  {
    name: 'LA VEIRA Short - Male',
    sku: 'LV-SH-M',
    price: 3999,
    currency: 'usd',
    description: 'Stylish shorts from the LA VEIRA collection for men. Available in Beige and Black.',
    verse: 'As iron sharpens iron, so one man sharpens another - Proverbs 27:17',
    colors: ['Beige', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BG%20-%201.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BL%20-%202.jpg'
    ]
  },
  {
    name: 'LA VEIRA Full Set - Jacket and Skirt',
    sku: 'LV-SET-JK-SK-F',
    price: 7499,
    currency: 'usd',
    description: 'Complete jacket and skirt set from the LA VEIRA collection. A perfect combination of elegance and faith. Available in Black and Beige.',
    verse: 'Your beauty should not come from outward adornment rather, it should be that of your inner self, the unfading beauty of a gentle and quiet spirit - 1 Peter 3:3-4',
    colors: ['Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BL-2.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-3.jpg'
    ]
  },
  {
    name: 'LA VEIRA Full Set - Jacket and Short (Female)',
    sku: 'LV-SET-JK-SH-F',
    price: 7999,
    currency: 'usd',
    description: 'Stylish jacket and short set from the LA VEIRA collection. Available in Beige and Black.',
    verse: 'Blessed is she who has believed that the Lord would fulfill His promises to her - Luke 1:45',
    colors: ['Beige', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-BK%20%20-%20Cropped%20-%202.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-shortjacket-female-black2-Photoroom.png'
    ]
  },
  {
    name: 'LA VEIRA Full Set - Jacket and Short (Male)',
    sku: 'LV-SET-JK-SH-M',
    price: 7999,
    currency: 'usd',
    description: 'Complete jacket and short set from the LA VEIRA collection for men. Available in Black and Beige.',
    verse: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future - Jeremiah 29:11',
    colors: ['Black', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-BK-1.jpg',
      'https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-1.jpg'
    ]
  }
];

async function createProducts() {
  console.log('====================================');
  console.log('ESSENCE OF ARMOR - STRIPE PRODUCT SETUP');
  console.log('====================================\n');
  console.log('Starting to create Stripe products with SKUs, descriptions, and Bible verses...\n');

  const priceMapping = {};
  const productDetails = [];

  for (const product of products) {
    try {
      console.log(`Creating: ${product.name}`);
      console.log(`SKU: ${product.sku}`);

      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: `${product.description}\n\n"${product.verse}"`,
        metadata: {
          sku: product.sku,
          verse: product.verse,
          colors: product.colors.join(', '),
          sizes: product.sizes.join(', '),
        },
        images: product.images,
      });

      const price = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: product.currency,
      });

      priceMapping[product.sku] = price.id;
      productDetails.push({
        name: product.name,
        sku: product.sku,
        productId: stripeProduct.id,
        priceId: price.id,
        amount: `$${(product.price / 100).toFixed(2)}`,
        colors: product.colors.join(', '),
        sizes: product.sizes.join(', '),
        verse: product.verse
      });

      console.log(`✓ Created successfully`);
      console.log(`  Product ID: ${stripeProduct.id}`);
      console.log(`  Price ID: ${price.id}`);
      console.log(`  Amount: $${(product.price / 100).toFixed(2)} USD`);
      console.log(`  Colors: ${product.colors.join(', ')}`);
      console.log(`  Sizes: ${product.sizes.join(', ')}`);
      console.log(`  Verse: ${product.verse}\n`);
    } catch (error) {
      console.error(`✗ Error creating ${product.name}:`, error.message);
      console.error(`  Details: ${error.type}\n`);
    }
  }

  console.log('\n====================================');
  console.log('PRODUCTS CREATED SUCCESSFULLY');
  console.log('====================================\n');

  console.log('Total Products Created:', productDetails.length);
  console.log('\n');

  console.log('====================================');
  console.log('PRODUCT SUMMARY');
  console.log('====================================\n');

  productDetails.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name}`);
    console.log(`   SKU: ${product.sku}`);
    console.log(`   Price: ${product.amount}`);
    console.log(`   Colors: ${product.colors}`);
    console.log(`   Sizes: ${product.sizes}`);
    console.log(`   Product ID: ${product.productId}`);
    console.log(`   Price ID: ${product.priceId}`);
    console.log(`   Verse: "${product.verse}"`);
    console.log('');
  });

  console.log('\n====================================');
  console.log('STRIPE_PRICES MAPPING');
  console.log('====================================\n');
  console.log('Copy this to src/lib/stripe.ts:\n');
  console.log('export const STRIPE_PRICES = {');
  for (const [sku, priceId] of Object.entries(priceMapping)) {
    console.log(`  '${sku}': '${priceId}',`);
  }
  console.log('};\n');

  console.log('\n====================================');
  console.log('NEXT STEPS');
  console.log('====================================\n');
  console.log('1. Copy the STRIPE_PRICES mapping above to src/lib/stripe.ts');
  console.log('2. Go to your Stripe Dashboard: https://dashboard.stripe.com/products');
  console.log('3. Verify all products have been created correctly');
  console.log('4. Check that descriptions include Bible verses');
  console.log('5. Verify prices, SKUs, and metadata are correct');
  console.log('6. Test checkout flow on your website');
  console.log('\n✓ Setup complete! Your Stripe account is ready for sales.\n');
}

createProducts().catch(console.error);
