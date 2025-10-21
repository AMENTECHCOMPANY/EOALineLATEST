// Stripe configuration and utilities for E.O.A Line
export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || '';

// Product price mapping for Stripe - Complete E.O.A Line catalog
export const STRIPE_PRICES = {
  // LA VEIRA Collection - Women
  'LV-JK-BLK-F': 'price_1QQvQvRuGl8XwXwXwXwXwXwX', // LA VEIRA Jacket Black Female - €34.99
  'LV-JK-BGE-F': 'price_1QQvR0RuGl8XwXwXwXwXwXwX', // LA VEIRA Jacket Beige Female - €34.99
  'LV-SH-BLK-F': 'price_1QQvR1RuGl8XwXwXwXwXwXwX', // LA VEIRA Short Black Female - €34.99
  'LV-SH-BGE-F': 'price_1QQvR2RuGl8XwXwXwXwXwXwX', // LA VEIRA Short Beige Female - €34.99
  'LV-SET-BLK-F': 'price_1QQvR3RuGl8XwXwXwXwXwXwX', // LA VEIRA Set Black Female - €34.99
  'LV-SET-BGE-F': 'price_1QQvR4RuGl8XwXwXwXwXwXwX', // LA VEIRA Set Beige Female - €34.99
  'LV-SET-SH-BLK-F': 'price_1QQvR5RuGl8XwXwXwXwXwXwX', // LA VEIRA Set Short Black Female - €49.99
  'LV-SET-SH-BGE-F': 'price_1QQvR6RuGl8XwXwXwXwXwXwX', // LA VEIRA Set Short Beige Female - €49.99
  
  // LA VEIRA Collection - Men
  'LV-JK-BLK-M': 'price_1QQvR7RuGl8XwXwXwXwXwXwX', // LA VEIRA Jacket Black Male - €34.99
  'LV-JK-BGE-M': 'price_1QQvR8RuGl8XwXwXwXwXwXwX', // LA VEIRA Jacket Beige Male - €34.99
  'LV-SH-BLK-M': 'price_1QQvR9RuGl8XwXwXwXwXwXwX', // LA VEIRA Short Black Male - €34.99
  'LV-SH-BGE-M': 'price_1QQvRAruGl8XwXwXwXwXwXwX', // LA VEIRA Short Beige Male - €34.99
  'LV-SET-SH-BLK-M': 'price_1QQvRBRuGl8XwXwXwXwXwXwX', // LA VEIRA Set Short Black Male - €49.99
  'LV-SET-SH-BGE-M': 'price_1QQvRCRuGl8XwXwXwXwXwXwX', // LA VEIRA Set Short Beige Male - €49.99
  
  // TUMI Collection - Women
  'TM-JK-BLK-F': 'price_1QQvRDRuGl8XwXwXwXwXwXwX', // TUMI Jacket Black Female - €34.99
  'TM-JK-BGE-F': 'price_1QQvREruGl8XwXwXwXwXwXwX', // TUMI Jacket Beige Female - €34.99
  'TM-TS-BLK-F': 'price_1QQvRFRuGl8XwXwXwXwXwXwX', // TUMI T-Shirt Black Female - €34.99
  'TM-TS-WHT-F': 'price_1QQvRGRuGl8XwXwXwXwXwXwX', // TUMI T-Shirt White Female - €34.99
  'TM-TS-BGE-F': 'price_1QQvRHRuGl8XwXwXwXwXwXwX', // TUMI T-Shirt Beige Female - €34.99
  'TM-PN-BLK-F': 'price_1QQvRIRuGl8XwXwXwXwXwXwX', // TUMI Pants Black Female - €34.99
  'TM-SET-HD-F': 'price_1QQvRJRuGl8XwXwXwXwXwXwX', // TUMI Set Hoodie Female - €59.99
  'TM-COMPLETE-F-BLK': 'price_1QQvRKRuGl8XwXwXwXwXwXwX', // TUMI Complete Set Female Black - €99.99
  'TM-COMPLETE-F-WHT': 'price_1QQvRLRuGl8XwXwXwXwXwXwX', // TUMI Complete Set Female White - €99.99
  'TM-COMPLETE-F-BGE': 'price_1QQvRMRuGl8XwXwXwXwXwXwX', // TUMI Complete Set Female Beige - €99.99
  
  // TUMI Collection - Men
  'TM-JK-BLK-M': 'price_1QQvRNRuGl8XwXwXwXwXwXwX', // TUMI Jacket Black Male - €34.99
  'TM-JK-BGE-M': 'price_1QQvRORuGl8XwXwXwXwXwXwX', // TUMI Jacket Beige Male - €34.99
  'TM-TS-BLK-M': 'price_1QQvRPRuGl8XwXwXwXwXwXwX', // TUMI T-Shirt Black Male - €34.99
  'TM-TS-WHT-M': 'price_1QQvRQRuGl8XwXwXwXwXwXwX', // TUMI T-Shirt White Male - €34.99
  'TM-TS-BGE-M': 'price_1QQvRRRuGl8XwXwXwXwXwXwX', // TUMI T-Shirt Beige Male - €34.99
  'TM-PN-BLK-M': 'price_1QQvRSRuGl8XwXwXwXwXwXwX', // TUMI Pants Black Male - €34.99
  'TM-SET-HD-M': 'price_1QQvRTRuGl8XwXwXwXwXwXwX', // TUMI Set Hoodie Male - €59.99
  'TM-COMPLETE-M-BLK': 'price_1QQvRURuGl8XwXwXwXwXwXwX', // TUMI Complete Set Male Black - €99.99
  'TM-COMPLETE-M-WHT': 'price_1QQvRVRuGl8XwXwXwXwXwXwX', // TUMI Complete Set Male White - €99.99
  'TM-COMPLETE-M-BGE': 'price_1QQvRWRuGl8XwXwXwXwXwXwX', // TUMI Complete Set Male Beige - €99.99
};

