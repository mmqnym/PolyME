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
	description:
		"This is a travel bot with AI text segmentation, which allows users to check prices in different currencies with simple conversations, and provides some small functions for travel.",
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
	detail: `This is a Line bot that allows users to conveniently travel by providing user-friendly commands to find prices in $NTD and $USD based on the Bank of Taiwan's real-time exchange rate. It also provides convenient buttons for users to check the weather information of their current location and take notes.

	I used Django to build the callback API for Line Bot to use. The user commands use Jieba to determine which actions to perform based on the word token. The exchange rate is obtained by crawling the Bank of Taiwan exchange rate periodically.`,
};

export default travelLineBotData;
