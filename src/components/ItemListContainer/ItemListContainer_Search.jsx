import { useState } from "react";
import Item from "../Item/Item";



const ItemListContainer_Search = ({products}) => {

  const [searchWord, setSearchWord] = useState("")

  function handleChange(e){
    const valor = e.target.value;
    setSearchWord(valor);

  }

  function filteredList(products) {
    if (searchWord === "") {
      return products;
    } else {
      return products.filter((item) => item.title.toLowerCase().includes(searchWord.toLowerCase()));
    }
  }

  const filteredProducts = filteredList(products);


  return (
    <div className="flex justify-center items-center gap-4 mb-2 text-xl">
      Búsqueda
      <input onChange={handleChange} type="text" placeholder="Dunder Mifflin, X-men..." className="bg-gray-300 text-gray-800 text-lg rounded-md p-2 " />
      <div>
        {filteredProducts.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer_Search;
