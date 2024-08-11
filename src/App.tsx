import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigatorContext } from "./context/navigatorContext";
import Navigator from "./general/components/navigator/Navigator";

import LazyLoader from "./general/components/lazyLoader/LazyLoader";
import LoadingPage from "./pages/loading/LoadingPage";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "./context/globalContext";

const Home = lazy(() => import("./pages/home/Home"));
const Stack = lazy(() => import("./pages/stack/Stack"));
const Experience = lazy(() => import("./pages/experience/Experience"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Links = lazy(() => import("./pages/links/Links"));

function App() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme === "dark";
	});

	const navContextValue = {
		showMobileMenu,
		setShowMobileMenu,
		isDarkMode,
		setIsDarkMode,
	};

	const [font, setFont] = useState("font-ubuntu");

	const globContextValue = {
		setFont,
		font,
	};

	const { i18n } = useTranslation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: init local language
	useEffect(() => {
		const lang = localStorage.getItem("lang");

		if (lang) {
			if (lang === "zh-TW") {
				setFont("font-openhuninn");
			} else if (lang === "zh-CN") {
				setFont("font-chillroundh2othic");
			} else if (lang === "ja-JP") {
				setFont("font-kosugimaru");
			} else {
				setFont("font-ubuntu");
			}
			i18n.changeLanguage(lang);
		}
	}, []);

	return (
		<GlobalContext.Provider value={globContextValue}>
			<NavigatorContext.Provider value={navContextValue}>
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
		</GlobalContext.Provider>
	);
}

export default App;
