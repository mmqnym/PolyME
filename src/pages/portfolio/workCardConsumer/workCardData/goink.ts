import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/goink/goink-1.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import goinkProjectLogo from "../../../../general/assets/works/preview/goink.webp";

const goinkData: WorkCardProps = {
	title: "GoInk",
	dockIcon: { src: goinkProjectLogo, alt: "goink-project-logo" },
	display: {
		imgs: [{ src: screenshot1, alt: "goink-screenshot-1" }],
	},
	links: [
		{ icon: goinkProjectLogo, alt: "goink-project-link", url: "#" },
		{
			icon: githubLinkIcon,
			alt: "goink-github-link",
			url: "https://github.com/mmqnym/GoInk",
		},
	],
	description: "portfolio.goink.about",
	stack: {
		languages: [
			{
				name: "Go",
				color: "bg-cyan-300",
			},
		],
		skills: ["Gin", "Redis", "PostgreSQL", "Swagger", "Docker"],
	},
	detail: "portfolio.goink.detail",
};

export default goinkData;
