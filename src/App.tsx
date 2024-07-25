import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./general/components/navigator/Navigator";
import { NavigatorContext } from "./context/navigatorContext";
import { lazy, useState } from "react";

import LoadingPage from "./pages/loading/LoadingPage";
import LazyLoader from "./general/components/lazyLoader/LazyLoader";

const Home = lazy(() => import("./pages/home/Home"));
const Stack = lazy(() => import("./pages/stack/Stack"));
const Experience = lazy(() => import("./pages/experience/Experience"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Links = lazy(() => import("./pages/Links/Links"));

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const contextValue = {
    showMobileMenu,
    setShowMobileMenu,
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <NavigatorContext.Provider value={contextValue}>
      <BrowserRouter>
        <Navigator />
        <LazyLoader minDelay={500} fallback={<LoadingPage needTime={500} />}>
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
