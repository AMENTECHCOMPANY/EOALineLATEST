import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </LocalizationProvider>
  </StrictMode>
);
