import { createContext, useState } from "react";

export const cartContext = createContext({ cart: [] });

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

// FUNCIONES

  function addItem(product, count) {
    const newCart = [...cart];
    newCart.push({ ...product, count });
    setCart(newCart);
  }

  function countItems() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function countTotalPrice() {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.count * item.price;
    });
    return totalPrice;
  }

  function clearCart () {setCart([])};


  function removeItem(idDelete) {
    setCart(cart.filter((item) => item.id !== idDelete));
  }

// RETORNO

  return (
    <cartContext.Provider
      value={{ cart, setCart, addItem, removeItem, countItems, clearCart, countTotalPrice }}
    >
      {children}
    </cartContext.Provider>
  );
}