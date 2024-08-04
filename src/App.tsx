import { lazy, useState } from "react";
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

	return (
		<NavigatorContext.Provider value={contextValue}>
			<BrowserRouter>
				<LazyLoader minDelay={600} fallback={<LoadingPage needTime={600} />}>
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
