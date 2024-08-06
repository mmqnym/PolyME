import logo from "../../../general/assets/logo.webp";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";
import BottomWave from "./BottomWave";
import brand from "../../../general/assets/brand.webp";

function Footer() {
	return (
		<footer className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-[30vh] sm:h-[14vh] gap-4 transition-colors duration-500 bg-orange-100 select-none group dark:border-t-2 dark:border-purple-400/30 dark:bg-stone-900/80 xl:dark:hover:border-purple-400/70">
			<div className="flex flex-col items-center justify-center w-4/5 h-full gap-2 sm:flex-row sm:justify-between xl:w-1/2">
				<div className="flex flex-row items-center justify-center w-full h-1/3 sm:h-full sm:w-fit sm:justify-start">
					<SuspenseImage src={logo} alt="logo" className="h-4/5 sm:h-1/2" />
					<div className="flex flex-col justify-center w-full h-full">
						<SuspenseImage src={brand} alt="brand" className="w-2/5 xl:w-1/4" />
						<p className="text-sm font-ubuntu mt-0.5 text-gray-400/80">
							© 2024 0xmmq. All rights reserved.
						</p>
					</div>
				</div>

				<p className="flex w-full mt-5 text-sm transition-colors duration-500 sm:mt-0 text-pretty font-ubuntu text-gray-400/80 xl:group-hover:text-gray-500 xl:dark:group-hover:text-gray-300">
					For business cooperation, welcome to leaving your details by contact
					channels above, and I will respond as soon as possible.
				</p>
			</div>
			<BottomWave />
		</footer>
	);
}

export default Footer;
