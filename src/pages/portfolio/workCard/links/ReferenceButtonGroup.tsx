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
				<a
					key={item.alt}
					target="_blank"
					href={item.url}
					rel="noreferrer"
					className={`${workCardLinksContext.switchLinks === LinkGroup.REFERENCE ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-yellow-900/5 dark:bg-gray-600/30" : "bg-yellow-900/10 dark:bg-gray-600/70"} transition-all duration-300 xl:hover:scale-90 xl:hover:bg-yellow-900/30 xl:dark:hover:bg-gray-300`}
				>
					<button type="button" className="w-full h-full">
						<SuspenseImage
							src={item.icon}
							alt={item.alt}
							className="w-full h-full"
						/>
					</button>
				</a>
			))}
		</>
	);
}

export default ReferenceButtonGroup;
