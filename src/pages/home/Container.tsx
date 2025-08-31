import { useContext } from "react";
import { NavigatorContext } from "../../context/navigatorContext";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import StructuredData from "../../components/StructuredData";

function Container({ children }: { children: React.ReactNode }) {
  const navigatorContext = useContext(NavigatorContext);
  const { t } = useTranslation();

  if (!navigatorContext) {
    throw new Error("NavigatorContext must be used within a NavigatorProvider");
  }

  const closeMenu = () => {
    navigatorContext.setShowMobileMenu(false);
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className="relative flex min-h-[calc(100vh-4rem)] top-16 w-full select-none flex-row overflow-x-hidden bg-orange-50 transition-colors duration-300 dark:bg-black sm:overflow-hidden"
      onClick={closeMenu}
    >
      <Helmet>
        <title>{t("navigator.Profile")} - PolyME</title>
        <meta
          name="description"
          content="PolyME is the 0xmmq's personal website, used to show information about experience, skills, portfolio, etc. Welcome to visit and contact me."
        />
        <meta property="og:title" content="PolyME" />
        <meta property="og:url" content="https://mmq.dev/" />
        <meta property="og:image" content="https://mmq.dev/main.png" />
        <meta property="og:image:alt" content="PolyME-Home" />
        <meta
          property="og:description"
          content="PolyME is the 0xmmq's personal website, used to show information about experience, skills, portfolio, etc. Welcome to visit and contact me."
        />
      </Helmet>
      <StructuredData type="person" />
      <StructuredData type="website" />
      {children}
    </div>
  );
}

export default Container;
