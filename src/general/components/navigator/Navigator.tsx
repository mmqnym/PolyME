import { useContext } from "react";
import { NavigatorContext } from "../../../context/navigatorContext";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import ModeSwitcher from "./ModeSwitcher";
import Title from "./Title";

function Navigator() {
	const navigatorContext = useContext(NavigatorContext);

	if (!navigatorContext) {
		throw new Error("NavigatorContext must be used within a NavigatorProvider");
	}

	const closeMenu = () => {
		navigatorContext.setShowMobileMenu(false);
	};

	return (
		<nav
			id="navigator"
			className="top-0 z-50 flex h-16 w-full flex-row items-center justify-between bg-orange-100 p-4 transition-colors duration-500 dark:bg-black xl:sticky"
		>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div className="flex flex-row items-center" onClick={closeMenu}>
				<Title />
				<Menu />
			</div>
			<ModeSwitcher />
			<MobileMenu />
		</nav>
	);
}

export default Navigator;
