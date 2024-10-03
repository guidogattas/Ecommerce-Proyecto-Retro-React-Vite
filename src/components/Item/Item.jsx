import { Link } from "react-router-dom";

const Item = ({ id, title, img, price, stock }) => {
  const stickersClass =
    "absolute top-0 left-0 mt-6 ml-6 p-3 px-4 rounded-lg font-bold";

  return (
    <div className="relative block h-auto m-0 my-6 mb-8">
      <div className="text-center">
        <div className="relative">
          <div className="h-[400px] w-full overflow-hidden">
            <img
              src={img}
              alt=""
              className="object-cover w-full h-full" 
            />
          </div>
          {price < 7000 && (
            <span className={`${stickersClass} left-0 ml-2 bg-green-800 text-white`}>
              OFERTA!
            </span>
          )}
          {stock === 0 ? (
            <span className={`${stickersClass} bg-gray-500 text-white`}>NO HAY STOCK!</span>
          ) : (
            stock < 3 && (
              <span className={`${stickersClass} bg-red-700 text-white`}>ULTIMAS UNIDADES!</span>
            )
          )}
        </div>
        <h1 className="font-black">{title}</h1>
        <h3>${price} </h3>
      </div>

      <div className="flex flex-col w-1/2 m-auto">
        <Link
          className="container mx-auto mt-2 text-base text-center btn-details"
          to={`/product/${id}`}
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
