import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/goink/goink-1.webp";

import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";
import goinkProjectLogo from "../../../../general/assets/works/preview/goink.webp";

const goinkData: WorkCardProps = {
	title: "GoINK",
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
	description:
		"GoInk is a project template that helps developers quickly build a server. Use the gin framework.",
	stack: {
		languages: [
			{
				name: "Go",
				color: "bg-cyan-300",
			},
		],
		skills: ["Gin", "Redis", "PostgreSQL", "Swagger", "Docker"],
	},
	detail: `This project is based on the following open source libraries:

  - Gin
  - swaggo
  - zap
  - lumberjack
  - golang-jwt
  
  It is used to quickly build a web server with mainstream infrastructure to provide an environment for quickly developing API routes, middleware, and database operations, and to save the time of file hierarchy planning and log customization.
  `,
};

export default goinkData;
