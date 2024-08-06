import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/recipe-master/recipe-master-1.webp";
import screenshot2 from "../../../../general/assets/works/content/recipe-master/recipe-master-2.webp";
import screenshot3 from "../../../../general/assets/works/content/recipe-master/recipe-master-3.webp";
import screenshot4 from "../../../../general/assets/works/content/recipe-master/recipe-master-4.webp";
import screenshot5 from "../../../../general/assets/works/content/recipe-master/recipe-master-5.webp";
import screenshot6 from "../../../../general/assets/works/content/recipe-master/recipe-master-6.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import recipeMasterProjectLogo from "../../../../general/assets/works/preview/recipe-master.webp";

const recipeMasterData: WorkCardProps = {
	title: "RecipeMaster",
	dockIcon: { src: recipeMasterProjectLogo, alt: "recipeMaster-project-logo" },
	display: {
		imgs: [
			{ src: screenshot1, alt: "recipeMaster-screenshot-1" },
			{ src: screenshot2, alt: "recipeMaster-screenshot-2" },
			{ src: screenshot3, alt: "recipeMaster-screenshot-3" },
			{ src: screenshot4, alt: "recipeMaster-screenshot-4" },
			{ src: screenshot5, alt: "recipeMaster-screenshot-5" },
			{ src: screenshot6, alt: "recipeMaster-screenshot-6" },
		],
	},
	links: [
		{
			icon: recipeMasterProjectLogo,
			alt: "autoInteracter-project-link",
			url: "#",
		},
		{
			icon: githubLinkIcon,
			alt: "recipeMaster-github-link",
			url: "#",
		},
	],
	description:
		"這個項目是我的大學畢業專題，分類主題是計算機圖學，是一個利用照片尋找食譜的 Web 應用。",
	stack: {
		languages: [
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
			{
				name: "Python",
				color: "bg-yellow-300",
			},
		],
		skills: ["VanillaJS", "BootStrap", "Flask", "OpenCV", "Selenium"],
	},
	// biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
	detail: `本軟體結合了爬蟲與圖搜技術，用戶可上傳圖片到由 Flask 搭建的 API 端點，該圖片會經過 OpenCV 進行感知哈希算法的一系列處理後，與遠端和本地圖片庫比對，確認該圖片中的食物最有可能的所屬分類後，回傳給用戶相關的食譜連結。`,
};

export default recipeMasterData;
