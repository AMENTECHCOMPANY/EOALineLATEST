import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Star, ChevronLeft, ChevronRight, Plus, Minus, Check } from 'lucide-react';
import { Product } from '../../lib/types';
import { useLocalization } from '../../contexts/LocalizationContext';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  isInWishlist: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
  onAddToWishlist,
  isInWishlist
}) => {
  const { formatPrice } = useLocalization();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState('');
  const [colorError, setColorError] = useState('');
  const [selectedProductColor, setSelectedProductColor] = useState(product.colors[0]);
  const [addedToCart, setAddedToCart] = useState<Set<number>>(new Set());

  if (!isOpen) return null;

  // Get current images based on selected color
  const getCurrentImages = () => {
    if (typeof product.images === 'object' && product.images[selectedProductColor.toLowerCase()]) {
      return product.images[selectedProductColor.toLowerCase()];
    }
    // Fallback to first color if selected color not found
    const firstColor = product.colors[0].toLowerCase();
    return typeof product.images === 'object' ? product.images[firstColor] || [] : product.images;
  };

  const currentImages = getCurrentImages();
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const handleAddToCart = () => {
    // Validate color selection - mandatory for all products
    if (!selectedColor && product.colors.length > 0) {
      setColorError('Please select a color before adding to cart');
      return;
    }

    // Validate size selection - mandatory for all products
    if (!selectedSize && product.sizes.length > 0) {
      setSizeError('Please select a size before adding to cart');
      return;
    }

    // Clear any previous errors
    setSizeError('');
    setColorError('');

    const productWithSelections = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };
    onAddToCart(product, selectedSize, selectedColor);
    setAddedToCart(prev => new Set(prev).add(product.id));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-amber-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">
              {product.collection} Collection
            </span>
            {product.isNew && (
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={currentImages[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop';
                }}
              />
              
              {/* Navigation Arrows */}
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {currentImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {currentImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-amber-400 ring-2 ring-amber-400/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=80&h=80&fit=crop';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                {product.isNew && (
                  <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
                {product.isComingSoon && (
                  <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    COMING SOON
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm font-bold px-2 py-1 rounded">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </>
                )}
              </div>

              {/* Bible Verse */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
                <p className="text-amber-800 italic font-medium">{product.verse}</p>
              </div>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Size <span className="text-red-500">*</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setSizeError(''); // Clear error when size is selected
                      }}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {/* Size validation error message */}
                {sizeError && (
                  <p className="text-red-500 text-sm mt-2">{sizeError}</p>
                )}
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setSelectedColor(color);
                        setSelectedProductColor(color);
                        setCurrentImageIndex(0);
                        setColorError('');
                      }}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all capitalize ${
                        selectedColor === color
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
                {colorError && (
                  <p className="text-red-500 text-sm mt-2">{colorError}</p>
                )}
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 rounded-xl disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  addedToCart.has(product.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-black hover:bg-gray-800'
                } text-white`}
              >
                {addedToCart.has(product.id) ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    {product.inStock ? `Add to Cart - ${formatPrice(product.price * quantity)}` : 'Out of Stock'}
                  </>
                )}
              </button>
              
              <button
                onClick={() => onAddToWishlist(product)}
                className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  isInWishlist
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                {isInWishlist ? 'Added to Favorites' : 'Add to Favorites'}
              </button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 text-xl">🚚</span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900">Free Shipping</h4>
                <p className="text-xs text-gray-600">Orders over $100</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 text-xl">↩️</span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900">30-Day Returns</h4>
                <p className="text-xs text-gray-600">Easy returns</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 text-xl">🔒</span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900">Secure Payment</h4>
                <p className="text-xs text-gray-600">SSL protected</p>
              </div>
            </div>

            {/* Description */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;