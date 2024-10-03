import Item from "../Item/Item";
import { Loader } from "../Loader/Loader";


const ItemList = ({ products }) => {

  if (products.length === 0)
    return (
      <Loader />
    );

  return (
    <div className="container grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
