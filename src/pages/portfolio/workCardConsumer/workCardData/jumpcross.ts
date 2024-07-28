import { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/jumpcross/jumpcross-1.webp";
import screenshot2 from "../../../../general/assets/works/content/jumpcross/jumpcross-2.webp";
import screenshot3 from "../../../../general/assets/works/content/jumpcross/jumpcross-3.webp";
import screenshot4 from "../../../../general/assets/works/content/jumpcross/jumpcross-4.webp";

import jumpcrossProjectLogo from "../../../../general/assets/works/preview/jumpcross.webp";
import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";

const jumpcrossData: WorkCardProps = {
  title: "JumpCross",
  dockIcon: { src: jumpcrossProjectLogo, alt: "jumpcross-project-logo" },
  display: {
    imgs: [
      { src: screenshot1, alt: "jumpcross-screenshot-1" },
      { src: screenshot2, alt: "jumpcross-screenshot-2" },
      { src: screenshot3, alt: "jumpcross-screenshot-3" },
      { src: screenshot4, alt: "jumpcross-screenshot-4" },
    ],
  },
  links: [
    { icon: jumpcrossProjectLogo, alt: "jumpcross-project-link", url: "https://jumpcross.app" },
    { icon: githubLinkIcon, alt: "jumpcross-github-link", url: "https://github.com/JumpCrossGame" },
  ],
  description:
    "這是一個運行在 Arbitrum One 網路上的 GameFi 項目，主打休閒及高可玩性，並在團隊與玩家獲利之間取得平衡，以追求長久營運的目的。",
  stack: {
    languages: [
      {
        name: "Go",
        color: "bg-cyan-300",
      },
      {
        name: "TypeScript",
        color: "bg-sky-400",
      },
      {
        name: "Solidity",
        color: "bg-gray-300",
      },
    ],
    skills: [
      "Gin",
      "http2",
      "Redis",
      "PostgreSQL",
      "Swagger",
      "Docker",
      "Nginx",
      "go-ethereum",
      "HardHat",
      "EthersJS",
      "GCP",
    ],
  },
  detail: `我在這個 GameFi 項目裡負責後端系統與 EVM 合約的開發。合約的部分使用 Solidity 與 HardHat 編寫包含域名註冊與解析合約、遊戲代幣合約、遊戲主合約；後端系統的部分則編寫了 6 個微服務，包含用戶登入狀態處理、遊戲資料紀錄、遊戲同步、外掛監控等服務，並使用 http2 及 WebSocket 來降低用戶與伺服器溝通所需的時間成本。另外也有串接 X 以及 Discord Oauth，以提升女巫攻擊的難度。
  `,
};

export default jumpcrossData;
