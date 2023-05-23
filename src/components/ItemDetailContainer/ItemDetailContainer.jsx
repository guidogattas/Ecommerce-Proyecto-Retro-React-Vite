import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemData } from "../Services/mockAsyncService/getItemData";
import ItemDetail from "../Item/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();


  useEffect(() => {
    getItemData(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  return <ItemDetail {...product} />;
   ;
};

export default ItemDetailContainer;
