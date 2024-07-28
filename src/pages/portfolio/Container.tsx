import { useContext } from "react";
import { NavigatorContext } from "../../context/navigatorContext";

function Container({ children }: { children: React.ReactNode }) {
  const navigatorContext = useContext(NavigatorContext);

  if (!navigatorContext) {
    throw new Error("NavigatorContext must be used within a NavigatorProvider");
  }

  const closeMenu = () => {
    navigatorContext.setShowMobileMenu(false);
  };

  return (
    <div
      className="relative flex h-[calc(100vh-4rem)] w-full flex-col items-center bg-orange-50 pt-24 font-ubuntu transition-colors duration-300 dark:bg-black"
      onClick={closeMenu}
    >
      {children}
    </div>
  );
}

export default Container;
