import ItemCount from "./ItemCount";


const ItemDetail = (product) => {


  return (
    <>
      <div className="container flex flex-col md:flex-row col-span-2 mx-auto mb-5">
        <img className="md:w-1/2" src={product.img} alt={product.title} />
        <div className="flex flex-col gap-5 m-auto p-5 content-center text-center text-xl">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <h4>{product.description}</h4> 
          <h3 className="m-2 text-2xl">${product.price}</h3>
          {product.stock === 0 ? 
          <span>NO HAY STOCK</span>
          :
          <ItemCount product={product} />
}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
