import LogoVintage from '../../assets/images/Logo.png'
import LogoUser from '../../assets/images/user_svg_original.svg'
import CartWidget from './CartWidget';


const NavBar = ({cantidad}) => {
  return (
    <div className='flex container bg-orange-200 mx-auto px-4 items-center'>
    <img src={LogoVintage} className="w-40 h-40" alt="Imagen Logo Vintage" />
    <nav className='flex mr-auto gap-5'>
      <a href="#">Productos</a>
      <a href="#">Remeras</a>
      <a href="#">Buzos</a>
      <a href="#">Sobre Nosotros</a>
      <a href="#">Contacto</a>
    </nav>
    <div className='flex gap-4 items-center'>
      <button>
        <CartWidget
        cantidad={cantidad}
        />
        <span>0</span>
      </button>
      <img src={LogoUser} className="align-middle w-8 h-8" alt="Imagen Logo Usuario" />
    </div>

    </div>
  )
}

export default NavBar