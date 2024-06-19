import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Stack from "./pages/stack/Stack";
import Experience from "./pages/experience/Experience";
import Portfolio from "./pages/portfolio/Portfolio";
import Links from "./pages/Links/Links";
import Navigator from "./general/components/navigator/Navigator";

function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
