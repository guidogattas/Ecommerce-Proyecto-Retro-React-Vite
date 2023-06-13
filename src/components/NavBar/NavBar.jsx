import LogoVintage from "../../../public/assets/images/Logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-orange-200 px-4 md:container md:mx-auto">
      <Link to="/">
        <img
          src={LogoVintage}
          className="w-40 md:h-40"
          alt="Imagen Logo Vintage"
        />
      </Link>
      <nav className="mx-4 flex gap-4 text-center text-xl font-extrabold group-hover:text-orange-700 md:mr-auto md:flex">
        <Link to="/category/Remeras" className="hover:opacity-50">
          Remeras
        </Link>
        <Link to="/category/Buzos" className="hover:opacity-50">
          Buzos
        </Link>
        <Link to="/contacto" className="hover:opacity-50">
          Contacto
        </Link>
      </nav>
      <div className="mr-4 flex items-center gap-4">
        <Link to="/cart/" className="hover:opacity-50">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
