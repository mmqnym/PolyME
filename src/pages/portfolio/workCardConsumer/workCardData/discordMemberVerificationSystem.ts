import { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/discord-member-verification-system/discord-member-verification-system-1.webp";
import screenshot2 from "../../../../general/assets/works/content/discord-member-verification-system/discord-member-verification-system-2.webp";
import screenshot3 from "../../../../general/assets/works/content/discord-member-verification-system/discord-member-verification-system-3.webp";

import discordMemberVerificationSystemProjectLogo from "../../../../general/assets/works/preview/KaijuOfCronos.webp";
import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";

const discordMemberVerificationSystemData: WorkCardProps = {
  title: "Discord Member Verification System",
  dockIcon: { src: discordMemberVerificationSystemProjectLogo, alt: "discordMemberVerificationSystem-project-logo" },
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
  description: "這是一個檢驗 NFT 持有情況的 Discord 會員驗證系統。",
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
    skills: ["ExpressJS", "DiscordJS", "MongoDB", "React", "TailwindCSS", "Moralis"],
  },
  detail: `此系統的功能為驗證 Discord 帳戶擁有者的 Web3 錢包是否持有指定的 Token，同時也能檢查數量來達到區分會員階級的目的。

  技術上於後端使用了 ExpressJS、MongoDB 以及 DiscordJS，分別用於提供 Discord OAuth 的 API 端點、會員資料的紀錄與更新；前端則是使用 React 與 Tailwind 搭配 Rainbow Kit 製作易於操作的 DApp。`,
};

export default discordMemberVerificationSystemData;
