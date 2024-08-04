import { WorkCardProps } from "../../../../context/workCardContext";

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
  dockIcon: { src: nftMarketSniperProjectLogo, alt: "nftMarketSniper-project-logo" },
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
    { icon: nftMarketSniperProjectLogo, alt: "nftMarketSniper-project-link", url: "#" },
    { icon: githubLinkIcon, alt: "nftMarketSniper-github-link", url: "https://github.com/mmqnym/NFT-Market-Sniper" },
  ],
  description: "這是一個利用定時爬蟲來監控 NFT 市場網站的價格，並串接到 Discord Bot 上供用戶使用。",
  stack: {
    languages: [
      {
        name: "Python",
        color: "bg-yellow-300",
      },
    ],
    skills: ["Pycord", "Pyppeteer", "MySQL"],
  },
  detail: `這是一個用於監控 Cronos 鏈上的 NFT 市場 - ebisu' s bay的 Discord Bot，令訂閱者能夠獲得指定 Collection 的最即時地板價。

  技術上使用了 Pyppeteer 進行了週期性的爬蟲與快照，當價格變化時透過 Pycord 推播相關資訊給用戶參考。`,
};

export default nftMarketSniperData;
