import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/polyme/polyme-1.webp";
import screenshot2 from "../../../../general/assets/works/content/polyme/polyme-2.webp";
import screenshot3 from "../../../../general/assets/works/content/polyme/polyme-3.webp";
import screenshot4 from "../../../../general/assets/works/content/polyme/polyme-4.webp";

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
			{ src: screenshot4, alt: "polyme-screenshot-4" },
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
	detail: `PolyMe is my personal website to show my personal information and development experience. The name of the application symbolizes the multi-oriented me, and the logo uses a crow with multi-colored blocks, where the crow represents a low profile soaring in the big sky, and the multi-colored blocks represent different orientations of me, which combines to mean a multi-oriented me who quietly works hard in the field of information.

	Technically, I used some newer front-end toolchains to speed up compilation and execution time. In addition, to support some proxy services and http3, I chose not to use the Saas platform to set up, but to use Caddy 2 to set up on my own VPS. I also did some SEO optimization.`,
};

export default polymeData;
