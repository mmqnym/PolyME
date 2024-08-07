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
	description:
		"This is a GameFi project running on the Arbitrum One network, focusing on relaxation and high playability, and balancing team and player profitability in pursuit of long-term operation.",
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
	detail: `In this GameFi project, I am responsible for the development of the backend system and EVM contracts. For the contracts, I used Solidity and HardHat to develop the domain name registration and resolution contract, game token contract, and game master contract; for the back-end system, I developed 6 micro-services, including user login status processing, game data recording, game synchronization, and monitoring of plug-ins, etc. I also use http2 and WebSocket to reduce the time and cost of communicating between users and the servers. 
	In addition, X and Discord Oauth are also connected to increase the difficulty of sybil attacks.`,
};

export default jumpcrossData;
