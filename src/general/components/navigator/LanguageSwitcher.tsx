import { useContext, useEffect, useRef, useState } from "react";
import LanguageLogo from "../../assets/language.svg?react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const globalContext = useContext(GlobalContext);

  if (!globalContext) {
    throw new Error("GlobalContext must be used within a GlobalProvider");
  }

  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropDownEntered = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setVisible(true);
    setFadeOut(false);
  };

  const handleDropDownLeaved = () => {
    setFadeOut(true);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  const handleItemClicked = (lang: string) => {
    if (lang === i18n.language) {
      return;
    }

    if (lang === "zh-TW") {
      i18n.changeLanguage("zh-TW");
      globalContext.setFont("font-openhuninn");
    } else if (lang === "zh-CN") {
      i18n.changeLanguage("zh-CN");
      globalContext.setFont("font-chillroundh2othic");
    } else if (lang === "ja-JP") {
      i18n.changeLanguage("ja-JP");
      globalContext.setFont("font-kosugimaru");
    } else {
      i18n.changeLanguage("en");
      globalContext.setFont("font-ubuntu");
    }

    setFadeOut(true);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  useEffect(() => {
    localStorage.setItem("lang", i18n.language);
  }, [i18n.language]);

  return (
    <div
      className="w-auto h-auto cursor-pointer select-none"
      onMouseEnter={handleDropDownEntered}
      onMouseLeave={handleDropDownLeaved}
    >
      <LanguageLogo className="w-8 transition-colors duration-300 fill-gray-500 hover:fill-amber-600 dark:fill-white/70 hover:dark:fill-purple-200" />
      {visible && (
        <>
          <div className="fixed flex h-2 bg-transparent w-36 top-12 right-16"></div>
          <div
            className={`fixed top-14 right-16 flex h-fit w-36 flex-col overflow-hidden rounded-lg bg-zinc-700/95 backdrop-blur-xl [animation-duration:0.5s] dark:bg-zinc-300/95 ${
              fadeOut ? "animate-fade-back" : "animate-fade"
            }`}
          >
            <button
              type="button"
              className="px-4 py-2 tracking-wide text-gray-100 transition-all duration-100 cursor-pointer font-ubuntu hover:bg-zinc-500/70 dark:text-gray-900 dark:hover:bg-zinc-400/90"
              onClick={() => handleItemClicked("en")}
            >
              English
            </button>
            <div className="h-0.5 w-full bg-gray-200/50 dark:bg-gray-700" />
            <button
              type="button"
              className="px-4 py-2 tracking-wide text-gray-100 transition-all duration-100 cursor-pointer font-ubuntu hover:bg-zinc-500/70 dark:text-gray-900 dark:hover:bg-zinc-400/90"
              onClick={() => handleItemClicked("zh-TW")}
            >
              繁體中文
            </button>
            <div className="h-0.5 w-full bg-gray-200/50 dark:bg-gray-700" />
            <button
              type="button"
              className="px-4 py-2 tracking-wide text-gray-100 transition-all duration-100 cursor-pointer font-ubuntu hover:bg-zinc-500/70 dark:text-gray-900 dark:hover:bg-zinc-400/90"
              onClick={() => handleItemClicked("zh-CN")}
            >
              简体中文
            </button>
            <div className="h-0.5 w-full bg-gray-200/50 dark:bg-gray-700" />
            <button
              type="button"
              className="px-4 py-2 tracking-wide text-gray-100 transition-all duration-100 cursor-pointer font-ubuntu hover:bg-zinc-500/70 dark:text-gray-900 dark:hover:bg-zinc-400/90"
              onClick={() => handleItemClicked("ja-JP")}
            >
              日本語
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LanguageSwitcher;
