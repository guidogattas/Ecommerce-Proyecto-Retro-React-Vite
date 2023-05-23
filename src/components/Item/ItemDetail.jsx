import ItemCount from "./ItemCount";


const ItemDetail = ({ img, title, price, stock, description }) => {
  return (
    <>
      <div className="container mx-auto mb-5 flex">
        <img className="w-1/2" src={img} alt={title} />
        <div className="flex flex-col gap-5 m-auto p-5 content-center text-center text-xl">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h4>{description}</h4> 
          <h3 className="m-2 text-2xl">${price}</h3>
          <ItemCount stock={stock} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
