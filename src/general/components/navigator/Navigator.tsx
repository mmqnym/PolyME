import Logo from "../../assets/logo.svg?react";
import ModeSwitcher from "./ModeSwitcher";
import Menu from "./Menu";
import Title from "./Title";
import MobileMenu from "./MobileMenu";
import { useContext } from "react";
import { NavigatorContext } from "../../../context/navigatorContext";

function Navigator() {
  const navigatorContext = useContext(NavigatorContext);

  if (!navigatorContext) {
    throw new Error("NavigatorContext must be used within a NavigatorProvider");
  }

  const closeMenu = () => {
    navigatorContext?.setShowMobileMenu(false);
  };

  return (
    <nav
      id="navigator"
      className="top-0 flex h-16 w-full flex-row items-center justify-between bg-orange-100 p-4 transition-colors duration-500 dark:bg-black xl:sticky"
    >
      <div className="flex flex-row items-center" onClick={closeMenu}>
        <Logo className="mr-2 w-8" />
        <Title />
        <Menu />
      </div>
      <ModeSwitcher />
      <MobileMenu />
    </nav>
  );
}

export default Navigator;
