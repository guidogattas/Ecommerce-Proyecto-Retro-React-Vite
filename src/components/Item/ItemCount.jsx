import { useState } from "react";
import CartWidget from "../NavBar/CartWidget";

const ItemCount = ({ stock, addCart }) => {
  const [cantidad, setCantidad] = useState(1);
  const [carrito, setCarrito] = useState([]);

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <div className="text-center">
        <button className="btn-cantidad" onClick={sumar}>
          +
        </button>
        <span className="m-1 px-4 text-lg">{cantidad}</span>
        <button className="btn-cantidad" onClick={restar}>
          -
        </button>
        <br />
      </div>
      <div className="m-auto flex w-1/2 flex-col">
        <button className="btn-details mt-2 text-base mx-auto container">Ver Detalles</button>
        <button
          className="btn-addToCart container mx-auto mt-2 flex justify-center text-sm gap-2 py-5"
          // onClick={() => addCart(cantidad)}
          // disabled={!stock}
        >
          <span>
            <CartWidget />
          </span>
          <span>Agregar al Carrito</span>
        </button>
      </div>
    </>
  );
};

export default ItemCount;
