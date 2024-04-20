import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="mx-5 my-5">
      <ul className="flex flex-col gap-y-6">
        <li>
          <NavLink
            to="/garage"
            className="border-2 border-cyan-300 hover:border-cyan-700 text-cyan-300 font-bold py-2 px-4 rounded"
          >
            Garage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/winners"
            className="border-2 border-pink-300 hover:border-pink-700 text-pink-300 font-bold py-2 px-4 rounded"
          >
            Winners
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
