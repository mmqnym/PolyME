import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/pwdport/pwdport-1.webp";
import screenshot2 from "../../../../general/assets/works/content/pwdport/pwdport-2.webp";
import screenshot3 from "../../../../general/assets/works/content/pwdport/pwdport-3.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import pwdportProjectLogo from "../../../../general/assets/works/preview/pwdport.webp";

const pwdPortData: WorkCardProps = {
	title: "PwdPort",
	dockIcon: { src: pwdportProjectLogo, alt: "pwdport-project-logo" },
	display: {
		imgs: [
			{ src: screenshot1, alt: "pwdport-screenshot-1" },
			{ src: screenshot2, alt: "pwdport-screenshot-2" },
			{ src: screenshot3, alt: "pwdport-screenshot-3" },
		],
	},
	links: [
		{
			icon: pwdportProjectLogo,
			alt: "pwdport-project-link",
			url: "https://pwdport.mmq.dev",
		},
		{
			icon: githubLinkIcon,
			alt: "pwdport-github-link",
			url: "https://github.com/mmqnym/Pwdport",
		},
	],
	description: "portfolio.pwdport.about",
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
		skills: ["React", "Tailwind CSS", "NPM", "Vercel", "Prettier"],
	},
	detail: "portfolio.pwdport.detail",
};

export default pwdPortData;
