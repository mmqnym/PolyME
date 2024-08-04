import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/vishybrid/vishybrid-1.webp";
import screenshot2 from "../../../../general/assets/works/content/vishybrid/vishybrid-2.webp";
import screenshot3 from "../../../../general/assets/works/content/vishybrid/vishybrid-3.webp";
import screenshot4 from "../../../../general/assets/works/content/vishybrid/vishybrid-4.webp";
import screenshot5 from "../../../../general/assets/works/content/vishybrid/vishybrid-5.webp";
import screenshot6 from "../../../../general/assets/works/content/vishybrid/vishybrid-6.webp";
import screenshot7 from "../../../../general/assets/works/content/vishybrid/vishybrid-7.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import vishybridProjectLogo from "../../../../general/assets/works/preview/vishybrid.webp";

const vishybridData: WorkCardProps = {
	title: "VisHybrid",
	dockIcon: { src: vishybridProjectLogo, alt: "vishybrid-project-logo" },
	display: {
		imgs: [
			{ src: screenshot1, alt: "vishybrid-screenshot-1" },
			{ src: screenshot2, alt: "vishybrid-screenshot-2" },
			{ src: screenshot3, alt: "vishybrid-screenshot-3" },
			{ src: screenshot4, alt: "vishybrid-screenshot-4" },
			{ src: screenshot5, alt: "vishybrid-screenshot-5" },
			{ src: screenshot6, alt: "vishybrid-screenshot-6" },
			{ src: screenshot7, alt: "vishybrid-screenshot-7" },
		],
	},
	links: [
		{
			icon: vishybridProjectLogo,
			alt: "vishybrid-project-link",
			url: "https://www.axis3d.com/vishybrid",
		},
		{ icon: githubLinkIcon, alt: "vishybrid-github-link", url: "#" },
	],
	description:
		"這是一款基於 AI 的多媒體訊號廣播工具，支援及時去背以及動作捕捉。同時提供易於操作的介面，支援英文、簡體中文、繁體中文、日語。",
	stack: {
		languages: [
			{
				name: "TypeScript",
				color: "bg-sky-400",
			},
			{
				name: "Python",
				color: "bg-yellow-300",
			},
			{
				name: "C++",
				color: "bg-blue-500",
			},
			{
				name: "Rust",
				color: "bg-orange-300",
			},
		],
		skills: [
			"React",
			"Tailwind CSS",
			"Vite",
			"Tauri",
			"FastAPI",
			"OpenCV",
			"CUDA",
			"PyInstaller",
			"FFmpeg",
			"NDI",
		],
	},
	// biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
	detail: `此工具使用 Tauri + React + Tailwind 構建介面，後端使用 OpenCV 對視訊畫面進行即時處理（即時去除背景、動作補捉），再透過 FFmpeg 與 media server 和 NDI SDK 進行廣播，然後以 Python 建立 API 提供介面使用。本軟體支援多種輸入源（RTSP, NDI, Raw video）與輸出協議（RTSP-Opus, NDI-Opus, WebRTC-H264-Opus, WebRTC-VP8-Opus, CTP-AAC），以滿足各種多媒體傳輸需求。`,
};

export default vishybridData;
