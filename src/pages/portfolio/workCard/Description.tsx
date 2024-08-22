import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";

function Description() {
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
		<p
			className={`${globalContext.font} pb-2 2k:pb-12 pt-2 h-full w-full overflow-auto break-words px-6 text-lg xl:text-sm 2k:text-lg ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-700/30 dark:text-gray-200/30" : "dark:text-gray-200 text-gray-700"} transition-all duration-100 scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-amber-900/50 dark:scrollbar-thumb-purple-400/30`}
		>
			{t(workCardContext.workCardData.description)}
		</p>
	);
}

export default Description;
