import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemData } from "../Services/firebase";
import ItemDetail from "../Item/ItemDetail";
import { Loader } from "../Loader/Loader";
import ErrorProductNotFound from "../Error/ErrorProductNotFound";


function ItemDetailContainer() {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getItemData(id)
      .then((respuesta) => {
        if (respuesta) {
          setProduct(respuesta);
        } else {
          setError(<ErrorProductNotFound/>);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  if (product) {
    return <ItemDetail {...product} />;
  }

  return <Loader />;
}

export default ItemDetailContainer;
