import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/globalContext";

import DarkModeLogo from "../../assets/language.svg?react";
import MobileLanguageSwitchPage from "./MobileLanguageSwitchPage";

function MobileLanguageSwitcher() {
	const globalContext = useContext(GlobalContext);
	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	const [showLanguageMenu, setShowLanguageMenu] = useState(false);

	const handleButtonClicked = () => {
		setShowLanguageMenu((prev) => !prev);
	};

	return (
		<>
			<button
				type="button"
				onClick={handleButtonClicked}
				className={`${globalContext.font} w-fit rounded-full h-fit bg-orange-300/30 dark:bg-gray-700/30 xl:hidden`}
			>
				<DarkModeLogo className="w-10 p-2 transition-colors duration-300 rounded-full bg-gray-300/30 dark:bg-gray-500/30 fill-gray-400 sm:w-12 dark:fill-white/50" />
			</button>
			<MobileLanguageSwitchPage
				showLanguageMenu={showLanguageMenu}
				setShowLanguageMenu={setShowLanguageMenu}
			/>
		</>
	);
}

export default MobileLanguageSwitcher;
