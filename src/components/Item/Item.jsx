import { Link } from "react-router-dom";

const item = ({ id, title, img, price, stock }) => {
  return (
    <>
      <div className="m-0 my-0 mb-4 block  h-auto">
        <div className="text-center">
          <div>
            <img src={img} alt="" className="aspect-square object-cover self-center inline-block" />
          </div>
          <h1 className="font-black">{title}</h1>
          { price < 7000 ?
          <>
          <h3>${price}</h3>
          <span className="text-green-700">OFERTA!</span>
          </>
          :
          <h3>${price} </h3>
        }
        {
        stock < 2 && <span className="text-red-500">ULTIMAS UNIDADES!</span>
      }
        </div>

        <div className="m-auto flex w-1/2 flex-col">
          <Link className="btn-details text-center container mx-auto mt-2 text-base" to={`/product/${id}`}>
              Ver Detalles
          </Link>
        </div>
      </div>
    </>
  );
};

export default item;
