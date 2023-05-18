import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <>
      <div className="mb-5 flex container mx-auto border-b-4 border-blue-400">
        <img className="w-1/2" src={product.img} alt={product.title} />
        <div className="m-auto content-center text-center text-xl">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <h3 className="m-2 text-2xl">${product.price}</h3>
          <ItemCount />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
