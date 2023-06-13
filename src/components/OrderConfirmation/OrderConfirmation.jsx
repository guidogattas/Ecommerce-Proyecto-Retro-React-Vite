import { useParams } from "react-router-dom";

// TRAER TODA LA DOC DE LA ORDEN CON EL ID


function OrderConfirmation() {

  const {orderid}= useParams();

  return (
    <div className="flex  justify-center items-center mt-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Gracias Por Tu Compra</h1>
        <p className="text-lg">Este es tu comprobante <span className="font-extrabold">{orderid}</span></p>
      </div>
    </div>
  );

}

export default OrderConfirmation;
