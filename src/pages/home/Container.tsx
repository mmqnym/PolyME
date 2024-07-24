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
      className="relative flex min-h-[calc(100vh-4rem)] w-full select-none flex-row overflow-x-hidden bg-orange-50 dark:bg-black xl:overflow-hidden"
      onClick={closeMenu}
    >
      {children}
    </div>
  );
}

export default Container;
