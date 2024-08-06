import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function Description() {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	return (
		<p
			className={`my-4 h-3/5 w-full overflow-auto break-words px-6 font-ubuntu text-lg ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-700/30 dark:text-gray-200/30" : "dark:text-gray-200 text-gray-700"} transition-all duration-100 scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-amber-900/50 dark:scrollbar-thumb-purple-400/30`}
		>
			{workCardContext.workCardData.description}
		</p>
	);
}

export default Description;
