import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function StackSkills() {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	return (
		<div className="flex flex-row flex-wrap gap-5 px-6 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-amber-900/50 dark:scrollbar-thumb-purple-400/30">
			{workCardContext.workCardData.stack.skills.map((item) => (
				<div className="flex flex-row items-center gap-2" key={item}>
					<div
						className={`h-2 w-2 rounded-full transition-all duration-100 ${workCardContext.isSwitchingCard ? "animate-pulse bg-gray-500/30 dark:bg-gray-300/30" : "bg-gray-500 dark:bg-gray-300"}`}
					/>
					<p
						className={`font-ubuntu text-base transition-all duration-100 ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-500/30 dark:text-gray-200/30" : "dark:text-gray-200 text-gray-500"}`}
					>
						{item}
					</p>
				</div>
			))}
		</div>
	);
}

export default StackSkills;
