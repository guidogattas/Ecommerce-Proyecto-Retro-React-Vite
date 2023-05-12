import { useState } from "react";

const ItemCount = ({stock, addCart}) => {

    const [cantidad, setCantidad] = useState(1)
    const [carrito, setCarrito] = useState([])


    

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)};
        }
        

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
                <span className="m-2 h-12 px-6 text-lg">{cantidad}</span>
                <button className="btn-cantidad" onClick={restar}>
                    -
                </button>
                <br />
                <button className="btn-details mt-2">
                    Ver Detalles
                </button>
                <button className="btn-addToCart mt-2"
                onClick={() => addCart(cantidad)} disabled={!stock}
                >
                    Agregar al Carrito
                </button>
            </div>
        </>
    );
};


export default ItemCount