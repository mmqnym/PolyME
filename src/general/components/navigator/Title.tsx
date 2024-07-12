import { NavLink } from "react-router-dom";
function Title() {
  return (
    <NavLink
      id="title"
      to="/"
      className="font-orbitron select-none text-3xl text-gray-500 transition-all duration-500 dark:text-white xl:mr-40 xl:text-black"
    >
      PolyME
    </NavLink>
  );
}

export default Title;
