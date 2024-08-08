import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigatorContext } from "./context/navigatorContext";
import Navigator from "./general/components/navigator/Navigator";

import LazyLoader from "./general/components/lazyLoader/LazyLoader";
import LoadingPage from "./pages/loading/LoadingPage";

const Home = lazy(() => import("./pages/home/Home"));
const Stack = lazy(() => import("./pages/stack/Stack"));
const Experience = lazy(() => import("./pages/experience/Experience"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Links = lazy(() => import("./pages/Links/Links"));

function App() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme === "dark";
	});

	const contextValue = {
		showMobileMenu,
		setShowMobileMenu,
		isDarkMode,
		setIsDarkMode,
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// biome-ignore lint/suspicious/noExplicitAny: datalayer will be added to the window at runtime
		if (typeof (window as any).dataLayer === "undefined") {
			return;
		}

		// biome-ignore lint/suspicious/noExplicitAny: datalayer will be added to the window at runtime
		(window as any).dataLayer.push({
			event: "pageview",
			page_location: window.location.href,
			page_path: location.pathname + location.search,
			page_title: document.title,
		});
	}, [window.location.href]);

	return (
		<NavigatorContext.Provider value={contextValue}>
			<BrowserRouter>
				<LazyLoader minDelay={500} fallback={<LoadingPage needTime={200} />}>
					<Navigator />
					<Routes>
						<Route index element={<Home />} />
						<Route path="/stack" element={<Stack />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/links" element={<Links />} />
					</Routes>
				</LazyLoader>
			</BrowserRouter>
		</NavigatorContext.Provider>
	);
}

export default App;
