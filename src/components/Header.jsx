
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';

const Header = () => {

  return (
    <header className='flex container bg-orange-200 mx-auto px-4 items-center'>
      <NavBar />
      <ItemListContainer />
    </header>
  );
};

export default Header;
