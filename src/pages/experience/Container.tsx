import { useContext } from "react";
import { NavigatorContext } from "../../context/navigatorContext";
import { Helmet } from "react-helmet";

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
			className="flex min-h-[calc(100vh-4rem)] relative top-16 w-full flex-col items-center bg-orange-50 transition-colors duration-300 dark:bg-black"
			onClick={closeMenu}
		>
			<Helmet>
				<title>Experience - PolyME</title>
				<meta
					name="description"
					content="This page shows 0xmmq's development experience."
				/>
				<meta property="og:title" content="Experience - PolyME" />
				<meta property="og:url" content="https://mmq.dev/experience" />
				<meta property="og:image" content="https://mmq.dev/main.png" />
				<meta property="og:image:alt" content="PolyME-Experience" />
				<meta
					property="og:description"
					content="This page shows 0xmmq's development experience."
				/>
			</Helmet>
			{children}
		</div>
	);
}

export default Container;
