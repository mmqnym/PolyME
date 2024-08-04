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
					className={`${workCardLinksContext.switchLinks === LinkGroup.REFERENCE ? "" : "hidden"} h-9 w-9 select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-gray-600/30" : "bg-gray-600/70"} p-1.5 transition-all duration-300 xl:hover:scale-90 xl:hover:bg-gray-300`}
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
