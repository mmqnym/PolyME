import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";

import TagManager from "react-gtm-module";

// TagManager.initialize({ gtmId: "GTM-TKLQL6PP" });

// biome-ignore lint/style/noNonNullAssertion: must have root
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
