import { useContext, useEffect, useState } from "react";
import LanguageLogo from "../../assets/language.svg?react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";

function LanguageSwitcher() {
	const { i18n } = useTranslation();
	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	const [showDropDown, setShowDropDown] = useState(false);

	const handleDropDownEntered = () => {
		setShowDropDown(true);
	};

	const handleDropDownLeaved = () => {
		setShowDropDown(false);
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

		setShowDropDown(false);
	};

	useEffect(() => {
		localStorage.setItem("lang", i18n.language);
	}, [i18n.language]);

	return (
		<div
			className="relative cursor-pointer select-none"
			onMouseEnter={handleDropDownEntered}
			onMouseLeave={handleDropDownLeaved}
		>
			<LanguageLogo className="w-8 transition-colors duration-300 fill-gray-500 hover:fill-amber-600 dark:fill-white/70 hover:dark:fill-purple-200" />
			<div
				className={`${showDropDown ? "block" : "hidden"} fixed right-20 flex flex-col overflow-hidden rounded-md bg-gray-700/50 dark:bg-gray-300/70 w-36 h-fit top-12`}
			>
				<button
					type="button"
					className="px-4 py-2 tracking-wide text-gray-100 transition-all duration-100 font-ubuntu dark:text-gray-900 xl:hover:bg-gray-700/40 xl:dark:hover:bg-gray-300/90"
					onClick={() => handleItemClicked("en")}
				>
					English
				</button>
				<div className="h-0.5 w-full dark:bg-gray-700 bg-gray-200/50" />
				<button
					type="button"
					className="px-4 py-2 tracking-wide text-gray-100 transition-all duration-100 font-ubuntu dark:text-gray-900 xl:hover:bg-gray-700/40 xl:dark:hover:bg-gray-300/90"
					onClick={() => handleItemClicked("zh-TW")}
				>
					繁體中文
				</button>
				<div className="h-0.5 w-full dark:bg-gray-700 bg-gray-200/50" />
				<button
					type="button"
					className="px-4 py-2 tracking-wide text-gray-100 transition-all duration-100 font-ubuntu dark:text-gray-900 xl:hover:bg-gray-700/40 xl:dark:hover:bg-gray-300/90"
					onClick={() => handleItemClicked("zh-CN")}
				>
					简体中文
				</button>
				<div className="h-0.5 w-full dark:bg-gray-700 bg-gray-200/50" />
				<button
					type="button"
					className="px-4 py-2 tracking-wide text-gray-100 transition-all duration-100 font-ubuntu dark:text-gray-900 xl:hover:bg-gray-700/40 xl:dark:hover:bg-gray-300/90"
					onClick={() => handleItemClicked("ja-JP")}
				>
					日本語
				</button>
			</div>
		</div>
	);
}

export default LanguageSwitcher;
