import { useContext, useEffect } from "react";

import { NavigatorContext } from "../../../context/navigatorContext";
import DarkModeLogo from "../../assets/dark-mode.svg?react";
import NormalModeLogo from "../../assets/normal-mode.svg?react";

function ModeSwitcher() {
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

	return (
		<button type="button" className="hidden xl:block" onClick={toggleDarkMode}>
			{!navigatorContext.isDarkMode ? (
				<NormalModeLogo className="mr-1 w-8 fill-gray-500 transition-colors duration-300 hover:fill-amber-600 dark:fill-white/70 hover:dark:fill-purple-200" />
			) : (
				<DarkModeLogo className="mr-1 w-8 fill-gray-500 transition-colors duration-300 hover:fill-amber-600 dark:fill-white/70 hover:dark:fill-purple-200" />
			)}
		</button>
	);
}

export default ModeSwitcher;
