import { useContext } from "react";
import { NavigatorContext } from "../../context/navigatorContext";

function Container({ children }: { children: React.ReactNode }) {
	const navigatorContext = useContext(NavigatorContext);

	if (!navigatorContext) {
		throw new Error("NavigatorContext must be used within a NavigatorProvider");
	}

	const closeMenu = () => {
		navigatorContext.setShowMobileMenu(false);
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className="relative flex min-h-[calc(100vh-4rem)] top-16 w-full select-none flex-row overflow-x-hidden bg-orange-50 transition-colors duration-300 dark:bg-black sm:overflow-hidden"
			onClick={closeMenu}
		>
			{children}
		</div>
	);
}

export default Container;
