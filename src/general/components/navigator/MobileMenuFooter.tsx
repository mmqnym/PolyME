import logo from "../../assets/logo.webp";
import brand from "../../assets/brand.webp";
import SuspenseImage from "../lazyLoader/SuspenseImage";

function MobileMenuFooter() {
	return (
		<li className="absolute flex flex-col items-center w-4/5 gap-2 -translate-x-1/2 bottom-12 left-1/2">
			<div className="w-full mb-6 border-t-2 rounded-full border-gray-500/30" />
			<SuspenseImage src={logo} alt="logo" className="w-2/5" />
			<SuspenseImage src={brand} alt="brand" className="w-4/5 xl:hidden" />
			<p className="px-2.5 py-0.5 mt-2 text-gray-700/50 transition-all duration-500 rounded-md select-none font-ubuntu text-sm sm:text-base dark:black/70 bg-yellow-700/10 dark:bg-violet-300/20 dark:text-white/70">
				© 2024 0xmmq
			</p>
		</li>
	);
}

export default MobileMenuFooter;
