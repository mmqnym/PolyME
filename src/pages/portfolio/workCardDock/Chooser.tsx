import { type Dispatch, useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";

export interface chooserProps {
	title: string;
	icon: string;
	alt?: string;
	setCurrentHoveredProject: Dispatch<React.SetStateAction<string>>;
}

function Chooser({ title, icon, alt, setCurrentHoveredProject }: chooserProps) {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	const toggleOnClick = () => {
		workCardContext.setCurrentChosenCard(title);
	};

	const handleMouseEnter = () => {
		setCurrentHoveredProject(title);
	};

	const handleMouseLeave = () => {
		setCurrentHoveredProject("");
	};

	return (
		<button
			type="button"
			onClick={toggleOnClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`${workCardContext.currentChosenCard === title ? "-translate-y-2 dark:bg-gray-400 bg-yellow-900/50" : "dark:bg-gray-600/50 bg-yellow-900/10 xl:translate-y-0 xl:hover:-translate-y-2 xl:hover:scale-95 xl:dark:hover:bg-gray-300/30 xl:hover:bg-yellow-900/30"} group flex aspect-square h-2/3 xl:h-2/3 sm:h-3/5 flex-row rounded-md transition-all duration-100`}
		>
			<SuspenseImage
				src={icon}
				alt={alt}
				className={`p-1 sm:p-3 xl:p-2 2k:p-3 transition-all duration-300 ${workCardContext.currentChosenCard === title ? "" : "xl:group-hover:p-3"}`}
			/>
		</button>
	);
}

export default Chooser;
