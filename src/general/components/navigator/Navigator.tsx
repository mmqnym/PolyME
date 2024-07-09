import Logo from "../../assets/logo.svg?react";
import ModeSwitcher from "./ModeSwitcher";
import Menu from "./Menu";
import Title from "./Title";

function Navigator() {
  return (
    <nav
      id="navigator"
      className="sticky top-0 flex h-16 w-full flex-row items-center justify-between bg-orange-100 p-4 dark:border-b-2 dark:border-purple-400/80 dark:bg-black"
    >
      <div className="flex flex-row items-center">
        <Logo className="mr-2 w-8" />
        <Title />
        <Menu />
      </div>
      <ModeSwitcher />
    </nav>
  );
}

export default Navigator;
