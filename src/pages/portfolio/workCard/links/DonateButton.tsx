import { useContext } from "react";
import { WorkCardContext } from "../../../../context/workCardContext";
import { WorkCardLinksContext } from "../../../../context/workCardLinksContext";
import SuspenseImage from "../../../../general/components/lazyLoader/SuspenseImage";
import { LinkGroup } from "../links/linksType";

interface DonateButtonProps {
	src: string;
	alt?: string;
	url: string;
}

function DonateButton({ src, alt, url }: DonateButtonProps) {
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
		<button
			type="button"
			className={`${workCardLinksContext.switchLinks === LinkGroup.DONATION ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-yellow-900/5 dark:bg-gray-600/30" : "bg-yellow-900/10 dark:bg-gray-600/70"} transition-all duration-300 xl:hover:scale-90 xl:hover:bg-gray-300 xl:hover:bg-yellow-900/30 xl:dark:hover:bg-gray-300`}
		>
			<a href={url} target="_blank" rel="noreferrer noopener">
				<SuspenseImage src={src} alt={alt} className="w-full h-full" />
			</a>
		</button>
	);
}

export default DonateButton;
