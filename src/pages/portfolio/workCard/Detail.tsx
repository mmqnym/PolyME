import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";

function Detail() {
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
		<div className="w-full h-64 bg-orange-100 border 2k:h-80 border-orange-900/30 dark:border-gray-700 rounded-2xl dark:bg-gray-700/30">
			<p className="px-[1%] py-[0.1%] w-fit mt-[2%] ml-[2%] sm:mt-[0.8%] sm:ml-[0.8%] text-[1.8vh] rounded-xl dark:text-gray-200 tracking-wide text-gray-700 bg-orange-200 select-none dark:bg-purple-400/50">
				{t("portfolio.detail")}
			</p>
			<p
				className={`${globalContext.font} mt-4 xl:h-[70%] h-4/5 2k:h-4/5 w-full overflow-y-auto whitespace-pre-line px-6 pb-5 text-lg xl:text-sm 2k:text-lg ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-700/30 dark:text-gray-200/30" : "dark:text-gray-200 text-gray-700"} transition-all duration-100 scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-amber-900/50 dark:scrollbar-thumb-purple-400/30`}
			>
				{t(workCardContext.workCardData.detail)}
			</p>
		</div>
	);
}

export default Detail;
