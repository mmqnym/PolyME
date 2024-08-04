import Logo from "../../assets/logo.webp";

function MobileMenuFooter() {
	return (
		<li className="absolute bottom-16 left-1/2 flex w-4/5 -translate-x-1/2 flex-col items-center gap-2">
			<div className="mb-6 w-full rounded-full border-t-2 border-gray-500/30" />
			<img src={Logo} alt="logo" className="w-16" />
			<p className="font-orbitron select-none text-3xl text-gray-500 transition-all duration-500 dark:text-gray-300 xl:hidden">
				PolyME
			</p>
			<p className="font-ubuntu text dark:black/70 mt-2 select-none rounded-md bg-gray-700/90 px-2 text-gray-300 transition-all duration-500 dark:bg-gray-300/90 dark:text-black/70">
				0xmmq
			</p>
		</li>
	);
}

export default MobileMenuFooter;
