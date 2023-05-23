import { useState } from "react";
import CartWidget from "../NavBar/CartWidget";

const ItemCount = ({ stock }) => {
  const [cantidad, setCantidad] = useState(1);

  const add = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const subtract = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <div className="text-center">
        <button className="btn-cantidad" onClick={add}>
          +
        </button>
        <span className="m-1 px-4 text-lg">{cantidad}</span>
        <button className="btn-cantidad" onClick={subtract}>
          -
        </button>
        <br />
      </div>
      <div className="m-auto flex w-1/2 flex-col">
        <button className="btn-addToCart container mx-auto mt-2 flex justify-center gap-2 py-5 text-sm">
          <span className="p-4">
            <CartWidget />
          </span>
        </button>
      </div>
    </>
  );
};

export default ItemCount;
