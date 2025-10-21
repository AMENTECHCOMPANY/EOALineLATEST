import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header, { FilterOptions } from './components/Header';
import Hero from './components/Hero';
import Collection from './components/Collection';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import CartModal from './components/Cart/CartModal';
import WishlistModal from './components/Wishlist/WishlistModal';
import SizeGuide from './components/InfoPages/SizeGuide';
import ShippingInfo from './components/InfoPages/ShippingInfo';
import ReturnsProcess from './components/InfoPages/ReturnsProcess';
import ContactUs from './components/InfoPages/ContactUs';
import PrivacyPolicy from './components/InfoPages/PrivacyPolicy';
import TermsOfService from './components/InfoPages/TermsOfService';
import ReturnPolicy from './components/InfoPages/ReturnPolicy';
import LaunchPage from './components/LaunchPage/LaunchPage';
import LearnMorePage from './components/LaunchPage/LearnMorePage';
import SuccessPage from './components/SuccessPage';
import { Product, CartItem } from './lib/types';
import WelcomeModal from './components/WelcomeModal';
import { AuthProvider } from './contexts/AuthContext';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Orders from './pages/admin/Orders';
import Settings from './pages/admin/Settings';
import AdminLayout from './components/Admin/AdminLayout';
import ProtectedRoute from './components/Admin/ProtectedRoute';

function ShopApp() {

  const [filters, setFilters] = useState<FilterOptions>({
    gender: "all",
    collection: "all",
    category: "all",
    searchQuery: "",
    sortBy: "newest"
  });
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  
  // Info page modals
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [showReturnsProcess, setShowReturnsProcess] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);

  // Refs for section navigation
  const heroRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('eoa-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    const savedWishlist = localStorage.getItem('eoa-wishlist');
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('eoa-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('eoa-wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Listen for filter changes from header
  useEffect(() => {
    const handleFilterChange = (event: any) => {
      const newFilters = { ...filters, ...event.detail };
      setFilters(newFilters);
    };

    window.addEventListener('filterChange', handleFilterChange);
    return () => window.removeEventListener('filterChange', handleFilterChange);
  }, [filters]);

  // Navigation handler
  const handleNavigateToSection = (section: string) => {
    switch (section) {
      case 'hero':
        heroRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'collections':
        collectionsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'brand':
      case 'story':
      case 'faith':
      case 'mission':
        brandRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'size-guide':
        setShowSizeGuide(true);
        break;
      case 'shipping':
        setShowShippingInfo(true);
        break;
      case 'returns':
        setShowReturnsProcess(true);
        break;
      case 'contact':
        setShowContactUs(true);
        break;
      case 'privacy':
        setShowPrivacyPolicy(true);
        break;
      case 'terms':
        setShowTermsOfService(true);
        break;
      case 'return-policy':
        setShowReturnPolicy(true);
        break;
      default:
        console.log(`Navigate to ${section}`);
    }
  };

  // Filter handler
  const handleFilter = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  // Search handler
  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  // Cart functions
  const handleAddToCart = (product: Product, selectedSize?: string, selectedColor?: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.product.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && 
          item.selectedSize === selectedSize && 
          item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        product, 
        quantity: 1, 
        selectedSize: selectedSize || '', 
        selectedColor: selectedColor || '' 
      }];
    });
  };

  const handleUpdateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist functions
  const handleAddToWishlist = (product: Product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromWishlist = (productId: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearWishlist = () => {
    setWishlistItems([]);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemsCount = wishlistItems.length;

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onFilter={handleFilter}
        cartItemsCount={cartItemsCount}
        wishlistItemsCount={wishlistItemsCount}
        onSearch={handleSearch}
        onShowCart={() => setShowCart(true)}
        onShowWishlist={() => setShowWishlist(true)}
        onNavigateToSection={handleNavigateToSection}
        filters={filters}
      />
      
      <div ref={heroRef}>
        <Hero />
      </div>
      
      <div ref={collectionsRef}>
        <Collection 
          filters={filters}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
          wishlistItems={wishlistItems}
        />
      </div>
      
      <div ref={brandRef}>
        <BrandStory />
      </div>
      
      <Footer onNavigateToSection={handleNavigateToSection} />

      {/* Cart Modal */}
      <CartModal
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={showWishlist}
        onClose={() => setShowWishlist(false)}
        items={wishlistItems}
        onRemoveItem={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        onClearWishlist={handleClearWishlist}
      />

      {/* Info Page Modals */}
      <SizeGuide 
        isOpen={showSizeGuide} 
        onClose={() => setShowSizeGuide(false)} 
      />
      
      <ShippingInfo 
        isOpen={showShippingInfo} 
        onClose={() => setShowShippingInfo(false)} 
      />
      
      <ReturnsProcess 
        isOpen={showReturnsProcess} 
        onClose={() => setShowReturnsProcess(false)} 
      />
      
      <ContactUs 
        isOpen={showContactUs} 
        onClose={() => setShowContactUs(false)} 
      />
      
      <PrivacyPolicy 
        isOpen={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />
      
      <TermsOfService 
        isOpen={showTermsOfService} 
        onClose={() => setShowTermsOfService(false)} 
      />
      
      <ReturnPolicy 
        isOpen={showReturnPolicy} 
        onClose={() => setShowReturnPolicy(false)} 
      />
      
      {/* Welcome Modal */}
      <WelcomeModal />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/launch" element={<LaunchPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/shop" element={<ShopApp />} />

          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;