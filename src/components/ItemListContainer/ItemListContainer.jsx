import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Hero from "../Hero/Hero";
import { getData, getCategoryData } from "../Services/firebase";

function ItemListContainer() {
  let [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  const fetchData = categoryid === undefined ? getData : getCategoryData;

  useEffect(() => {
    fetchData(categoryid).then((respuesta) => {
      setProducts(respuesta);
    });
  }, [categoryid]);

  return (
    <>
      <Hero />
      <ItemList products={products} />;
    </>
  );
}

export default ItemListContainer;
