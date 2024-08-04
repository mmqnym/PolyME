import Logo from "../../assets/logo.webp";

function MobileMenuFooter() {
	return (
		<li className="absolute flex flex-col items-center w-4/5 gap-2 -translate-x-1/2 bottom-16 left-1/2">
			<div className="w-full mb-6 border-t-2 rounded-full border-gray-500/30" />
			<img src={Logo} alt="logo" className="w-16" />
			<p className="text-3xl text-gray-500 transition-all duration-500 select-none font-orbitron dark:text-gray-300 xl:hidden">
				PolyME
			</p>
			<p className="px-2 mt-2 text-gray-300 transition-all duration-500 rounded-md select-none font-ubuntu text dark:black/70 bg-gray-700/90 dark:bg-gray-300/90 dark:text-black/70">
				0xmmq
			</p>
		</li>
	);
}

export default MobileMenuFooter;
