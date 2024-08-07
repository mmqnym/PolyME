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
		"This is an AI-based multimedia broadcasting tool that supports timely background removal and motion capture. It also provides an easy-to-use interface that supports English, Simplified Chinese, Traditional Chinese, and Japanese.",
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
	detail: `This tool uses Tauri + React + Tailwind to build the interface, the backend uses OpenCV to do real-time processing of video images (real-time background removal, motion capture), then broadcasts through FFmpeg with media server and NDI SDK, after that, builds APIs in Python to provide the services.
	
	The product supports multiple input sources (RTSP, NDI, Raw video) and output protocols (RTSP-Opus, NDI-Opus, WebRTC-H264-Opus, WebRTC-VP8-Opus, CTP-AAC) to satisfy all kinds of multimedia transmission needs.`,
};

export default vishybridData;
