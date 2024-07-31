import { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/polyme/polyme-1.webp";
import screenshot2 from "../../../../general/assets/works/content/polyme/polyme-2.webp";
import screenshot3 from "../../../../general/assets/works/content/polyme/polyme-3.webp";
import screenshot4 from "../../../../general/assets/works/content/polyme/polyme-4.webp";

import polymeProjectLogo from "../../../../general/assets/works/preview/polyme.webp";
import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";

const polymeData: WorkCardProps = {
  title: "PolyME",
  dockIcon: { src: polymeProjectLogo, alt: "polyme-project-logo" },
  display: {
    imgs: [
      { src: screenshot1, alt: "polyme-screenshot-1" },
      { src: screenshot2, alt: "polyme-screenshot-2" },
      { src: screenshot3, alt: "polyme-screenshot-3" },
      { src: screenshot4, alt: "polyme-screenshot-4" },
    ],
  },
  links: [
    { icon: polymeProjectLogo, alt: "polyme-project-link", url: "https://mmq.dev" },
    { icon: githubLinkIcon, alt: "polyme-github-link", url: "https://github.com/mmqnym/PolyME" },
  ],
  description:
    "PolyME is my personal website, used to show information about experience, skills, portfolio, etc. Welcome to visit and contact me.",
  stack: {
    languages: [
      {
        name: "TypeScript",
        color: "bg-sky-400",
      },
      {
        name: "JavaScript",
        color: "bg-yellow-300",
      },
      {
        name: "HTML",
        color: "bg-orange-400",
      },
      {
        name: "CSS",
        color: "bg-purple-400",
      },
    ],
    skills: ["React", "Tailwind CSS", "Vite", "Bun", "Vercel", "OpenGraph", "Google Analytics", "SWC", "Biome"],
  },
  detail: `PolyMe 是我的個人網站，用於展示我的個人資訊與開發經歷。應用名稱象徵著多面向的我，同時網站形象 Logo 使用了具有多色塊的烏鴉，其中烏鴉表示低調在廣大的天空中翱翔之意、多色塊表達不同面向的我，結合起來即為一個默默在資訊領域努力的且具多個面向的我的意思。

  技術上使用了一些較新的前端工具鏈，用以加速編譯與執行時間，並架設於 Vercel 上，處理流量分析以及CDN，也做了一些針對 SEO 優化的設置。`,
};

export default polymeData;
