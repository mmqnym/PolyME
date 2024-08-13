import { useContext, useEffect } from "react";

import { NavigatorContext } from "../../../context/navigatorContext";
import DarkModeLogo from "../../assets/dark-mode.svg?react";
import NormalModeLogo from "../../assets/normal-mode.svg?react";
import { GlobalContext } from "../../../context/globalContext";

function MobileModeSwitcher() {
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
		<button
			id="mobile-mode-switcher"
			type="button"
			className={`${globalContext.font} w-fit rounded-full h-fit bg-orange-300/30 dark:bg-gray-700/30 xl:hidden`}
			onClick={toggleDarkMode}
		>
			{!navigatorContext.isDarkMode ? (
				<>
					<NormalModeLogo className="w-10 p-2 transition-colors duration-300 rounded-full bg-gray-300/30 fill-gray-400 dark:fill-white/70 sm:w-12" />
				</>
			) : (
				<>
					<DarkModeLogo className="w-10 p-2 transition-colors duration-300 rounded-full bg-gray-500/30 fill-gray-400 dark:fill-white/50 sm:w-12" />
				</>
			)}
		</button>
	);
}

export default MobileModeSwitcher;
