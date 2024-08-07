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
	description:
		"This is a script for fully automated interaction with EVM contracts. The repository is used for Scroll blockchain interactions.",
	stack: {
		languages: [
			{
				name: "TypeScript",
				color: "bg-sky-400",
			},
		],
		skills: ["ts-node", "EthersJS", "Docker", "CoinMarketCap API"],
	},
	detail: `This script was born out of the popularity of participating in blockchain project airdrops, where manual project interactions were becoming less and less rewarding, making automated interactions with a large number of accounts becoming a need for the majority of people.
  
	I developed this project to improve my blockchain knowledge and skills, and to provide others with the opportunity to study how to automate interaction contracts.
  
	This project mainly uses EthersJS to interact with EVM contracts, and most of the development time is spent on analyzing the ABI of each project's contract and the results of the contract interaction returns.`,
};

export default autoInteracterData;
