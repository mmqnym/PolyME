import { useContext } from "react";
import LocationLogo from "../../../general/assets/location.webp";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";
import { GlobalContext } from "../../../context/globalContext";

interface Props {
	title: string;
	organization: string;
	location: string;
	logo: string;
	time: string;
	content: string;
}

function TimeLineCard({
	title,
	organization,
	location,
	logo,
	time,
	content,
}: Props) {
	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<div className="flex flex-row flex-1 min-w-0 pl-10 sm:pl-20">
			<SuspenseImage
				className="mt-1 rounded-md h-14 w-14 sm:h-20 sm:w-20 xl:h-24 xl:w-24"
				src={logo}
			/>
			<div className={`${globalContext.font} ml-4`}>
				<div className="text-xl tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-300 sm:text-3xl xl:text-4xl">
					{title}
				</div>
				<div className="mt-1 text-base tracking-wider transition-colors duration-500 text-amber-900 dark:text-purple-400 sm:text-xl">
					{organization}
				</div>
				<p className="mt-1 text-sm tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-300">
					{time}
				</p>
				<p className="flex flex-row items-center gap-1 mt-1 tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-300">
					<img className="w-5 h-5" src={LocationLogo} alt="location-logo" />
					{location}
				</p>
				<div className="mt-4 space-y-4">
					{content.split("\n").map((paragraph, index) => (
						<p
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="text-sm text-gray-700 transition-colors duration-500 dark:text-gray-300 sm:text-base"
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default TimeLineCard;