// Generate SKU from product details
export const generateSKU = (product: any, selectedColor?: string, selectedSize?: string) => {
  // Map collection names to their SKU prefixes
  const collectionMap: { [key: string]: string } = {
    'laveira': 'LV',
    'tumie': 'TM',
    'tumi': 'TM'
  };

  // Map category names to their SKU codes
  const categoryMap: { [key: string]: string } = {
    'jacket': 'JK',
    'tshirt': 'TS',
    't-shirt': 'TS',
    'pants': 'PN',
    'short': 'SH',
    'shorts': 'SH',
    'set': 'SET',
    'hoodie': 'HD'
  };

  // Map color names to their SKU codes
  const colorMap: { [key: string]: string } = {
    'black': 'BLK',
    'white': 'WHT',
    'beige': 'BGE'
  };

  const collection = collectionMap[product.collection.toLowerCase()] || product.collection.toUpperCase().substring(0, 2);
  const category = categoryMap[product.category.toLowerCase()] || product.category.toUpperCase().substring(0, 2);
  const color = selectedColor ? (colorMap[selectedColor.toLowerCase()] || selectedColor.substring(0, 3).toUpperCase()) : 'BLK';
  const gender = product.gender === 'female' ? 'F' : 'M';

  // Special handling for complete sets
  if (product.name.includes('Complete Set')) {
    return `${collection}-COMPLETE-${gender}-${color}`;
  }

  return `${collection}-${category}-${color}-${gender}`;
};

// Initialize Stripe checkout with real integration
export const createCheckoutSession = async (items: Array<{
  product: any;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}>) => {
  try {
    console.log('Creating Stripe checkout session for items:', items);
    
    // Prepare line items for Stripe
    const lineItems = items.map(item => {
      const sku = generateSKU(item.product, item.selectedColor, item.selectedSize);
      const priceId = STRIPE_PRICES[sku as keyof typeof STRIPE_PRICES];
      
      if (!priceId) {
        console.warn(`No price ID found for SKU: ${sku}`);
        // Fallback to a default price or throw error
        throw new Error(`Product configuration error for ${item.product.name}`);
      }
      
      return {
        price: priceId,
        quantity: item.quantity,
      };
    });
    
    // Create checkout session via your backend API
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        line_items: lineItems,
        success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${window.location.origin}/cart`,
        customer_email: null, // Will be collected in Stripe Checkout
        metadata: {
          source: 'eoa_line_website',
          items: JSON.stringify(items.map(item => ({
            name: item.product.name,
            sku: generateSKU(item.product, item.selectedColor, item.selectedSize),
            size: item.selectedSize,
            color: item.selectedColor,
            quantity: item.quantity
          })))
        }
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }
    
    const { url } = await response.json();
    
    // Redirect to Stripe Checkout
    window.location.href = url;
    
    return {
      success: true,
      message: 'Redirecting to secure checkout...'
    };
    
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to create checkout session. Please try again.');
  }
};

// Format price for display
export const formatPrice = (price: number, currency: string = 'EUR') => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: currency,
  }).format(price);
};

// Validate Stripe configuration
export const validateStripeConfig = () => {
  if (!STRIPE_PUBLIC_KEY || STRIPE_PUBLIC_KEY === '') {
    console.warn('Stripe public key not configured');
    return false;
  }
  return true;
};

// Initialize Stripe
export const initializeStripe = async () => {
  try {
    if (typeof window !== 'undefined') {
      const { loadStripe } = await import('@stripe/stripe-js');
      const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
      return stripe;
    }
    return null;
  } catch (error) {
    console.error('Failed to initialize Stripe:', error);
    return null;
  }
};

// Handle successful payment
export const handlePaymentSuccess = (sessionId: string) => {
  console.log('Payment successful:', sessionId);
  // Clear cart
  localStorage.removeItem('eoa-cart');
  // Show success message
  return {
    success: true,
    message: 'Payment completed successfully!'
  };
};

// Handle payment cancellation
export const handlePaymentCancel = () => {
  console.log('Payment cancelled by user');
  return {
    success: false,
    message: 'Payment was cancelled'
  };
};