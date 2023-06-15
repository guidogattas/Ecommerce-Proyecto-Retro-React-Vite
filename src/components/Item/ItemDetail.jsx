import ItemCount from "./ItemCount";

const ItemDetail = (product) => {
  return (
    <>
      <div className="container col-span-2 mx-auto mb-5 flex flex-col md:flex-row">
        <img className="md:w-1/2" src={product.img} alt={product.title} />
        <div className="m-auto flex flex-col content-center gap-5 p-5 text-center text-xl">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <h4>{product.description}</h4>
          <h3 className="m-2 text-2xl">${product.price}</h3>
          {product.stock === 0 ? (
            <span>NO HAY STOCK</span>
          ) : (
            <ItemCount product={product} />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
