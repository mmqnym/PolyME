import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import brand from "../../assets/brand.webp";
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
				className="sm:w-12 h-auto w-10 xl:w-12 mr-1.5 2k:w-14"
			/>
			<SuspenseImage
				src={brand}
				alt="brand"
				className="w-32 h-auto sm:w-36 xl:w-28 2k:w-36"
			/>
		</NavLink>
	);
}

export default Title;
