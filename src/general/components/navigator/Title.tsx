import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import brand from "../../assets/brand.webp";
import SuspenseImage from "../lazyLoader/SuspenseImage";

function Title() {
	return (
		<NavLink
			id="title"
			to="/"
			className="flex select-none w-2/5 sm:w-[19%] h-full flex-row items-center font-orbitron text-3xl text-gray-500 transition-all duration-500 dark:text-white xl:mr-[16%] xl:text-black"
		>
			<SuspenseImage src={logo} alt="logo" className="w-12 mr-3" />
			<SuspenseImage src={brand} alt="brand" className="h-full" />
		</NavLink>
	);
}

export default Title;
