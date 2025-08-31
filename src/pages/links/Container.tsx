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
      className="relative flex min-h-[calc(100vh-4rem)] top-16 w-full flex-col items-center justify-between bg-orange-50 transition-colors duration-500 dark:bg-black"
      onClick={closeMenu}
    >
      <Helmet>
        <title>{t("navigator.Links")} - PolyME</title>
        <meta
          name="description"
          content="This page shows links related to 0xmmq, including contact info and social media."
        />
        <meta property="og:title" content="Links - PolyME" />
        <meta property="og:url" content="https://mmq.dev/portfolio" />
        <meta property="og:image" content="https://mmq.dev/main.png" />
        <meta property="og:image:alt" content="PolyME-Links" />
        <meta
          property="og:description"
          content="This page shows links related to 0xmmq, including contact info and social media."
        />
      </Helmet>
      {children}
    </div>
  );
}

export default Container;
