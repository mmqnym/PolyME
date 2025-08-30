import Container from "./Container";

import SkillLabel from "./skillList/SkillLabel";
import SkillList from "./skillList/SkillList";

// Language
import GolangLogo from "../../general/assets/languages/golang.svg?react";
import JavaScriptLogo from "../../general/assets/languages/javascript.svg?react";
import PythonLogo from "../../general/assets/languages/python.svg?react";
import TypeScriptLogo from "../../general/assets/languages/typescript.svg?react";

import FastAPILogo from "../../general/assets/stacks/fastapi.svg?react";
// Backend
import GinLogo from "../../general/assets/stacks/gin.webp";
import MongoDBLogo from "../../general/assets/stacks/mongodb.svg?react";
import NodejsLogo from "../../general/assets/stacks/nodejs.svg?react";
import PostgreSQLLogo from "../../general/assets/stacks/postgresql.svg?react";
import RedisLogo from "../../general/assets/stacks/redis.svg?react";
import SwaggerLogo from "../../general/assets/stacks/swagger.svg?react";
import RabbitMQLogo from "../../general/assets/stacks/rabbitmq.svg?react";

import BunLogo from "../../general/assets/stacks/bun.svg?react";
// Frontend
import ReactLogo from "../../general/assets/stacks/react.svg?react";
import TailwindCSSLogo from "../../general/assets/stacks/tailwindcss.svg?react";
import ViteLogo from "../../general/assets/stacks/vite.svg?react";

// Operation
import DockerLogo from "../../general/assets/stacks/docker.svg?react";
import GCPLogo from "../../general/assets/stacks/gcp.svg?react";
import GitHubActionLogo from "../../general/assets/stacks/github-action.svg?react";
import NginxLogo from "../../general/assets/stacks/nginx.svg?react";
import VercelLogo from "../../general/assets/stacks/vercel.svg?react";
import AWSLogo from "../../general/assets/stacks/AWSLogo";
import CloudflareLogo from "../../general/assets/stacks/cloudflare.svg?react";

// Tools
import GitLogo from "../../general/assets/stacks/git.svg?react";
import GitHubLogo from "../../general/assets/stacks/github.svg?react";
import GitLabLogo from "../../general/assets/stacks/gitlab.svg?react";
import PostmanLogo from "../../general/assets/stacks/postman.svg?react";
import VSCodeLogo from "../../general/assets/stacks/vscode.svg?react";
import Metasploit from "../../general/assets/stacks/metasploit.svg?react";
import FFmpegLogo from "../../general/assets/stacks/ffmpeg.webp";

function Stack() {
  return (
    <Container>
      <div className="flex flex-col w-3/4 pt-4 pb-24 xl:w-1/2 xl:pb-64">
        <SkillList
          category="Language"
          child={
            <>
              <SkillLabel logo={GolangLogo} label="Golang" />
              <SkillLabel logo={PythonLogo} label="Python" />
              <SkillLabel logo={TypeScriptLogo} label="TypeScript" />
              <SkillLabel logo={JavaScriptLogo} label="JavaScript" />
            </>
          }
        />
        <SkillList
          category="Backend"
          child={
            <>
              <SkillLabel logo={GinLogo} label="Gin" width="w-8 sm:w-12" height="h-12 sm:h-16" />
              <SkillLabel logo={FastAPILogo} label="FastAPI" />
              <SkillLabel logo={NodejsLogo} label="NodeJS" />
              <SkillLabel logo={RedisLogo} label="Redis" />
              <SkillLabel logo={PostgreSQLLogo} label="PostgreSQL" />
              <SkillLabel logo={MongoDBLogo} label="MongoDB" />
              <SkillLabel logo={SwaggerLogo} label="Swagger" />
              <SkillLabel logo={RabbitMQLogo} label="RabbitMQ" />
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
              <SkillLabel logo={GitLabLogo} label="GitLab CI" />
              <SkillLabel logo={AWSLogo} label="AWS" fill="fill-gray-700 dark:fill-gray-300" />
              <SkillLabel logo={GCPLogo} label="GCP" />
              <SkillLabel logo={VercelLogo} label="Vercel" fill="dark:stroke-gray-400 dark:stroke-[4]" />
              <SkillLabel logo={CloudflareLogo} label="Cloudflare" />
            </>
          }
        />
        <SkillList
          category="Tool"
          child={
            <>
              <SkillLabel logo={GitLogo} label="Git" />
              <SkillLabel logo={GitHubLogo} label="GitHub" fill="dark:fill-gray-300 fill-gray-700" />
              <SkillLabel logo={GitLabLogo} label="GitLab" />
              <SkillLabel logo={VSCodeLogo} label="VSCode" />
              <SkillLabel logo={PostmanLogo} label="Postman" />
              <SkillLabel logo={FFmpegLogo} label="FFmpeg" />
              <SkillLabel logo={Metasploit} label="Metasploit" />
            </>
          }
        />
      </div>
    </Container>
  );
}

export default Stack;
