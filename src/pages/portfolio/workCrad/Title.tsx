import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";

function Title() {
	const { t } = useTranslation();
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<div className="relative flex items-center justify-center w-full bg-orange-100 border h-14 xl:h-full xl:col-span-6 xl:col-start-1 xl:row-span-1 xl:row-start-1 border-orange-900/30 dark:border-gray-700 rounded-2xl dark:bg-gray-700/30">
			<p
				className={`${globalContext.font} absolute py-0.5 px-3 2k:px-4 2k:py-1 text-base 2k:text-xl tracking-wide text-gray-700 -translate-y-1/2 bg-orange-200 select-none dark:text-gray-200 left-2 top-1/2 rounded-xl dark:bg-purple-400/50`}
			>
				{t("portfolio.title")}
			</p>
			<p
				className={`${globalContext.font} text-2xl 2k:text-3xl tracking-wide transition-all duration-200 ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-700/30 dark:text-gray-200/30" : "dark:text-gray-200 text-gray-700"}`}
			>
				{workCardContext.workCardData.title}
			</p>
		</div>
	);
}

export default Title;
