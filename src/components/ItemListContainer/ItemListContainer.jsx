import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/Data";
import ItemList from "./ItemList";

function getData(categoryid) {
  return new Promise((resolve) => {
    if (categoryid) {
      setTimeout(() =>
        resolve(
          data.filter(
            (item) => item.category.toLowerCase() === categoryid.toLowerCase()
          ),
          1000
        )
      );
    } else {
      setTimeout(() => resolve(data), 1000);
    }
  });
}
function ItemListContainer() {
  let [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    getData(categoryid).then((respuesta) => {
      setProducts(respuesta);
    });
  }, [categoryid]);

  return <ItemList products={products} />;
}

export default ItemListContainer;