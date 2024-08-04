import { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/travel-line-bot/travel-line-bot-1.webp";
import screenshot2 from "../../../../general/assets/works/content/travel-line-bot/travel-line-bot-2.webp";
import screenshot3 from "../../../../general/assets/works/content/travel-line-bot/travel-line-bot-3.webp";
import screenshot4 from "../../../../general/assets/works/content/travel-line-bot/travel-line-bot-4.webp";

import travelLineBotProjectLogo from "../../../../general/assets/works/preview/travel-line-bot.webp";
import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";

const travelLineBotData: WorkCardProps = {
  title: "Travel Line Bot",
  dockIcon: { src: travelLineBotProjectLogo, alt: "travelLineBot-project-logo" },
  display: {
    imgs: [
      { src: screenshot1, alt: "travelLineBot-screenshot-1" },
      { src: screenshot2, alt: "travelLineBot-screenshot-2" },
      { src: screenshot3, alt: "travelLineBot-screenshot-3" },
      { src: screenshot4, alt: "travelLineBot-screenshot-4" },
    ],
  },
  links: [
    {
      icon: travelLineBotProjectLogo,
      alt: "travelLineBot-project-link",
      url: "https://liff.line.me/1645278921-kWRPP32q/?accountId=462mugrh",
    },
    {
      icon: githubLinkIcon,
      alt: "travelLineBot-github-link",
      url: "https://github.com/mmqnym/Currency-Bot-using-Line-API",
    },
  ],
  description:
    "這是結合了 AI 切字的旅行機器人，使用戶能夠以簡單的對話查詢不同幣別的價格，同時提供了一些旅行用的小功能。",
  stack: {
    languages: [
      {
        name: "Python",
        color: "bg-yellow-300",
      },
    ],
    skills: ["Django", "Line Bot", "Jieba", "Selenium", "Swagger", "Docker", "Heroku"],
  },
  detail: `這是一個讓用戶能夠方便旅行的機器人，提供人性化指令查尋根據臺灣銀行即時匯率所計算出的台幣、美元價格。同時也提供便捷的按鈕讓用戶能夠查詢當前所在地之天氣情報以及隨身筆記。

  技術上於使用了 Django 架設 callback API 供 Line Bot 使用。用戶指令則是利用 Jieba 切字，根據字詞 Token 決定該執行哪些操作。匯率由定期爬蟲臺灣銀行牌告匯率取得。`,
};

export default travelLineBotData;
