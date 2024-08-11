import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Title from "./Title";
import ToolButtonGroup from "./ToolButtonGroup";

function Navigator() {
	return (
		<nav
			id="navigator"
			className="fixed top-0 z-50 flex flex-row items-center justify-center w-full h-16 transition-colors duration-500 bg-orange-100 dark:bg-black"
		>
			<Title />
			<Menu />
			<ToolButtonGroup />
			<MobileMenu />
		</nav>
	);
}

export default Navigator;
