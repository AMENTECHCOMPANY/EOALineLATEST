import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../../lib/types';
import { useLocalization } from '../../contexts/LocalizationContext';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (id: number) => void;
  onAddToCart: (product: Product) => void;
  onClearWishlist: () => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onAddToCart,
  onClearWishlist
}) => {
  const { formatPrice } = useLocalization();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white h-full w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-500 fill-current" />
            <h2 className="text-xl font-bold text-gray-900">Wishlist</h2>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded-full">
              {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-500 mb-6">Save items you love for later</p>
              <button
                onClick={onClose}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const imageUrl = typeof item.images === 'object'
                  ? item.images[item.colors[0].toLowerCase()]?.[0] || Object.values(item.images)[0]?.[0]
                  : item.images[0];
                return (
                <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="w-24 h-32 object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=96&h=128&fit=crop';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{formatPrice(item.price)}</p>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onAddToCart(item)}
                        className="flex-1 bg-black text-white py-2 px-3 rounded text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            <button
              onClick={onClearWishlist}
              className="w-full text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              Clear Wishlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistModal;