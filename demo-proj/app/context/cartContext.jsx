import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Check if adding quantity exceeds stock
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stock) {
          alert(`Only ${product.stock} units available in stock`);
          return currentItems;
        }
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item,
        );
      } else {
        if (quantity > product.stock) {
          alert(`Only ${product.stock} units available in stock`);
          return currentItems;
        }
        return [...currentItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === productId) {
          if (quantity > item.stock) {
            alert(`Only ${item.stock} units available in stock`);
            return item;
          }
          return { ...item, quantity };
        }
        return item;
      }),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
