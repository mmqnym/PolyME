import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import SuspenseImage from "../lazyLoader/SuspenseImage";

function Title() {
	return (
		<NavLink
			id="title"
			to="/"
			className="flex select-none flex-row items-center font-orbitron text-3xl text-gray-500 transition-all duration-500 dark:text-white xl:mr-[16%] xl:text-black"
		>
			<SuspenseImage src={Logo} alt="logo" className="mr-2 w-12" />
			PolyME
		</NavLink>
	);
}

export default Title;
