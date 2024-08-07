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
	description:
		"This is a Discord member verification system that verifies NFT holdings.",
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
	detail: `The function of this system is to verify whether the Web3 wallet of the Discord account owner holds the specified token, and also to check the number of tokens for the member level differentiation purpose.

	Technically, I used ExpressJS, MongoDB, and DiscordJS in the backend to provide the API endpoint for Discord OAuth, and to record and update members' data, while in the frontend, I used React and Tailwind together with Rainbow Kit to create an easy-to-use DApp.`,
};

export default discordMemberVerificationSystemData;
