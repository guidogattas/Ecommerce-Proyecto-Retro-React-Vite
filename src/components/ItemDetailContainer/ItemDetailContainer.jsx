import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemData } from "../Services/firebase";
import ItemDetail from "../Item/ItemDetail";
import {Loader} from "../Loader/Loader";


function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  
  const { id } = useParams();

  useEffect(() => {
    getItemData(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  if (product) {
    return <ItemDetail {...product} />;
  }
  return (
    <Loader />
  );
}

export default ItemDetailContainer;
