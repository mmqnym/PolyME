import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/jumpcross/jumpcross-1.webp";
import screenshot2 from "../../../../general/assets/works/content/jumpcross/jumpcross-2.webp";
import screenshot3 from "../../../../general/assets/works/content/jumpcross/jumpcross-3.webp";
import screenshot4 from "../../../../general/assets/works/content/jumpcross/jumpcross-4.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import jumpcrossProjectLogo from "../../../../general/assets/works/preview/jumpcross.webp";

const jumpcrossData: WorkCardProps = {
	title: "JumpCross",
	dockIcon: { src: jumpcrossProjectLogo, alt: "jumpcross-project-logo" },
	display: {
		imgs: [
			{ src: screenshot1, alt: "jumpcross-screenshot-1" },
			{ src: screenshot2, alt: "jumpcross-screenshot-2" },
			{ src: screenshot3, alt: "jumpcross-screenshot-3" },
			{ src: screenshot4, alt: "jumpcross-screenshot-4" },
		],
	},
	links: [
		{
			icon: jumpcrossProjectLogo,
			alt: "jumpcross-project-link",
			url: "https://jumpcross.app",
		},
		{
			icon: githubLinkIcon,
			alt: "jumpcross-github-link",
			url: "https://github.com/JumpCrossGame",
		},
	],
	description: "portfolio.jumpcross.about",
	stack: {
		languages: [
			{
				name: "Go",
				color: "bg-cyan-300",
			},
			{
				name: "TypeScript",
				color: "bg-sky-400",
			},
			{
				name: "Solidity",
				color: "bg-gray-300",
			},
		],
		skills: [
			"Gin",
			"http2",
			"Redis",
			"PostgreSQL",
			"Swagger",
			"Docker",
			"Nginx",
			"go-ethereum",
			"HardHat",
			"EthersJS",
			"GCP",
		],
	},
	detail: "portfolio.jumpcross.detail",
};

export default jumpcrossData;
