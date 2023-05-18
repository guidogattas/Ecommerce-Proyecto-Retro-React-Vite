import data from "../../data/Data";
import { useState, useEffect } from "react";
import ItemDetail from "../Item/ItemDetail";

function getItemData() {
  return new Promise((resolve) =>
    setTimeout(() => {
      /*find id en lugar de 0*/
      resolve(data[0]);
    }, 2000)
  );
}
const ItemDetailContainer = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    getItemData().then((respuesta) => {
      setProduct(respuesta);
    });
  }, []);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
