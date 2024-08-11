import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/polyme/polyme-1.webp";
import screenshot2 from "../../../../general/assets/works/content/polyme/polyme-2.webp";
import screenshot3 from "../../../../general/assets/works/content/polyme/polyme-3.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import polymeProjectLogo from "../../../../general/assets/works/preview/polyme.webp";

const polymeData: WorkCardProps = {
	title: "PolyME",
	dockIcon: { src: polymeProjectLogo, alt: "polyme-project-logo" },
	display: {
		imgs: [
			{ src: screenshot1, alt: "polyme-screenshot-1" },
			{ src: screenshot2, alt: "polyme-screenshot-2" },
			{ src: screenshot3, alt: "polyme-screenshot-3" },
		],
	},
	links: [
		{
			icon: polymeProjectLogo,
			alt: "polyme-project-link",
			url: "https://mmq.dev",
		},
		{
			icon: githubLinkIcon,
			alt: "polyme-github-link",
			url: "https://github.com/mmqnym/PolyME",
		},
	],
	description: "portfolio.polyme.about",
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
		skills: [
			"React",
			"Tailwind CSS",
			"Vite",
			"Bun",
			"Caddy 2",
			"http3",
			"Cloudflare",
			"OpenGraph",
			"Google Analytics",
			"SWC",
			"Biome",
		],
	},
	detail: "portfolio.polyme.detail",
};

export default polymeData;
