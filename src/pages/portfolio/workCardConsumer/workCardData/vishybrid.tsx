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
	description: "portfolio.vishybrid.about",
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
	detail: "portfolio.vishybrid.detail",
};

export default vishybridData;
