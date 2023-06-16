import { Link } from "react-router-dom";

export const BackToMain = () => {
  return (
    <Link
      className="text-white; mx-auto mt-8 rounded bg-lime-500 px-4 py-2 text-center"
      to={`/`}
    >
      VOLVER
    </Link>
  );
};
