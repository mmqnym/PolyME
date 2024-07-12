import { useContext } from "react";
import MobileMenuLogo from "../../assets/mobile-menu.svg?react";
import { NavigatorContext } from "../../../context/navigatorContext";

import MenuItem from "./MenuItem";

import ProfileLogo from "../../assets/labels/profile.svg?react";
import StackLogo from "../../assets/labels/stack.svg?react";
import ExperienceLogo from "../../assets/labels/experience.svg?react";
import PortfolioLogo from "../../assets/labels/portfolio.svg?react";
import LinksLogo from "../../assets/labels/links.svg?react";
import MobileModeSwitcher from "./MobileModeSwitcher";
import Logo from "../../assets/logo.svg?react";

function MobileMenu() {
  const navigatorContext = useContext(NavigatorContext);
  if (!navigatorContext) {
    throw new Error("NavigatorContext must be used within a NavigatorProvider");
  }

  const toggleMenu = () => {
    navigatorContext?.setShowMobileMenu(!navigatorContext?.showMobileMenu);
  };

  return (
    <>
      <button id="mobile-menu-btn" type="button" className="block xl:hidden" onClick={toggleMenu}>
        <MobileMenuLogo
          className={`${navigatorContext?.showMobileMenu ? "hidden" : "block"} h-10 w-10 fill-gray-700 dark:fill-gray-300`}
        />
      </button>
      <ul
        id="mobile-menu"
        className={`dark:via-dark fixed right-0 top-0 z-10 flex min-h-screen w-[45vw] flex-col overflow-hidden border-l border-gray-700/30 bg-gradient-to-tl from-orange-100 via-orange-100 to-orange-200 transition-transform duration-300 dark:border-purple-400/30 dark:from-stone-950/90 dark:to-stone-950 sm:w-[35vw] xl:hidden ${
          navigatorContext?.showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MobileModeSwitcher />
        <MenuItem Logo={ProfileLogo} label="Profile" route="/" />
        <MenuItem Logo={StackLogo} label="Stack" route="/stack" />
        <MenuItem Logo={ExperienceLogo} label="Experience" route="/experience" />
        <MenuItem Logo={PortfolioLogo} label="Portfolio" route="/portfolio" />
        <MenuItem Logo={LinksLogo} label="Links" route="/links" />
        <li className="absolute bottom-16 left-1/2 flex w-4/5 -translate-x-1/2 flex-col items-center gap-2">
          <div className="mb-6 w-full rounded-full border-t-2 border-gray-500/30"></div>
          <Logo className="w-16" />
          <p className="font-orbitron select-none text-3xl text-gray-500 transition-all duration-500 dark:text-gray-300 xl:hidden">
            PolyME
          </p>
          <p className="font-ubuntu text dark:black/70 mt-2 select-none rounded-md bg-gray-700/90 px-2 text-gray-300 transition-all duration-500 dark:bg-gray-300/90 dark:text-black/70">
            0xmmq
          </p>
        </li>
      </ul>
    </>
  );
}

export default MobileMenu;
