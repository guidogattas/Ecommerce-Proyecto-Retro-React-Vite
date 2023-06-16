import { Link } from "react-router-dom";

export default function ErrorProductNotFound() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="bold p-4 text-4xl text-red-700">Producto No Encontrado</h1>
      <Link
        className="py-2 px-4 rounded bg-lime-500 text-white; mt-8 mx-auto text-center"
        to={`/`}
      >
        VOLVER
      </Link>
    </div>
  );
}
