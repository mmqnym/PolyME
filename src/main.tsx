import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<>
		<App />
		<Analytics />
		<SpeedInsights />
	</>,
);
