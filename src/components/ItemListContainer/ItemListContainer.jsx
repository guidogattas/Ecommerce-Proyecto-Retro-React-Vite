import productos from "../../data/Productos";
import { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";

function getData() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(productos);
    }, 1000);
  })
}



const ItemListContainer = () => {

  let [products, setProducts] = useState([])

  useEffect(() => {
    getData().then((respuesta)=>{
      setProducts(respuesta);
    });

  }, []);


  return (
    <>
      <h1 className="mb-3 text-center font-extrabold">Catálogo</h1>
      <ItemList products={products}/> 
    </>
  );
};

export default ItemListContainer;
