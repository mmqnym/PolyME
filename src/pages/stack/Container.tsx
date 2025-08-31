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
      className="flex relative min-h-[calc(100vh-4rem)] top-16 w-full flex-col items-center bg-orange-50 font-ubuntu transition-colors duration-300 dark:bg-black"
      onClick={closeMenu}
    >
      <Helmet>
        <title>{t("navigator.Stack")} - PolyME</title>
        <meta name="description" content="This page shows 0xmmq's technical stack." />
        <meta property="og:title" content="Stack - PolyME" />
        <meta property="og:url" content="https://mmq.dev/stack" />
        <meta property="og:image" content="https://mmq.dev/main.png" />
        <meta property="og:image:alt" content="PolyME-Stack" />
        <meta property="og:description" content="This page shows 0xmmq's technical stack." />
      </Helmet>
      {children}
    </div>
  );
}

export default Container;
