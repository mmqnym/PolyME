import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import SuspenseImage from "../lazyLoader/SuspenseImage";
import { NavigatorContext } from "../../../context/navigatorContext";
import { useContext } from "react";

function Title() {
	const navigatorContext = useContext(NavigatorContext);

	if (!navigatorContext) {
		throw new Error("NavigatorContext must be used within a NavigatorProvider");
	}

	const closeMenu = () => {
		navigatorContext.setShowMobileMenu(false);
	};

	return (
		<NavLink
			id="title"
			to="/"
			className="absolute flex flex-row items-center select-none w-fit h-3/5 left-2"
			onClick={closeMenu}
		>
			<SuspenseImage
				src={logo}
				alt="logo"
				className="sm:w-10 h-auto w-12 xl:w-10 mr-0.5 2k:w-12"
			/>
			<p className="text-gray-500 text-[4.2vh] font-iceland dark:text-gray-200">
				PolyME
			</p>
		</NavLink>
	);
}

export default Title;
