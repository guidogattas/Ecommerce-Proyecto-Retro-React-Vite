import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemData } from "../Services/firebase";
import ItemDetail from "../Item/ItemDetail";
import {Loader} from "../Loader/Loader";


function ItemDetailContainer() {
  const [errors, setErrors] = useState(null);
  const [product, setProduct] = useState(null);

  
  const { id } = useParams();

  useEffect(() => {
    getItemData(id)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => {
        setErrors(error.message);
      });
  }, [id]);

  if (errors)
    return (
      <div>
        <h1>Error</h1>
        <p>{errors}</p>
      </div>
    );

  if (product) {
    return <ItemDetail {...product} />;
  }
  return (
    <Loader />
  );
}

export default ItemDetailContainer;
