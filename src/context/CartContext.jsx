import { createContext, useState } from 'react';

// Create Cart Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity }];
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === productId);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity,
        };
        return updatedItems;
      } else {
        return prevItems;
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // Calculate total quantity (cartCount)
  const cartCount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Calculate total price (cartTotal)
  const cartTotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCartItems([]);
};
  // Log current cart items for debugging
  console.log(cartItems);

  // Provide values to context consumers
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount: cartCount(), // Call the function to get the current count
    cartTotal: cartTotal(),
    clearCart
    };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};