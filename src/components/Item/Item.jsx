import { Link } from "react-router-dom";

const item = ({ id, title, img, price, stock }) => {
  const stickersClass =
    "absolute top-0 left-0 mt-6 ml-6 p-3 px-4 rounded-lg font-bold";

  return (
    <>
      <div className="relative m-0 my-0 mb-4 block h-auto">
        <div className="text-center">
          <div className="relative">
            <img
              src={img}
              alt=""
              className="inline-block max-h-[480px] "
            />
            {price < 7000 && (
              <span className={`${stickersClass} left-0 ml-2 bg-green-800 text-white`}>
                OFERTA!
              </span>
            )}
            {stock === 0 ? (
              <span className={`${stickersClass} bg-gray-500 text-white` }>NO HAY STOCK!</span>
            ) : (
              stock < 3 && (
                <span className={`${stickersClass} bg-red-700 text-white` }>ULTIMAS UNIDADES!</span>
              )
            )}
          </div>
          <h1 className="font-black">{title}</h1>
          {price < 7000 ? (
            <>
              <h3>${price}</h3>
            </>
          ) : (
            <h3>${price} </h3>
          )}
        </div>

        <div className="m-auto flex w-1/2 flex-col">
          <Link
            className="btn-details container mx-auto mt-2 text-center text-base"
            to={`/product/${id}`}
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </>
  );
};

export default item;
