import Container from "./Container";

import SkillLabel from "./skillList/SkillLabel";
import SkillList from "./skillList/SkillList";

// Language
import GolangLogo from "../../general/assets/languages/golang.svg?react";
import JavaScriptLogo from "../../general/assets/languages/javascript.svg?react";
import PythonLogo from "../../general/assets/languages/python.svg?react";
import SolidityLogo from "../../general/assets/languages/solidity.svg?react";
import TypeScriptLogo from "../../general/assets/languages/typescript.svg?react";

import FastAPILogo from "../../general/assets/stacks/fastapi.svg?react";
// Backend
import GinLogo from "../../general/assets/stacks/gin.webp";
import MongoDBLogo from "../../general/assets/stacks/mongodb.svg?react";
import NodejsLogo from "../../general/assets/stacks/nodejs.svg?react";
import PostgreSQLLogo from "../../general/assets/stacks/postgresql.svg?react";
import RedisLogo from "../../general/assets/stacks/redis.svg?react";
import SwaggerLogo from "../../general/assets/stacks/swagger.svg?react";

import BunLogo from "../../general/assets/stacks/bun.svg?react";
// Frontend
import ReactLogo from "../../general/assets/stacks/react.svg?react";
import TailwindCSSLogo from "../../general/assets/stacks/tailwindcss.svg?react";
import ViteLogo from "../../general/assets/stacks/vite.svg?react";

import AWSLogo from "../../general/assets/stacks/AWSLogo";
import CloudflareLogo from "../../general/assets/stacks/cloudflare.svg?react";
// Operation
import DockerLogo from "../../general/assets/stacks/docker.svg?react";
import GCPLogo from "../../general/assets/stacks/gcp.svg?react";
import GitHubActionLogo from "../../general/assets/stacks/github-action.svg?react";
import NginxLogo from "../../general/assets/stacks/nginx.svg?react";
import VercelLogo from "../../general/assets/stacks/vercel.svg?react";

// Library
import ChaiJSLogo from "../../general/assets/stacks/chaijs.svg?react";
import DiscordJSLogo from "../../general/assets/stacks/discordjs.svg?react";
import EthersJSLogo from "../../general/assets/stacks/ethersjs.svg?react";
import HardHatLogo from "../../general/assets/stacks/hardhat.webp";
import MochaJSLogo from "../../general/assets/stacks/mochajs.svg?react";
import OpenCVLogo from "../../general/assets/stacks/opencv.webp";

import FFmpegLogo from "../../general/assets/stacks/ffmpeg.webp";
// Tools
import GitLogo from "../../general/assets/stacks/git.svg?react";
import GitHubLogo from "../../general/assets/stacks/github.svg?react";
import GrafanaLogo from "../../general/assets/stacks/grafana.svg?react";
import PostmanLogo from "../../general/assets/stacks/postman.svg?react";
import VSCodeLogo from "../../general/assets/stacks/vscode.svg?react";

import CanvaLogo from "../../general/assets/stacks/canva.svg?react";
// Design
import FigmaLogo from "../../general/assets/stacks/figma.svg?react";
import PhotoShopLogo from "../../general/assets/stacks/photoshop.svg?react";

function Stack() {
	return (
		<Container>
			<div className="flex w-3/4 flex-col pb-24 pt-4 xl:w-1/2 xl:pb-64">
				<SkillList
					category="Languages"
					child={
						<>
							<SkillLabel logo={GolangLogo} label="Golang" />
							<SkillLabel logo={PythonLogo} label="Python" />
							<SkillLabel logo={TypeScriptLogo} label="TypeScript" />
							<SkillLabel logo={JavaScriptLogo} label="JavaScript" />
							<SkillLabel
								logo={SolidityLogo}
								label="Solidity"
								fill="dark:fill-gray-300"
							/>
						</>
					}
				/>
				<SkillList
					category="Backend"
					child={
						<>
							<SkillLabel
								logo={GinLogo}
								label="Gin"
								width="w-8 sm:w-12"
								height="h-12 sm:h-16"
							/>
							<SkillLabel logo={FastAPILogo} label="FastAPI" />
							<SkillLabel logo={NodejsLogo} label="NodeJS" />
							<SkillLabel logo={RedisLogo} label="Redis" />
							<SkillLabel logo={PostgreSQLLogo} label="PostgreSQL" />
							<SkillLabel logo={MongoDBLogo} label="MongoDB" />
							<SkillLabel logo={SwaggerLogo} label="Swagger" />
						</>
					}
				/>
				<SkillList
					category="Frontend"
					child={
						<>
							<SkillLabel logo={ReactLogo} label="React" />
							<SkillLabel logo={TailwindCSSLogo} label="Tailwind CSS" />
							<SkillLabel logo={ViteLogo} label="Vite" />
							<SkillLabel logo={BunLogo} label="Bun" />
						</>
					}
				/>
				<SkillList
					category="Operation"
					child={
						<>
							<SkillLabel logo={DockerLogo} label="Docker" />
							<SkillLabel logo={NginxLogo} label="Nginx" />
							<SkillLabel logo={GitHubActionLogo} label="GitHub Action" />
							<SkillLabel
								logo={AWSLogo}
								label="AWS"
								fill="fill-gray-700 dark:fill-gray-300"
							/>
							<SkillLabel logo={GCPLogo} label="GCP" />
							<SkillLabel
								logo={VercelLogo}
								label="Vercel"
								fill="dark:stroke-gray-400 dark:stroke-[4]"
							/>
							<SkillLabel logo={CloudflareLogo} label="Cloudflare" />
						</>
					}
				/>
				<SkillList
					category="Liberary"
					child={
						<>
							<SkillLabel logo={ChaiJSLogo} label="ChaiJS" />
							<SkillLabel logo={MochaJSLogo} label="MochaJS" />
							<SkillLabel
								logo={EthersJSLogo}
								label="EthersJS"
								fill="fill-[#24339B] dark:fill-gray-300"
							/>
							<SkillLabel logo={HardHatLogo} label="Hardhat" />
							<SkillLabel logo={DiscordJSLogo} label="DiscordJS" />
							<SkillLabel logo={OpenCVLogo} label="OpenCV" />
						</>
					}
				/>
				<SkillList
					category="Tools"
					child={
						<>
							<SkillLabel logo={GitLogo} label="Git" />
							<SkillLabel
								logo={GitHubLogo}
								label="GitHub"
								fill="dark:fill-gray-300 fill-gray-700"
							/>
							<SkillLabel logo={VSCodeLogo} label="VSCode" />
							<SkillLabel logo={PostmanLogo} label="Postman" />
							<SkillLabel logo={GrafanaLogo} label="Grafana" />
							<SkillLabel logo={FFmpegLogo} label="FFmpeg" />
						</>
					}
				/>
				<SkillList
					category="Design"
					child={
						<>
							<SkillLabel logo={FigmaLogo} label="Figma" />
							<SkillLabel logo={CanvaLogo} label="Canva" />
							<SkillLabel logo={PhotoShopLogo} label="PhotoShop" />
						</>
					}
				/>
			</div>
		</Container>
	);
}

export default Stack;
