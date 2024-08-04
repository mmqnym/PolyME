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
		"這是一個全自動與 EVM 合約交互的腳本。本倉庫應用於 Scroll 區塊鏈交互。",
	stack: {
		languages: [
			{
				name: "TypeScript",
				color: "bg-sky-400",
			},
		],
		skills: ["ts-node", "EthersJS", "Docker", "CoinMarketCap API"],
	},
	detail: `這個腳本的誕生源於嚕空投活動的盛行，人工參與生態交互能獲得的報酬越來越低，因此大量的帳戶自動化交互成為了一個多數人的需求。
  
  我開發了這個項目主要用於提升自我的區塊鏈知識與技術，並提供他人研究如何自動化交互合約。
  
  技術上主要使用 EthersJS 來與合約交互，大多數開發時程用在解析個項目合約的 ABI，以及對合約交互的回傳結果進行分析。`,
};

export default autoInteracterData;
