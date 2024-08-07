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
			<SuspenseImage src={logo} alt="logo" className="w-12 mr-2" />
			<SuspenseImage src={brand} alt="brand" className="h-full" />
		</NavLink>
	);
}

export default Title;
