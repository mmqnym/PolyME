import { NavLink } from "react-router-dom";

function MobileInfoCardContent() {
	return (
		<div className="flex flex-col w-3/4 mt-10">
			<p className="mt-5 text-lg leading-8 text-gray-600 transition-colors duration-500 font-ubuntu dark:text-gray-300">
				I am a backend engineer passionate about development and technology
				research, specializing in blockchain and fintech domains with 3 years of
				relevant work experience.
			</p>
			<p className="mt-5 text-lg leading-8 text-gray-600 transition-all duration-700 opacity-100 h-fit w-fit font-ubuntu dark:text-gray-300">
				My expertise includes planning and developing EVM smart contracts and
				high-concurrency backend systems. Over the course of my career,
				involvement in various Web3 projects has allowed me to serve in multiple
				capacities, both in-person and remotely, as a translator, consultant,
				researcher, and developer.
			</p>
			<p className="mt-5 text-lg leading-8 text-gray-600 transition-all duration-700 opacity-100 h-fit w-fit font-ubuntu dark:text-gray-300">
				Equipped with strong communication skills and a collaborative mindset,
				my professional experience and technical proficiency make me a valuable
				asset to any team.
			</p>
			<div className="relative flex flex-row items-center w-full h-12 gap-5 mt-10">
				<NavLink
					to="/links"
					draggable="false"
					className="px-6 py-2 text-base font-medium tracking-wide text-gray-500 duration-500 border-2 rounded-md transion-colors w-fit border-amber-800/40 bg-gray-100/70 font-ubuntu dark:border-purple-400/40 dark:bg-gray-700/70 dark:text-gray-300 xl:text-lg xl:hover:bg-gray-100/90 xl:active:translate-y-1 xl:dark:hover:bg-gray-700/90"
				>
					Contact
				</NavLink>
			</div>
		</div>
	);
}

export default MobileInfoCardContent;
