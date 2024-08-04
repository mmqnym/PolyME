import { useContext } from "react";
import { NavigatorContext } from "../../../context/navigatorContext";
import MobileMenuLogo from "../../assets/mobile-menu.svg?react";

import MenuItem from "./MenuItem";

import ExperienceLogo from "../../assets/labels/experience.svg?react";
import LinksLogo from "../../assets/labels/links.svg?react";
import PortfolioLogo from "../../assets/labels/portfolio.svg?react";
import ProfileLogo from "../../assets/labels/profile.svg?react";
import StackLogo from "../../assets/labels/stack.svg?react";
import MobileMenuFooter from "./MobileMenuFooter";
import MobileModeSwitcher from "./MobileModeSwitcher";

function MobileMenu() {
	const navigatorContext = useContext(NavigatorContext);
	if (!navigatorContext) {
		throw new Error("NavigatorContext must be used within a NavigatorProvider");
	}

	const toggleMenu = () => {
		navigatorContext?.setShowMobileMenu(!navigatorContext?.showMobileMenu);
	};

	return (
		<>
			<button
				id="mobile-menu-btn"
				type="button"
				className="block xl:hidden"
				onClick={toggleMenu}
			>
				<MobileMenuLogo
					className={`${navigatorContext?.showMobileMenu ? "hidden" : "block"} h-10 w-10 stroke-gray-700 dark:stroke-gray-300`}
				/>
			</button>
			<ul
				id="mobile-menu"
				className={`dark:via-dark fixed right-0 top-0 z-50 flex min-h-screen w-[45vw] flex-col overflow-hidden border-l border-gray-700/30 bg-gradient-to-tl from-orange-100 via-orange-100 to-orange-200 transition-transform duration-300 dark:border-gray-500/70 dark:from-stone-950/90 dark:to-stone-950 sm:w-[35vw] xl:hidden ${
					navigatorContext?.showMobileMenu
						? "translate-x-0"
						: "translate-x-full"
				}`}
			>
				<MobileModeSwitcher />
				<MenuItem Logo={ProfileLogo} label="Profile" route="/" />
				<MenuItem Logo={StackLogo} label="Stack" route="/stack" />
				<MenuItem
					Logo={ExperienceLogo}
					label="Experience"
					route="/experience"
				/>
				<MenuItem Logo={PortfolioLogo} label="Portfolio" route="/portfolio" />
				<MenuItem Logo={LinksLogo} label="Links" route="/links" />
				<MobileMenuFooter />
			</ul>
		</>
	);
}

export default MobileMenu;
