import { useContext } from "react";
import { NavigatorContext } from "../../context/navigatorContext";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

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
      className="relative flex min-h-[calc(100vh-4rem)] top-16 pb-32 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-white/50 scrollbar-track-current w-full flex-col items-center bg-orange-50 font-ubuntu transition-colors duration-300 dark:bg-black"
      onClick={closeMenu}
    >
      <Helmet>
        <title>{t("navigator.Portfolio")} - PolyME</title>
        <meta
          name="description"
          content="This page shows projects that are key to growing 0xmmq's development skills."
        />
        <meta property="og:title" content="Portfolio - PolyME" />
        <meta property="og:url" content="https://mmq.dev/portfolio" />
        <meta property="og:image" content="https://mmq.dev/main.png" />
        <meta property="og:image:alt" content="PolyME-Portfolio" />
        <meta
          property="og:description"
          content="This page shows projects that are key to growing 0xmmq's development skills."
        />
      </Helmet>
      {children}
    </div>
  );
}

export default Container;
