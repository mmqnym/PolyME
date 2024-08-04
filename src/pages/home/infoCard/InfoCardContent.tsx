import NameSwitcher from "../nameSwitcher/NameSwitcher";

interface Props {
	showHideMsg: boolean;
}

function InfoCardContent({ showHideMsg }: Props) {
	return (
		<>
			<div className="flex flex-row items-center gap-2 xl:gap-4">
				<p className="font-ubuntu text-2xl text-gray-600 transition-colors duration-500 dark:text-gray-300 xl:text-4xl">
					Hi! I am
				</p>
				<NameSwitcher />
			</div>
			<p className="mt-4 font-ubuntu text-base tracking-wide text-amber-900/70 transition-colors duration-500 dark:text-purple-400/70 sm:text-2xl xl:text-3xl">
				Backend Software Engineer |
			</p>
			<p className="mt-5 font-ubuntu text-lg leading-8 text-gray-600 transition-colors duration-500 dark:text-gray-300">
				I am a backend engineer passionate about development and technology
				research, specializing in blockchain and fintech domains with 3 years of
				relevant work experience.
			</p>
			<p
				className={`${showHideMsg ? "mt-5 h-fit w-fit opacity-100" : "absolute z-[-1] mt-0 opacity-0"} font-ubuntu text-lg leading-8 text-gray-600 transition-all duration-500 dark:text-gray-300`}
			>
				My expertise includes planning and developing EVM smart contracts and
				high-concurrency backend systems. Over the course of my career,
				involvement in various Web3 projects has allowed me to serve in multiple
				capacities, both in-person and remotely, as a translator, consultant,
				researcher, and developer.
			</p>
			<p
				className={`${showHideMsg ? "mt-5 h-fit w-fit opacity-100" : "absolute z-[-1] mt-0 opacity-0"} font-ubuntu text-lg leading-8 text-gray-600 transition-all duration-700 dark:text-gray-300`}
			>
				Equipped with strong communication skills and a collaborative mindset,
				my professional experience and technical proficiency make me a valuable
				asset to any team.
			</p>
		</>
	);
}

export default InfoCardContent;
