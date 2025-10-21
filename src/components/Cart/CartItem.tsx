import React, { useState } from 'react';
import { Plus, Minus, Trash2, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { CartItem as CartItemType } from '../../lib/types';
import { useLocalization } from '../../contexts/LocalizationContext';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const { formatPrice } = useLocalization();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.product.images.length) % item.product.images.length);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      {/* Product Image Gallery - Larger */}
      <div className="relative w-full h-48 mb-4 flex-shrink-0">
        <img
          src={item.product.images[currentImageIndex]}
          alt={item.product.name}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop';
          }}
        />
        
        {/* Image Navigation - only show if multiple images */}
        {item.product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              style={{ fontSize: '10px' }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              style={{ fontSize: '10px' }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Image indicator dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {item.product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-amber-400' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Details */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.product.name}</h3>
          <p className="text-sm text-amber-600 font-medium mb-1">{item.product.collection.toUpperCase()} Collection</p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(item.product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({item.product.reviews})</span>
          </div>
        </div>
        
        {item.selectedSize && (
          <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Size:</span> {item.selectedSize}</p>
        )}
        {item.selectedColor && (
          <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Color:</span> {item.selectedColor}</p>
        )}
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="text-lg font-bold text-gray-900">{formatPrice(item.product.price)}</div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => onRemoveItem(item.product.id)}
              className="text-red-500 hover:text-red-700 transition-colors p-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;