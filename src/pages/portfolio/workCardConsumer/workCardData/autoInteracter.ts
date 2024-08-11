import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/autointeracter/autointeracter-1.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import autoInteracterProjectLogo from "../../../../general/assets/works/preview/autoInteracter.webp";

const autoInteracterData: WorkCardProps = {
	title: "AutoInteracter",
	dockIcon: {
		src: autoInteracterProjectLogo,
		alt: "autoInteracter-project-logo",
	},
	display: {
		imgs: [{ src: screenshot1, alt: "autoInteracter-screenshot-1" }],
	},
	links: [
		{
			icon: autoInteracterProjectLogo,
			alt: "autoInteracter-project-link",
			url: "#",
		},
		{
			icon: githubLinkIcon,
			alt: "autoInteracter-github-link",
			url: "https://github.com/mmqnym/scroll-interact-script",
		},
	],
	description: "portfolio.auto-interacter.about",
	stack: {
		languages: [
			{
				name: "TypeScript",
				color: "bg-sky-400",
			},
		],
		skills: ["ts-node", "EthersJS", "Docker", "CoinMarketCap API"],
	},
	detail: "portfolio.auto-interacter.detail",
};

export default autoInteracterData;
