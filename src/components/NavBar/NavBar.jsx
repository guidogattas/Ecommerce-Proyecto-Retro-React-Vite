import LogoVintage from "../../assets/images/Logo.png";
import LogoUser from "../../assets/images/user_svg_original.svg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-orange-200 px-4 md:container md:mx-auto">
      <Link to="/">
        <img
          src={LogoVintage}
          className="md:h-40 w-40"
          alt="Imagen Logo Vintage"
        />
      </Link>
      <nav className="flex gap-4 mx-4 font-extrabold text-xl text-center group-hover:text-orange-700 md:mr-auto md:flex">
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
        <button>
          <CartWidget />
          <span>0</span>
        </button>
        <img
          src={LogoUser}
          className="h-8 w-8 align-middle"
          alt="Imagen Logo Usuario"
        />
      </div>
    </div>
  );
};

export default NavBar;
