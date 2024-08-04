import logo from "../../../general/assets/logo.webp";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";
import BottomWave from "./BottomWave";

function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center w-full gap-4 transition-colors duration-500 bg-orange-100 select-none group h-60 dark:border-t-2 dark:border-purple-400/30 dark:bg-stone-900/80 sm:fixed sm:bottom-0 sm:h-40 sm:flex-row xl:static xl:dark:hover:border-purple-400/70">
			<SuspenseImage
				src={logo}
				alt="logo"
				className="hidden w-20 ml-12 xl:block"
			/>
			<div className="flex flex-col items-center justify-center w-full mr-12 sm:ml-10 sm:w-1/4 lg:items-start xl:ml-2 xl:mr-16 xl:w-1/5">
				<p className="flex flex-row items-center justify-center text-3xl transition-colors duration-500 font-orbitron text-amber-900/60 dark:text-purple-400/60 xl:group-hover:text-amber-900 xl:dark:group-hover:text-purple-400">
					PolyME
				</p>
				<p className="flex items-center justify-center pt-1 text-sm pl-36 font-ubuntu text-gray-400/80 sm:pl-16 lg:pl-16">
					Produced by 0xmmq
				</p>
			</div>
			<p className="flex items-center justify-center w-full px-12 mt-4 text-sm transition-colors duration-500 text-pretty font-ubuntu text-gray-400/80 sm:w-2/3 sm:justify-start lg:mt-0 lg:px-4 xl:w-1/5 xl:group-hover:text-gray-500 xl:dark:group-hover:text-gray-300">
				For business cooperation, welcome to leaving your details by contact
				channels above, and I will respond as soon as possible.
			</p>

			<BottomWave />
		</footer>
	);
}

export default Footer;
