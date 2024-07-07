import { useEffect, useState } from "react";

import DarkModeLogo from "../../assets/dark-mode.svg?react";
import NormalModeLogo from "../../assets/normal-mode.svg?react";

function ModeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      console.log("dark");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("normal");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <NormalModeLogo className="mr-1 w-8 fill-gray-500 transition-colors duration-300 hover:fill-amber-600 dark:fill-white/70 hover:dark:fill-purple-200" />
      ) : (
        <DarkModeLogo className="mr-1 w-8 fill-gray-500 transition-colors duration-300 hover:fill-amber-600 dark:fill-white/70 hover:dark:fill-purple-200" />
      )}
    </button>
  );
}

export default ModeSwitcher;
