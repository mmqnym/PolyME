import NameSwitcher from "../nameSwitcher/NameSwitcher";

interface Props {
	showHideMsg: boolean;
}

function InfoCardContent({ showHideMsg }: Props) {
	return (
		<>
			<div className="flex flex-row items-center gap-2 xl:gap-4">
				<p className="text-2xl text-gray-600 transition-colors duration-500 font-ubuntu dark:text-gray-300 xl:text-4xl">
					Hi! I am
				</p>
				<NameSwitcher />
			</div>
			<p className="mt-4 text-base tracking-wide transition-colors duration-500 font-ubuntu text-amber-900/70 dark:text-purple-400/70 sm:text-2xl xl:text-3xl">
				Backend Software Engineer |
			</p>
			<p className="mt-5 text-lg leading-8 text-gray-600 transition-colors duration-500 font-ubuntu dark:text-gray-300">
				I am a backend engineer with a passion for development and technical
				research, specializing in the blockchain and Fintech space, with 3 years
				of related experience.
			</p>
			<p
				className={`${showHideMsg ? "mt-5 h-fit w-fit opacity-100" : "absolute z-[-1] mt-0 opacity-0"} font-ubuntu text-lg leading-8 text-gray-600 transition-all duration-500 dark:text-gray-300`}
			>
				I have planned and developed several EVM smart contracts and
				high-concurrency back-end systems, and have been a member of several
				Web3 project operations teams in various capacities (translator,
				consultant, researcher, developer).
			</p>
			<p
				className={`${showHideMsg ? "mt-5 h-fit w-fit opacity-100" : "absolute z-[-1] mt-0 opacity-0"} font-ubuntu text-lg leading-8 text-gray-600 transition-all duration-700 dark:text-gray-300`}
			>
				In addition, I have good communication and cooperation with the team, as
				well as professional related skills and experience.
			</p>
		</>
	);
}

export default InfoCardContent;
