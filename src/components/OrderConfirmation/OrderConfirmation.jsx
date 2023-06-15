import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Services/firebase";
import { Loader } from "../Loader/Loader";

function OrderConfirmation() {
  const { orderid } = useParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderDoc = doc(db, "orders", orderid);
        const orderSnapshot = await getDoc(orderDoc);

        if (orderSnapshot.exists()) {
          const order = orderSnapshot.data();
          setOrderData(order);
        } else {
          alert("No se encontró la orden");
        }
      } catch (error) {
        alert("Error al obtener los datos de la orden:", error);
      }
    };

    fetchOrderData();
  }, [orderid]);

  if (!orderData) {
    return <Loader />;
  }

  const orderDate = new Date(orderData.date.seconds * 1000);
  const day = orderDate.getDate();
  const month = orderDate.getMonth() + 1;
  const year = orderDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Gracias Por Tu Compra</h1>

        <p className="text-lg">
          Este es tu comprobante{" "}
          <span className="font-extrabold">{orderid}</span>
        </p>
        {orderData && (
          <div className="mt-6">
            <h2 className="mb-2 text-2xl font-bold">Detalles de la Orden</h2>
            <p>Fecha: {formattedDate}</p>
            <p>Precio total: ${orderData.price}</p>
            <p>Comprador: {orderData.buyer.name}</p>
            <h3 className="mb-2 mt-4 text-xl font-bold">Items de la Orden:</h3>
            <ul>
              {orderData.items.map((item) => (
                <li key={item.id}>
                  <h4 className="font-bold">{item.title}</h4>
                  <p>Cantidad: {item.count}</p>
                  <p>Precio: ${item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderConfirmation;
