import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const item = ({ id, title, img, price, stock }) => {
  return (
    <>
      <div className="m-4  my-auto mb-4 block  h-auto">
        <div className="text-center">
          <div>
            <img src={img} alt="" className="aspect-square object-cover" />
          </div>
          <h1 className="font-black">{title}</h1>
          <h3>${price}</h3>
        </div>

        <ItemCount stock={stock} />

        <div className="m-auto flex w-1/2 flex-col">
          <Link to={`/product/${id}`}>
            <button className="btn-details container mx-auto mt-2 text-base">
              Ver Detalles
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default item;
