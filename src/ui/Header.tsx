import MainNav from './MainNav';
import Logo from '../components/Logo';
import arrows from '../assets/arrows_1.jpg';

function Header() {
  return (
    <div
      className="flex justify-between items-center w-full px-10 pb-1 bg-cover bg-center mb-3"
      style={{ backgroundImage: `url(${arrows})` }}
    >
      <MainNav />

      <Logo />
    </div>
  );
}

export default Header;
