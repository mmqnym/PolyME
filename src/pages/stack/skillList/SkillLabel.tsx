import React from "react";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";

interface Props {
	fill?: string;
	logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
	label: string;
	width?: string;
	height?: string;
}

function SkillLabel({
	logo,
	label,
	fill,
	width = "w-10 sm:w-16",
	height = "h-10 sm:h-16",
}: Props) {
	return (
		<div className="flex flex-row items-center justify-center h-8 gap-2 pl-2 pr-4 mt-6 transition-colors duration-500 border-2 rounded-md w-fit border-amber-900/40 bg-gray-200/70 dark:border-purple-400/40 dark:bg-gray-700/80 sm:mt-12 sm:h-10 sm:gap-4 xl:group-hover:border-amber-900/80 xl:dark:group-hover:border-purple-400/80">
			{typeof logo === "string" ? (
				<SuspenseImage
					src={logo}
					alt={label}
					className={`${width} ${height}`}
				/>
			) : (
				logo &&
				React.createElement(logo, { className: `${width} ${height} ${fill}` })
			)}
			<p className="text-base text-gray-700 dark:text-gray-300 sm:text-xl">
				{label}
			</p>
		</div>
	);
}

export default SkillLabel;
