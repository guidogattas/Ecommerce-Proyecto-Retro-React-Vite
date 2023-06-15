import { Link } from "react-router-dom";

export default function ErrorPageNotFound() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="bold p-4 text-4xl text-red-700">ERROR 404</h1>
      <h3>Page Not Found</h3>
      <Link
        className="py-2 px-4 rounded bg-lime-500 text-white; mt-8 mx-auto text-center"
        to={`/`}
      >
        VOLVER
      </Link>
    </div>
  );
}
