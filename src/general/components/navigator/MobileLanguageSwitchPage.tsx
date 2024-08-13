import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";
import { NavigatorContext } from "../../../context/navigatorContext";

interface Props {
	showLanguageMenu: boolean;
	setShowLanguageMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLanguageSwitchPage({
	showLanguageMenu,
	setShowLanguageMenu,
}: Props) {
	const { i18n } = useTranslation();

	const globalContext = useContext(GlobalContext);

	const navigatorContext = useContext(NavigatorContext);
	if (!navigatorContext) {
		throw new Error("NavigatorContext must be used within a NavigatorProvider");
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!navigatorContext.showMobileMenu) {
			setShowLanguageMenu(false);
		}
	}, [navigatorContext.showMobileMenu]);

	function handleItemClicked(lang: string) {
		if (lang === i18n.language) {
			setShowLanguageMenu(false);
			return;
		}

		if (!globalContext) {
			throw new Error("GlobalContext must be used within a GlobalProvider");
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

		setShowLanguageMenu(false);
	}

	return (
		<div
			className={`${!showLanguageMenu ? "hidden" : ""} w-full h-full text-xl top-0 left-0 absolute z-[2000] bg-gradient-to-tl from-orange-100 via-orange-100 to-orange-200 transition-transform duration-300 dark:border-gray-500/70 dark:from-stone-950/90 dark:to-stone-950 pt-16`}
		>
			<div className="h-0.5 w-full dark:bg-gray-700 bg-gray-500/50" />
			<button
				type="button"
				className="w-full px-4 py-2 tracking-wide text-left text-gray-500 transition-all duration-100 font-ubuntu dark:text-gray-200"
				onClick={() => handleItemClicked("en")}
			>
				English
			</button>
			<div className="h-0.5 w-full dark:bg-gray-700 bg-gray-500/50" />
			<button
				type="button"
				className="px-4 py-2 tracking-wide text-gray-500 transition-all duration-100 font-ubuntu dark:text-gray-200"
				onClick={() => handleItemClicked("zh-TW")}
			>
				繁體中文
			</button>
			<div className="h-0.5 w-full dark:bg-gray-700 bg-gray-500/50" />
			<button
				type="button"
				className="px-4 py-2 tracking-wide text-gray-500 transition-all duration-100 font-ubuntu dark:text-gray-200"
				onClick={() => handleItemClicked("zh-CN")}
			>
				简体中文
			</button>
			<div className="h-0.5 w-full dark:bg-gray-700 bg-gray-500/50" />
			<button
				type="button"
				className="px-4 py-2 tracking-wide text-gray-500 transition-all duration-100 font-ubuntu dark:text-gray-200"
				onClick={() => handleItemClicked("ja-JP")}
			>
				日本語
			</button>
			<div className="h-0.5 w-full dark:bg-gray-700 bg-gray-500/50" />
		</div>
	);
}

export default MobileLanguageSwitchPage;
