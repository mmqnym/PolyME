import Logo from "../../assets/logo.svg?react";
import ProfileLogo from "../../assets/labels/profile.svg?react";
import StackLogo from "../../assets/labels/stack.svg?react";
import ExperienceLogo from "../../assets/labels/experience.svg?react";
import PortfolioLogo from "../../assets/labels/portfolio.svg?react";
import LinksLogo from "../../assets/labels/links.svg?react";

import Item from "./Item";
import ModeSwitcher from "./ModeSwitcher";

function Navigator() {
  return (
    <nav id="menu" className="sticky top-0 flex flex-row items-center justify-between bg-orange-100 p-4 dark:bg-black">
      <div className="flex flex-row items-center">
        <Logo className="mr-2 w-8" />
        <h1 className="mr-24 font-ubuntuMono text-3xl text-black dark:text-white">LinkMe</h1>
        <ul className="flex flex-row items-center space-x-12">
          <Item Logo={ProfileLogo} label="Profile" route="/" />
          <Item Logo={StackLogo} label="Stack" route="/stack" />
          <Item Logo={ExperienceLogo} label="Experience" route="/experience" />
          <Item Logo={PortfolioLogo} label="Portfolio" route="/portfolio" />
          <Item Logo={LinksLogo} label="Links" route="/links" />
        </ul>
      </div>
      <ModeSwitcher />
    </nav>
  );
}

export default Navigator;
