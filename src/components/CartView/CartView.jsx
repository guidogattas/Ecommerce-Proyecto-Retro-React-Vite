import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export const CartView = () => {
  const { cart, removeItem, countTotalPrice, clearCart } = useContext(cartContext);
  const totalPrice = countTotalPrice();

  const notify = () => {
    toast("Producto Eliminado");
  };

  <ToastContainer
  autoClose={1000}
  transition={Flip}
  theme="dark"
  toastStyle={{ backgroundColor: "red" }}
/>

  if (cart.length > 0) {
    return (
      <div>
        <h2 className="m-4 mb-6 text-center text-3xl font-bold">
          Tu Carrito de Compras🛒
        </h2>
        <table className="border-[rgb(233,244,75)]; mx-auto my-[15px] w-[95%] border-spacing-0 rounded-[5px] border-[solid] text-center shadow-[0px_0px_8px_rgba(0,0,0,0.15)]">
          <thead className="mx-auto my-2 bg-bermuda">
            <tr className="font-extrabold leading-[56px]">
              <th>Imágen</th>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Quitar</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="font-bold leading-[56px]">
                <td>
                  <img className="h-[150px]" src={item.img} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    className="rounded-full bg-red-500 px-4 text-white"
                    onClick={() => {
                      removeItem(item.id);
                      notify();
                    }}
                  >
                    X
                  </button>
                </td>
                <th>$ {(item.price * item.count).toFixed(0)}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="container mt-[35px] w-full text-right mr-10 leading-[1.5em] text-midnight">
          <h4>TOTAL A PAGAR: $ {totalPrice}</h4>
        </div>

        <CheckoutForm cart={cart} totalPrice={totalPrice} clearCart={clearCart} />
      </div>
    );
  } else {
    return (
      <h2 className="mt-10 flex justify-center text-center text-xl font-black">
        CARRITO VACÍO👽
      </h2>
    );
  }
};

