import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/quickcerts/quickerts-1.webp";
import screenshot2 from "../../../../general/assets/works/content/quickcerts/quickerts-2.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import qcsProjectLogo from "../../../../general/assets/works/preview/quickcerts.webp";

const quickCertsData: WorkCardProps = {
	title: "QuickCerts",
	dockIcon: { src: qcsProjectLogo, alt: "quickcerts-project-logo" },
	display: {
		imgs: [
			{ src: screenshot1, alt: "quickcerts-screenshot-1" },
			{ src: screenshot2, alt: "quickcerts-screenshot-2" },
		],
	},
	links: [
		{ icon: qcsProjectLogo, alt: "quickcerts-project-link", url: "#" },
		{
			icon: githubLinkIcon,
			alt: "quickcerts-github-link",
			url: "https://github.com/mmqnym/quickcerts",
		},
	],
	description: "portfolio.quickcerts.about",
	stack: {
		languages: [
			{
				name: "Go",
				color: "bg-cyan-300",
			},
			{
				name: "TypeScript",
				color: "bg-sky-400",
			},
			{
				name: "Python",
				color: "bg-yellow-300",
			},
		],
		skills: [
			"Gin",
			"Redis",
			"PostgreSQL",
			"Swagger",
			"Docker",
			"Nginx",
			"CodeQL",
			"codecov",
			"GitHub Action",
		],
	},
	detail: "portfolio.quickcerts.detail",
};

export default quickCertsData;
