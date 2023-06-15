import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const ItemCount = ({ product }) => {
  let [count, setCount] = useState(1);
  const { cart, addItem } = useContext(cartContext);
  const existingCartItem = cart.find((item) => item.id === product.id);
  const initialCountInCart = existingCartItem ? existingCartItem.quantity : 0;
  const [countInCart, setCountInCart] = useState(initialCountInCart);

  const add = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function onAddToCart(count) {
    addItem(product, count);
    setCountInCart(count);
  }

  return (
    <>
      {countInCart === 0 ? (
        <>
          <div className="text-center">
            <button className="btn-count" onClick={add}>
              +
            </button>
            <span className="m-1 px-4 text-lg">{count}</span>
            <button className="btn-count" onClick={subtract}>
              -
            </button>
            <br />
          </div>
          <div className="m-auto flex w-1/2 flex-col">

            <button
              onClick={() => {
                onAddToCart(count);
              }}
              className="btn-addToCart py-10y mx-auto my-5 flex justify-center gap-2 text-[16px] font-bold"
            >
              Agregar al Carrito
              <ToastContainer
              autoClose={1000}
              transition={Flip}
              theme="dark"
              toastStyle={{ backgroundColor: "green" }}
            />
            </button>

          </div>
        </>
      ) : (
        <Link to="/cart">Ir al Carrito</Link>
      )}
    </>
  );
};

export default ItemCount;
