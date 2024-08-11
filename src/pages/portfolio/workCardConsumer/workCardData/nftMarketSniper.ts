import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/nft-market-sniper/nft-market-sniper-1.webp";
import screenshot2 from "../../../../general/assets/works/content/nft-market-sniper/nft-market-sniper-2.webp";
import screenshot3 from "../../../../general/assets/works/content/nft-market-sniper/nft-market-sniper-3.webp";
import screenshot4 from "../../../../general/assets/works/content/nft-market-sniper/nft-market-sniper-4.webp";
import screenshot5 from "../../../../general/assets/works/content/nft-market-sniper/nft-market-sniper-5.webp";
import screenshot6 from "../../../../general/assets/works/content/nft-market-sniper/nft-market-sniper-6.webp";

import nftMarketSniperProjectLogo from "../../../../general/assets/works/preview/nft-market-sniper.webp";
import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";

const nftMarketSniperData: WorkCardProps = {
	title: "NFT Market Sniper",
	dockIcon: {
		src: nftMarketSniperProjectLogo,
		alt: "nftMarketSniper-project-logo",
	},
	display: {
		imgs: [
			{ src: screenshot1, alt: "nftMarketSniper-screenshot-1" },
			{ src: screenshot2, alt: "nftMarketSniper-screenshot-2" },
			{ src: screenshot3, alt: "nftMarketSniper-screenshot-3" },
			{ src: screenshot4, alt: "nftMarketSniper-screenshot-4" },
			{ src: screenshot5, alt: "nftMarketSniper-screenshot-5" },
			{ src: screenshot6, alt: "nftMarketSniper-screenshot-6" },
		],
	},
	links: [
		{
			icon: nftMarketSniperProjectLogo,
			alt: "nftMarketSniper-project-link",
			url: "#",
		},
		{
			icon: githubLinkIcon,
			alt: "nftMarketSniper-github-link",
			url: "https://github.com/mmqnym/NFT-Market-Sniper",
		},
	],
	description: "portfolio.nft-market-sniper.about",
	stack: {
		languages: [
			{
				name: "Python",
				color: "bg-yellow-300",
			},
		],
		skills: ["Pycord", "Pyppeteer", "MySQL"],
	},
	detail: "portfolio.nft-market-sniper.detail",
};

export default nftMarketSniperData;
