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
		<div className="relative flex flex-row items-center justify-start w-full py-2 mt-20 border h-fit bg-yellow-500/10 dark:bg-gray-700/30 border-orange-900/30 dark:border-gray-600/50 rounded-2xl">
			<p className="px-[1%] py-[0.1%] w-fit ml-[2%] sm:ml-[0.8%] text-[1.8vh] rounded-xl dark:text-gray-200 tracking-wide text-gray-700 bg-orange-200 select-none dark:bg-purple-400/50">
				{t("portfolio.title")}
			</p>
			<p className="absolute text-[2.5vh] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 dark:text-white/70">
				{workCardContext.workCardData.title}
			</p>
		</div>
	);
}

export default Title;
