import { useContext } from "react";
import { WorkCardContext } from "../../../../context/workCardContext";
import { WorkCardLinksContext } from "../../../../context/workCardLinksContext";
import SuspenseImage from "../../../../general/components/lazyLoader/SuspenseImage";
import { LinkGroup } from "../links/linksType";

function ReferenceButtonGroup() {
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
			{workCardContext.workCardData.links.map((item) => (
				<button
					key={item.alt}
					type="button"
					className={`${workCardLinksContext.switchLinks === LinkGroup.REFERENCE ? "" : "hidden"} 2k:h-12 2k:w-12 xl:h-8 xl:w-8 sm:h-12 sm:w-12 h-10 w-10 select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-yellow-900/5 dark:bg-gray-600/30" : "bg-yellow-900/10 dark:bg-gray-600/70"} p-2.5 xl:p-1.5 2k:p-2.5  transition-all duration-300 xl:hover:scale-90 xl:hover:bg-yellow-900/30 xl:dark:hover:bg-gray-300`}
				>
					<a target="_blank" href={item.url} rel="noreferrer">
						<SuspenseImage src={item.icon} alt={item.alt} />
					</a>
				</button>
			))}
		</>
	);
}

export default ReferenceButtonGroup;
