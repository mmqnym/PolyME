import LocationLogo from "../../../general/assets/location.webp";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";

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
	return (
		<div className="flex min-w-0 flex-1 flex-row pl-10 sm:pl-20">
			<SuspenseImage
				className="mt-1 h-14 w-14 rounded-md sm:h-20 sm:w-20 xl:h-24 xl:w-24"
				src={logo}
			/>
			<div className="ml-4">
				<div className="font-ubuntu text-xl tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-300 sm:text-3xl xl:text-4xl">
					{title}
				</div>
				<div className="mt-1 font-ubuntu text-base tracking-wider text-amber-900 transition-colors duration-500 dark:text-purple-400 sm:text-xl">
					{organization}
				</div>
				<p className="mt-1 font-ubuntu text-sm tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-300">
					{time}
				</p>
				<p className="mt-1 flex flex-row items-center gap-1 font-ubuntu tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-300">
					<img className="h-5 w-5" src={LocationLogo} alt="location-logo" />
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
