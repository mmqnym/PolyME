import { useContext, useEffect } from "react";

import { NavigatorContext } from "../../../context/navigatorContext";
import DarkModeLogo from "../../assets/dark-mode.svg?react";
import NormalModeLogo from "../../assets/normal-mode.svg?react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";

function MobileModeSwitcher() {
	const { t } = useTranslation();
	const navigatorContext = useContext(NavigatorContext);

	if (!navigatorContext) {
		throw new Error("NavigatorContext must be used within a NavigatorProvider");
	}

	useEffect(() => {
		if (navigatorContext.isDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "normal");
		}
	}, [navigatorContext.isDarkMode]);

	const toggleDarkMode = () => {
		navigatorContext.setIsDarkMode((prev) => !prev);
	};

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<li
			id="mobile-mode-switcher"
			className={`${globalContext.font} flex flex-row items-center w-full mt-1 ml-2 rounded-md h-14 bg-gray-700/90 dark:bg-gray-300/90 sm:ml-4 xl:hidden`}
			onClick={toggleDarkMode}
		>
			{!navigatorContext.isDarkMode ? (
				<>
					<NormalModeLogo className="p-1 ml-2 mr-2 transition-colors duration-300 rounded-full w-7 bg-gray-300/30 fill-gray-300 hover:fill-amber-600 dark:fill-white/70 sm:ml-6 sm:mr-4 sm:w-10" />
					<p className="text-xl text-gray-300">{t("theme.light")}</p>
				</>
			) : (
				<>
					<DarkModeLogo className="p-1 ml-2 mr-2 transition-colors duration-300 rounded-full w-7 bg-gray-500/30 fill-gray-500 hover:fill-amber-600 dark:fill-black/70 sm:ml-6 sm:mr-4 sm:w-10" />
					<p className="text-xl text-black/70">{t("theme.dark")}</p>
				</>
			)}
		</li>
	);
}

export default MobileModeSwitcher;
