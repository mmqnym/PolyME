import { useContext } from "react";
import { WorkCardContext } from "../../../../context/workCardContext";
import { WorkCardLinksContext } from "../../../../context/workCardLinksContext";
import SuspenseImage from "../../../../general/components/lazyLoader/SuspenseImage";
import { LinkGroup } from "../links/linksType";

import backIcon from "../../../../general/assets/works/linkIcon/back.webp";
import donateIcon from "../../../../general/assets/works/linkIcon/donate.webp";
import shareIcon from "../../../../general/assets/works/linkIcon/share.webp";

function ControlButtonGroup() {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	const workCardLinksContext = useContext(WorkCardLinksContext);

	if (!workCardLinksContext) {
		throw new Error(
			"workCardLinksContext must be used within a WorkCardLinksContextProvider",
		);
	}

	return (
		<>
			{/* donation */}
			<button
				type="button"
				onClick={() => workCardLinksContext.setSwitchLinks(LinkGroup.DONATION)}
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL || workCardLinksContext.switchLinks === LinkGroup.DONATION ? "hidden" : ""} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-yellow-900/5 dark:bg-gray-600/30" : "bg-yellow-900/10 dark:bg-gray-600/70"} transition-all duration-300 xl:hover:scale-90 xl:hover:bg-yellow-900/30 xl:dark:hover:bg-gray-300`}
			>
				<SuspenseImage
					className="w-full h-full"
					src={donateIcon}
					alt={`${workCardContext.workCardData.title}-donation`}
				/>
			</button>
			{/* social */}
			<button
				type="button"
				onClick={() => workCardLinksContext.setSwitchLinks(LinkGroup.SOCIAL)}
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL || workCardLinksContext.switchLinks === LinkGroup.DONATION ? "hidden" : ""} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-yellow-900/5 dark:bg-gray-600/30" : "bg-yellow-900/10 dark:bg-gray-600/70"} transition-all duration-300 xl:hover:scale-90 xl:hover:bg-yellow-900/30 xl:dark:hover:bg-gray-300`}
			>
				<SuspenseImage
					className="w-full h-full"
					src={shareIcon}
					alt={`${workCardContext.workCardData.title}-share}`}
				/>
			</button>
			{/* back */}
			<button
				type="button"
				onClick={() => workCardLinksContext.setSwitchLinks(LinkGroup.REFERENCE)}
				className={`${workCardLinksContext.switchLinks !== LinkGroup.REFERENCE ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-yellow-900/5 dark:bg-gray-600/30" : "bg-yellow-900/10 dark:bg-gray-600/70"} transition-all duration-300 xl:hover:scale-90 xl:hover:bg-yellow-900/30 xl:dark:hover:bg-gray-300`}
			>
				<SuspenseImage
					className="w-full h-full"
					src={backIcon}
					alt={`${workCardContext.workCardData.title}-share}`}
				/>
			</button>
		</>
	);
}

export default ControlButtonGroup;
