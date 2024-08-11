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
	description: "portfolio.mymemo.about",
	stack: {
		languages: [
			{
				name: "C++",
				color: "bg-blue-500",
			},
		],
		skills: ["Qt5", "Qt5 designer"],
	},
	detail: "portfolio.mymemo.detail",
};

export default mymemoData;
