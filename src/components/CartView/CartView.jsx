import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export const CartView = () => {
  const { cart, removeItem, countTotalPrice, clearCart } =
    useContext(cartContext);
  const totalPrice = countTotalPrice();


  if (cart.length > 0) {
    return (
      <div>
        <h2 className="m-4 mb-6 text-center text-3xl font-bold">
          Tu Carrito de Compras🛒
        </h2>
        <table className="container mx-auto border-spacing-0 text-center">
          <thead className="mx-auto my-2 bg-bermuda">
            <tr className="font-extrabold leading-10">
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
              <tr key={item.id} className="font-bold">
                <td className="flex justify-center">
                  <img className="h-[150px]" src={item.img} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    className="rounded-full bg-red-500 p-3 text-white"
                    onClick={() => {
                      removeItem(item.id);
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
        <div className="container mr-10 mt-[35px] w-full text-right leading-[1.5em] text-midnight">
          <h4>TOTAL A PAGAR: $ {totalPrice}</h4>
        </div>

        <CheckoutForm
          cart={cart}
          totalPrice={totalPrice}
          clearCart={clearCart}
        />
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
