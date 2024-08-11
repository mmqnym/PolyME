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
			className="relative flex min-h-[calc(100vh-4rem)] top-16 xl:h-[calc(100vh-4rem)] pb-48 xl:pb-32 2k:pb-40 overflow-y-auto w-full flex-col items-center bg-orange-50 pt-24 xl:pt-8 font-ubuntu transition-colors duration-300 dark:bg-black"
			onClick={closeMenu}
		>
			<Helmet>
				<title>Portfolio - PolyME</title>
				<meta
					name="description"
					content="This page shows projects that are key to growing 0xmmq's development skills."
				/>
				<meta property="og:title" content="Portfolio - PolyME" />
				<meta property="og:url" content="https://mmq.dev/portfolio" />
				<meta property="og:image" content="https://mmq.dev/main.png" />
				<meta property="og:image:alt" content="PolyME-Portfolio" />
				<meta
					property="og:description"
					content="This page shows projects that are key to growing 0xmmq's development skills."
				/>
			</Helmet>
			{children}
		</div>
	);
}

export default Container;
