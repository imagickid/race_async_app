import { GiRaceCar } from 'react-icons/gi';

function Footer() {
  return (
    <div className="flex gap-2 justify-center items-center text-cyan-300 pb-5">
      <GiRaceCar className="text-5xl text-pink-300" />
      SomeCoolFooter, Inc., {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
