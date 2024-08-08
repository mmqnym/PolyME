import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function StackLanguages() {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	return (
		<div className="flex flex-row flex-wrap gap-4 px-6">
			{workCardContext.workCardData.stack.languages.map((item) => (
				<div className="flex flex-row items-center gap-2" key={item.name}>
					<p
						className={`${item.color} ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-700/30" : "text-gray-700"} rounded-full px-4 py-0.5 font-ubuntu text-lg xl:text-sm 2k:text-lg transition-all duration-100`}
					>
						{item.name}
					</p>
				</div>
			))}
		</div>
	);
}

export default StackLanguages;
