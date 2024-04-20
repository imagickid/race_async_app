import async_racing_logo from "../assets/async_racing_logo.jpeg";

function Logo() {
  return (
    <div className="flex justify-center items-center h-auto">
      <img
        src={async_racing_logo}
        alt="Logo with car"
        className="w-24 h-auto"
      />
    </div>
  );
}

export default Logo;
