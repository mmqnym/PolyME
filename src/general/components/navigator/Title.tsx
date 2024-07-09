import { NavLink } from "react-router-dom";

function Title() {
  return (
    <NavLink
      id="title"
      to="/"
      className="font-orbitron mr-24 select-none text-3xl text-black transition-all duration-500 dark:text-white"
    >
      PolyME
    </NavLink>
  );
}

export default Title;
