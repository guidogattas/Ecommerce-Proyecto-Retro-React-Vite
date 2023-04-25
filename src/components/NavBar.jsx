import LogoVintage from '../assets/images/Logo.png'
import LogoUser from '../assets/images/user_svg_original.svg'
import CartWidget from './Icons/CartWidget';


const NavBar = () => {
  return (
    <>
    <img src={LogoVintage} className="w-40 h-40" alt="Imagen Logo Vintage" />
    <nav className='flex mr-auto gap-5'>
      <a href="#">Productos</a>
      <a href="#">Sobre Nosotros</a>
      <a href="#">Contacto</a>
    </nav>
    <div className='flex gap-4 items-center'>
      <button>
        <CartWidget />
      </button>
      <img src={LogoUser} className="align-middle w-8 h-8" alt="Imagen Logo Usuario" />
    </div>

    </>
  )
}

export default NavBar