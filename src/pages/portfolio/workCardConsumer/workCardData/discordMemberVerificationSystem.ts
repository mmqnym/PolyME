import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/discord-member-verification-system/discord-member-verification-system-1.webp";
import screenshot2 from "../../../../general/assets/works/content/discord-member-verification-system/discord-member-verification-system-2.webp";
import screenshot3 from "../../../../general/assets/works/content/discord-member-verification-system/discord-member-verification-system-3.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import discordMemberVerificationSystemProjectLogo from "../../../../general/assets/works/preview/KaijuOfCronos.webp";

const discordMemberVerificationSystemData: WorkCardProps = {
	title: "Discord Member Verification System",
	dockIcon: {
		src: discordMemberVerificationSystemProjectLogo,
		alt: "discordMemberVerificationSystem-project-logo",
	},
	display: {
		imgs: [
			{ src: screenshot1, alt: "discordMemberVerificationSystem-screenshot-1" },
			{ src: screenshot2, alt: "discordMemberVerificationSystem-screenshot-2" },
			{ src: screenshot3, alt: "discordMemberVerificationSystem-screenshot-3" },
		],
	},
	links: [
		{
			icon: discordMemberVerificationSystemProjectLogo,
			alt: "discordMemberVerificationSystem-project-link",
			url: "https://mmqnym.github.io/Discord-NFT-Verifier-Client/",
		},
		{
			icon: githubLinkIcon,
			alt: "discordMemberVerificationSystem-github-link",
			url: "https://github.com/mmqnym/Discord-NFT-Verifier-Client",
		},
	],
	description: "portfolio.discord-member-verification-system.about",
	stack: {
		languages: [
			{
				name: "JavaScript",
				color: "bg-yellow-300",
			},
			{
				name: "TypeScript",
				color: "bg-sky-400",
			},
		],
		skills: [
			"ExpressJS",
			"DiscordJS",
			"MongoDB",
			"React",
			"Tailwind CSS",
			"Moralis",
		],
	},
	detail: "portfolio.discord-member-verification-system.detail",
};

export default discordMemberVerificationSystemData;
