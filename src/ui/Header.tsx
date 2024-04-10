import MainNav from './MainNav';
import Logo from '../components/Logo';
import arrows from '../assets/arrows_1.jpg';

function Header() {
  return (
    <div
      className="flex justify-between items-center w-full px-10 pb-5 bg-cover bg-center mb-7"
      style={{ backgroundImage: `url(${arrows})` }}
    >
      <MainNav />

      <Logo />
    </div>
  );
}

export default Header;
