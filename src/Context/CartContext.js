import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      alert("The product has already been added");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  let totalQuantity = 0;

  cart.forEach((elemento) => {
    totalQuantity += elemento.quantity;
  });

  let total = 0;

  cart.forEach((elemento) => {
    total += elemento.price * elemento.quantity;
  });

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        total,
        totalQuantity,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
