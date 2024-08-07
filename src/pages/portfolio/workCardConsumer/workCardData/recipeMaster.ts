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
		"This project was my Bachelor of Computer Science graduation project, categorized under the theme of Computer Graphics, which is a web application that uses photos to find recipes.",
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
	detail: `This project combines crawler and image search technology, users can upload images to the API endpoint built by Flask, the image will be processed by OpenCV through a series of perceptual hash algorithms, and then compared with remote and local image libraries to confirm that the food in the image most likely belongs to the category. Finally, return to the user the relevant recipes link.`,
};

export default recipeMasterData;
