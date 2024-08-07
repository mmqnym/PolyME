import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import ModeSwitcher from "./ModeSwitcher";
import Title from "./Title";

function Navigator() {
	return (
		<nav
			id="navigator"
			className="fixed top-0 z-50 flex flex-row items-center justify-center w-full h-16 transition-colors duration-500 bg-orange-100 dark:bg-black"
		>
			<Title />
			<Menu />
			<ModeSwitcher />
			<MobileMenu />
		</nav>
	);
}

export default Navigator;
