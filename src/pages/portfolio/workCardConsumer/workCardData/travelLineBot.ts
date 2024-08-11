import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/travel-line-bot/travel-line-bot-1.webp";
import screenshot2 from "../../../../general/assets/works/content/travel-line-bot/travel-line-bot-2.webp";
import screenshot3 from "../../../../general/assets/works/content/travel-line-bot/travel-line-bot-3.webp";
import screenshot4 from "../../../../general/assets/works/content/travel-line-bot/travel-line-bot-4.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import travelLineBotProjectLogo from "../../../../general/assets/works/preview/travel-line-bot.webp";

const travelLineBotData: WorkCardProps = {
	title: "Travel Line Bot",
	dockIcon: {
		src: travelLineBotProjectLogo,
		alt: "travelLineBot-project-logo",
	},
	display: {
		imgs: [
			{ src: screenshot1, alt: "travelLineBot-screenshot-1" },
			{ src: screenshot2, alt: "travelLineBot-screenshot-2" },
			{ src: screenshot3, alt: "travelLineBot-screenshot-3" },
			{ src: screenshot4, alt: "travelLineBot-screenshot-4" },
		],
	},
	links: [
		{
			icon: travelLineBotProjectLogo,
			alt: "travelLineBot-project-link",
			url: "https://liff.line.me/1645278921-kWRPP32q/?accountId=462mugrh",
		},
		{
			icon: githubLinkIcon,
			alt: "travelLineBot-github-link",
			url: "https://github.com/mmqnym/Currency-Bot-using-Line-API",
		},
	],
	description: "portfolio.travel-line-bot.about",
	stack: {
		languages: [
			{
				name: "Python",
				color: "bg-yellow-300",
			},
		],
		skills: [
			"Django",
			"Line Bot",
			"Jieba",
			"Selenium",
			"Swagger",
			"Docker",
			"Heroku",
		],
	},
	detail: "portfolio.travel-line-bot.detail",
};

export default travelLineBotData;
