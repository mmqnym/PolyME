import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.webp";

function Title() {
  return (
    <NavLink
      id="title"
      to="/"
      className="font-orbitron flex select-none flex-row items-center text-3xl text-gray-500 transition-all duration-500 dark:text-white xl:mr-40 xl:text-black"
    >
      <img src={Logo} alt="logo" className="mr-2 w-12" />
      PolyME
    </NavLink>
  );
}

export default Title;
