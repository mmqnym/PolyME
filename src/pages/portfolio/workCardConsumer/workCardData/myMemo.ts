import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/mymemo/mymemo-1.webp";
import screenshot2 from "../../../../general/assets/works/content/mymemo/mymemo-2.webp";
import screenshot3 from "../../../../general/assets/works/content/mymemo/mymemo-3.webp";
import screenshot4 from "../../../../general/assets/works/content/mymemo/mymemo-4.webp";
import screenshot5 from "../../../../general/assets/works/content/mymemo/mymemo-5.webp";
import screenshot6 from "../../../../general/assets/works/content/mymemo/mymemo-6.webp";
import screenshot7 from "../../../../general/assets/works/content/mymemo/mymemo-7.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import mymemoDataProjectLogo from "../../../../general/assets/works/preview/mymemo.webp";

const mymemoData: WorkCardProps = {
	title: "MyMemo",
	dockIcon: { src: mymemoDataProjectLogo, alt: "mymemoData-project-logo" },
	display: {
		imgs: [
			{ src: screenshot1, alt: "mymemoData-screenshot-1" },
			{ src: screenshot2, alt: "mymemoData-screenshot-2" },
			{ src: screenshot3, alt: "mymemoData-screenshot-3" },
			{ src: screenshot4, alt: "mymemoData-screenshot-4" },
			{ src: screenshot5, alt: "mymemoData-screenshot-5" },
			{ src: screenshot6, alt: "mymemoData-screenshot-6" },
			{ src: screenshot7, alt: "mymemoData-screenshot-7" },
		],
	},
	links: [
		{
			icon: mymemoDataProjectLogo,
			alt: "mymemoData-project-link",
			url: "https://github.com/mmqnym/MyMemo/releases/tag/v_latest",
		},
		{
			icon: githubLinkIcon,
			alt: "mymemoData-github-link",
			url: "https://github.com/mmqnym/MyMemo",
		},
	],
	description: "這是一個利用 QT 編寫而成的圖形化簡易行事曆軟體。",
	stack: {
		languages: [
			{
				name: "C++",
				color: "bg-blue-500",
			},
		],
		skills: ["Qt5", "Qt5 designer"],
	},
	detail: `在求學時期經歷了許多命令行程式的練習與開發後，我對圖形化程式感到相當好奇，想了解一般圖形化應用是如何實現的。在經歷一小段時間研究後，由於在學時大多使用 C++ 開發，覺得最適合我使用的圖形化框架是 Qt5，於是使用它來實現我的第一個 GUI 程式。

  技術上使用大量的 C++ STL 以及 指標操作來優化效能，並使用 Qt designer 設計介面，然後綁定互動式元件到邏輯函數上。開發過程中還使用了系統級函式庫來將我的應用能夠登錄註冊表，實現開機自啟動。`,
};

export default mymemoData;
