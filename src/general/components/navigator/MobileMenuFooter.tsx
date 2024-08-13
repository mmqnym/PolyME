import logo from "../../assets/logo.webp";
import SuspenseImage from "../lazyLoader/SuspenseImage";
import MobileLanguageSwitcher from "./MobileLanguageSwitcher";
import MobileModeSwitcher from "./MobileModeSwitcher";

function MobileMenuFooter() {
	return (
		<li className="absolute flex flex-col items-center w-4/5 -translate-x-1/2 bottom-12 left-1/2">
			<div className="w-full border-t-2 rounded-full border-gray-500/30" />
			<div className="flex flex-row items-center justify-center w-full gap-4 py-3">
				<MobileModeSwitcher />
				<MobileLanguageSwitcher />
			</div>
			<div className="w-full mb-6 border-t-2 rounded-full border-gray-500/30" />
			<SuspenseImage src={logo} alt="logo" className="w-1/2 sm:w-1/3" />
			<p className="text-5xl text-gray-500 sm:text-6xl font-iceland dark:text-gray-200">
				PolyME
			</p>
			<p className="px-2.5 py-0.5 mt-6 text-gray-700/50 transition-all duration-500 rounded-md select-none font-ubuntu text-sm sm:text-base dark:black/70 bg-yellow-700/10 dark:bg-violet-300/20 dark:text-white/70">
				© 2024 0xmmq
			</p>
		</li>
	);
}

export default MobileMenuFooter;
