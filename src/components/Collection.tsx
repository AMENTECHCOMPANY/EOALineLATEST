import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../lib/types';
import { FilterOptions } from './Header';
import ProductModal from './Product/ProductModal';
import { useLocalization } from '../contexts/LocalizationContext';

interface CollectionProps {
  filters: FilterOptions;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  wishlistItems: Product[];
}

const Collection: React.FC<CollectionProps> = ({
                                                 filters,
                                                 onAddToCart,
                                                 onAddToWishlist,
                                                 wishlistItems
                                               }) => {
  const { formatPrice, t } = useLocalization();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [selectedCollection, setSelectedCollection] = useState<string>('all'); // Collection filter state
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null); // Hover state
  const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});

  // Complete product catalog with all new images and prices
  const allProducts: Product[] = [
    // LA VEIRA COLLECTION - WOMEN
    {
      id: 1,
      name: "LA VEIRA Jacket - Female",
      price: 45.00,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BL-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BL-2.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BL-SD-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BL-SD-2.jpg"
        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-2.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-BK.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-SD-2.jpg"
        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'laveira',
      category: 'jacket',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Beige'],
      description: "Elegant black jacket from the LA VEIRA collection, designed for the modern woman of faith",
      verse: "She is clothed with strength and dignity - Proverbs 31:25",
      isComingSoon: false,
      inStock: true,
    },
    {
      id: 2,
      name: "LA VEIRA Jacket - Male",
      price: 45.00,
      images: {
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-2.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-BK.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-SD-1.jpg"
        ],
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-BK-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-SD-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-SD-2%20(1).jpg"
        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'laveira',
      category: 'jacket',
      gender: 'male',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Beige','Black'],
      description: "Premium jacket from the LA VEIRA collection, crafted for the modern gentleman.",
      verse: "Be on your guard; stand firm in the faith; be courageous; be strong - 1 Corinthians 16:13"
,
      isComingSoon: false,
      inStock: true,
    },
    {
      id: 3,
      name: "TUMI Jacket - Female",
      price: 49.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Black%20-%20F%20%203.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Black%20-%20F%202.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Black-%20F%205.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Black%20-%20F%201.JPG"
        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Beige%20-%20F%20-%20Side%203_.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Beige%20-%20F%20-%20Back_.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Beige%20-%20F%20-%20Side_.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20Beige%20-%20F%201.JPG"
        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'jacket',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Beige'],
      description: "Premium jacket from the TUMI collection, designed for the modern woman of faith.",
      verse: "Peter 3:3-4 — Your beauty should not come from outward adornment rather, it should be that of your inner self, the unfading beauty of a gentle and quiet spirit."
,
      isComingSoon: true,
      inStock: false,
    },
    {
      id: 4,
      name: "TUMI Jacket - Male",
      price: 49.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Black%202.jpeg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Black%203.jpeg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Black.jpeg"
        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Beige%201.jpeg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Beige%202.jpeg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Beige%203.jpeg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20JK%20-%20M%20-%20Beige%204.jpeg"
        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'jacket',
      gender: 'male',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Beige', 'Black'],
      description: "Premium jacket from the TUMI collection, crafted for the modern gentleman.",
      verse: "As iron sharpens iron, so one man sharpens another - Proverbs 27:17"
,
      isComingSoon: true,
      inStock: false,
    },
    {
      id: 5,
      name: "TUMI T-Shirt - Female",
      price: 34.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-F-2.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-F-3.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-F-6.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-F-4.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-F-1.jpg"
        ],
        white: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-F-15.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-F-12.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-F-13.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-F-16.jpg"
        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20TS%20-%20Beige%20-%20F%20%204.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20TS%20-%20Beige%20-%20F%20-%20Back_.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20TS%20-%20Beige%20-%20F%201.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20TS%20-%20Beige%20-%20F%206.JPG"
        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'tshirt',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Beige','Black'],
      description: "Comfortable t-shirt from the TUMI collection, perfect for everyday wear.",
      verse: "Psalm 46:5 God is within her, she will not fall; God will help her at break of day",
      inStock: true,
    },
    {
      id: 6,
      name: "TUMI T-Shirt - Male",
      price: 34.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-M-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-M-3.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-M-4.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-M-5.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-BL-M-2.jpg"
        ],
        white: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-M-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-M-2.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-M-3.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-M-4.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/Tumi%20T-shirt/TM-TS-WT-M-5.jpg"
        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20TS%20-%20Beige%20-%20M%202.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20TS%20-%20FS-%20%20Beige%20-%20M%201.JPG"
        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'tshirt',
      gender: 'male',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black','White', 'Beige'],
      description: "Premium t-shirt from the TUMI collection for men.",
      verse:  ""
      ,
      inStock: true,
    },
    // Keep other products but remove duplicates and old t-shirt entries
    {
      id: 7,
      name: "LA VEIRA Short - Female",
      price: 39.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-shortjacket-female-black2-Photoroom.png",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-short-female-black1-Photoroom.png",
        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-Short-F-2.jpg",

        ]
      },
      collection: 'laveira',
      category: 'shorts',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Beige'],
      description: "Stylish black shorts from the LA VEIRA collection, designed for comfort and elegance.",
      verse: "Proverbs 31:30 — Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised",
      isComingSoon: false,
      inStock: true,
    },
    {
      id: 8,
      name: "LA VEIRA Short - Male",
      price: 39.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BL%20-%202.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BL%20-%201.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-BK-1.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BL%20-%201.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-1.jpg",

        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BG%20-%201.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BG%20-%202.jpg",
           "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-SD-1.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-SD-2.jpg",

        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'laveira',
      category: 'shorts',
      gender: 'male',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Beige', 'Black'],
      description: "Stylish shorts from the LA VEIRA collection for men.",
      verse: "Proverbs 27:17 — As iron sharpens iron, so one man sharpens another.",

      isComingSoon: false,
      inStock: true,
    },
    {
      id: 9,
      name: "LA VEIRA Full Set - Jacket and Skirt",
      price: 74.99,
      images: {
        black: [
         "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BL-2.jpg",
           "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BL-SD-1.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Skirt%20-%20BL%20-%202.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Skirt%20-%20BL%20-%203.jpg",
        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-3.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-2.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Skirt%20-%20BG%20-%201.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Skirt%20-%20BG%20-%202.jpg",

        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'laveira',
      category: 'set',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Beige'],
      description: "Complete black jacket and skirt set from the LA VEIRA collection.",
      verse: "Peter 3:3-4 —Your beauty should not come from outward adornment rather, it should be that of your inner self, the unfading beauty of a gentle and quiet spirit.",

      isComingSoon: false,
      inStock: true,
    },
    {
      id: 10,
      name: "LA VEIRA Full Set - Jacket and Short",
      price: 79.99,
      images: {
        black: [
         "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-shortjacket-female-black2-Photoroom.png",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-short-female-black1-Photoroom.png",

        ],
        beige: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-BK%20%20-%20Cropped%20-%202.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-F-BG-BK%20%20-%20Cropped.jpg",
         "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-Short-F-2.jpg",


        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'laveira',
      category: 'set',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Beige', 'Black'],
      description: "Stylish black jacket and short set from the LA VEIRA collection.",
      verse: "Luke 1:45 — Blessed is she who has believed that the Lord would fulfill His promises to her"
      ,

      isComingSoon: false,
      inStock: true,
    },


    {
      id: 17,
      name: "LA VEIRA Full Set - Jacket and Short",
      price: 79.99,
      images: {
        black: [
         "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-BK-1.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BL-1.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BL%20-%201.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BL%20-%202.jpg",
        ],
        beige: [
     "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-1.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV-M-BG-BK.jpg",
        "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BG%20-%202.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/LV%20Edited%20BG/LV%20-%20Short%20-%20BG%20-%201.jpg",

        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'laveira',
      category: 'set',
      gender: 'male',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Beige', 'Black'],
      description: "Premium jacket from the TUMI collection, crafted for the modern gentleman.",
      verse: "Proverbs 27:17 — As iron sharpens iron, so one man sharpens another.",

      isComingSoon: false,
      inStock: true,
    },

    {
      id: 11,
      name: "TUMI Sweat Pants",
      price: 49.99,
      images: {
        black: [
              "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Cropped/TM-PT-F-3.png",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Cropped/TM-PT-F-1.png",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20PN%20-%20Black%20-%20M%20%201.JPG",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Cropped/TM-PT-F-2.png",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F.JPG",

        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'pants',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black'],
      description: "Premium sweat pants from the TUMI collection, designed for comfort and style.",
      verse: "Colossians 3:23 — Whatever you do, work at it with all your heart, as working for the Lord, not for men",

      isComingSoon: true,
      inStock: false,
    },


    {
      id: 12,
      name: "TUMI Sweat Pants",
      price: 49.99,
      images: {
        black: [
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Cropped/TM-PT-M-2.png",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20PN%20-%20Black%20-%20M%20%201.JPG",
"https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Cropped/TM-PT-F-1.png",
 "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Cropped/TM-PT-F-2.png",
"https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20M%20-%20Side_.JPG",
        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'pants',
      gender: 'male',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black'],
      description: "Premium sweat pants from the TUMI collection, designed for comfort and style.",
      verse: "Micah 6:8 — He has shown you, O man, what is good; and what does the Lord require of you but to do justly, to love mercy, and to walk humbly with your God",

      isComingSoon: true,
      inStock: false,
    },


    {
      id: 13,
      name: "TUMI Full Set - Hoodie and Sweat Pants",
      price: 89.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F%2011(1).jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F%2010.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20F%202.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F%2013.jpg",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F%202(1).JPG",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Cropped/TM-PT-F-3.png",

        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'set',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black'],
      description: "Complete hoodie and sweat pants set from the TUMI collection.",
     verse: "Isaiah 61:10 — He has clothed me with garments of salvation and arrayed me in a robe of His righteousness.",


      isComingSoon: true,
      inStock: false,
    },


    {
      id: 14,
      name: "TUMI Full Set - Hoodie and Sweat Pants",
      price: 89.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20%20-%20M%204.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20M%204.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20PN%20-%20Black%20-%20M%20%201.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20M%201.jpg"

        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'set',
      gender: 'male',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black'],
      description: "Complete hoodie and sweat pants set from the TUMI collection.",
      verse:"1 Timothy 6:11 — But you, man of God, flee from all this, and pursue righteousness, godliness, faith, love, endurance and gentleness",
      isComingSoon: true,
      inStock: false,
    },

    {
      id: 15,
      name: "TUMI HOODIE",
      price: 44.99,
      images: {
        black: [
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F%203(1).jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20F%202.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F%2010.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F%202.jpg",
            "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20F%204.jpg",

        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'set',
      gender: 'female',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black'],
      description: "Complete hoodie and sweat pants set from the TUMI collection.The TUMI Women’s Hoodie blends elegance and comfort with divine inspiration. Soft, stylish, and empowering, it reflects the beauty of a woman clothed in grace and strength. A daily reminder that your worth and confidence come from Christ alone.",
      verse:"He has clothed me with garments of salvation and arrayed me in a robe of His righteousness. - Isaiah 61:10",
      isComingSoon: true,
      inStock: false,
    },

    {
      id: 16,
      name: "TUMI HOODIE",
      price: 44.99,
      images: {
        black: [
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20%20-%20M%204.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20FS%20-%20M%204.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20PN%20-%20Black%20-%20M%20%201.JPG",
          "https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/TM%20Collection/TM%20-%20HD%20-%20M%201.jpg"

        ]
      },
      video: "https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w34/3002A_Atelier_6_16x9.mp4",
      collection: 'tumie',
      category: 'set',
      gender: 'male',
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black'],
      description: "The TUMI Men’s Hoodie is designed for comfort, strength, and quiet confidence. Made from premium cotton blend fabric, it reminds every man that true power comes from faith, not fear. Whether at the gym, in the streets, or during devotion, this hoodie keeps you covered in purpose.",
     verse: "Be on your guard; stand firm in the faith; be courageous; be strong.",
      isComingSoon: true,
      inStock: false,
    },

  ];

  // Filter products based on current filters AND collection selection
  const filteredProducts = allProducts.filter(product => {
    // Apply existing filters
    if (filters.gender !== 'all' && product.gender !== 'unisex' && product.gender !== filters.gender) {
      return false;
    }
    if (filters.collection !== 'all' && product.collection !== filters.collection) {
      return false;
    }
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    if (filters.searchQuery && !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false;
    }

    // Apply collection filter - check if product belongs to the selected collection
    if (selectedCollection !== 'all') {
      if (product.collection !== selectedCollection) {
        return false;
      }
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Image navigation functions
  const nextImage = (productId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (productId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  // Check if product is in wishlist
  const isInWishlist = (productId: number) => {
    return wishlistItems.some(item => item.id === productId);
  };

  // Collection filter handler
  const handleCollectionFilter = (collection: string) => {
    setSelectedCollection(collection);
  };

  // Color selection handler
  const handleColorSelect = (productId: number, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
  };

  // Get current images for a product based on selected color
  const getCurrentImages = (product: Product) => {
    const selectedColor = selectedColors[product.id] || product.colors[0].toLowerCase();
    if (typeof product.images === 'object' && product.images[selectedColor]) {
      return product.images[selectedColor];
    }
    // Fallback to first color if selected color not found
    const firstColor = product.colors[0].toLowerCase();
    return typeof product.images === 'object' ? product.images[firstColor] || [] : product.images;
  };

  return (
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Collection Header */}
          <div className="text-center mb-6">
            <h2 className="text-lg font-serif font-light text-gray-900 mb-2">{t('allProducts')}</h2>
            <div className="w-8 h-px bg-black mx-auto"></div>
          </div>

          {/* Collection Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-2 bg-gray-50 p-1 rounded-lg">
              <button
                  onClick={() => handleCollectionFilter('all')}
                  className={`px-4 py-2 text-xs font-light rounded-md transition-all duration-200 ${
                      selectedCollection === 'all'
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:text-black hover:bg-white'
                  }`}
              >
                {t('allProducts')}
              </button>
              <button
                  onClick={() => handleCollectionFilter('laveira')}
                  className={`px-4 py-2 text-xs font-light rounded-md transition-all duration-200 ${
                      selectedCollection === 'laveira'
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:text-black hover:bg-white'
                  }`}
              >
                {t('laVeiraCollection')}
              </button>
              <button
                  onClick={() => handleCollectionFilter('tumie')}
                  className={`px-4 py-2 text-xs font-light rounded-md transition-all duration-200 ${
                      selectedCollection === 'tumie'
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:text-black hover:bg-white'
                  }`}
              >
                {t('tumieCollection')}
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedProducts.map((product) => {
              const currentImages = getCurrentImages(product);
              const currentIndex = currentImageIndex[product.id] || 0;
              const isHovered = hoveredProduct === product.id;
              const selectedColor = selectedColors[product.id] || product.colors[0];

              return (
                  <div
                      key={product.id}
                      className="group cursor-pointer"
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      onClick={() => setSelectedProduct(product)}
                  >
                    {/* Product Image with Hover Effect */}
                    <div className="relative aspect-[3/4] bg-gray-50 mb-2 overflow-hidden">
                      <img
                          src={isHovered && currentImages[1] ? currentImages[1] : currentImages[currentIndex]}
                          alt={product.name}
                          className="w-full h-full object-cover object-[center_top] transition-all duration-300 group-hover:scale-105"
                          style={{ objectPosition: 'center 0%' }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop';
                          }}
                      />

                      {/* Image Navigation - only show if multiple images and not hovering */}
                      {currentImages.length > 1 && !isHovered && (
                          <>
                            <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevImage(product.id, currentImages.length);
                                }}
                                className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                            >
                              <ChevronLeft className="w-3 h-3" />
                            </button>
                            <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextImage(product.id, currentImages.length);
                                }}
                                className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-white/80 hover:bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                            >
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </>
                      )}

                      {/* Wishlist Button Only - No Add to Cart */}
                      <div className={`absolute top-1 right-1 transition-opacity ${
                          isInWishlist(product.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToWishlist(product);
                            }}
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                                isInWishlist(product.id)
                                    ? 'bg-red-600 text-white'
                                    : 'bg-white/80 hover:bg-white text-black'
                            }`}
                        >
                          <Heart className={`w-3 h-3 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      {/* Coming Soon Badge */}
                      {product.isComingSoon && (
                          <div className="absolute top-1 left-1">
                      <span className="bg-black text-white px-2 py-1 text-xs font-light rounded">
                        COMING SOON
                      </span>
                          </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-1">
                      <h3 className="text-xs font-light text-gray-900 line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-light">{product.collection}</p>

                      {/* Color Selection */}
                      {product.colors.length > 1 && (
                          <div className="flex gap-1 mt-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleColorSelect(product.id, color);
                                    }}
                                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                                        selectedColor === color
                                            ? 'border-black scale-110'
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                    style={{
                                      backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                          color.toLowerCase() === 'black' ? '#000000' :
                                              color.toLowerCase() === 'beige' ? '#f5f5dc' : color.toLowerCase()
                                    }}
                                    title={color}
                                />
                            ))}
                          </div>
                      )}

                      <div className="flex items-center gap-2">
                        <p className="text-xs font-medium text-gray-900">{formatPrice(product.price)}</p>
                        {product.originalPrice && (
                            <p className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</p>
                        )}
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>

          {/* No Products Message */}
          {sortedProducts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-xs text-gray-500">{t('noProductsFound')}</p>
              </div>
          )}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
                isInWishlist={isInWishlist(selectedProduct.id)}
            />
        )}
      </section>
  );
};

export default Collection;