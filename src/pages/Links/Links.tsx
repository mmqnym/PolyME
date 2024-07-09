import Container from "./Container";

import XLogo from "../../general/assets/socials/x.svg?react";
import GitHubLogo from "../../general/assets/socials/github.svg?react";
import TelegramLogo from "../../general/assets/socials/telegram.svg?react";
import TelegramHoverLogo from "../../general/assets/socials/cTelegram.svg?react";
import MailLogo from "../../general/assets/socials/mail.svg?react";
import WeChatLogo from "../../general/assets/socials/wechat.svg?react";
import WeChatHoverLogo from "../../general/assets/socials/cWechat.svg?react";
import LinkedInLogo from "../../general/assets/socials/linkedin.svg?react";
import LinkedInHoverLogo from "../../general/assets/socials/cLinkedin.svg?react";
import DiscordLogo from "../../general/assets/socials/discord.svg?react";
import DiscordHoverLogo from "../../general/assets/socials/cDiscord.svg?react";
import ENSLogo from "../../general/assets/socials/ens.svg?react";
import ENSHoverLogo from "../../general/assets/socials/cEns.svg?react";

import LinkCard, { LinkCardProps } from "./linkCard/LinkCard";
import Footer from "./footer/Footer";

function Links() {
  const LinkCardList: LinkCardProps[] = [
    { Logo: XLogo, HoverLogo: XLogo, title: "X", handle: "@mmqnym", url: "https://x.com/mmqnym" },
    { Logo: GitHubLogo, HoverLogo: GitHubLogo, title: "GitHub", handle: "mmqnym", url: "https://github.com/mmqnym" },
    {
      Logo: TelegramLogo,
      HoverLogo: TelegramHoverLogo,
      title: "Telegram",
      handle: "mmqnym",
      url: "https://t.me/mmqnym",
    },
    {
      Logo: DiscordLogo,
      HoverLogo: DiscordHoverLogo,
      title: "Discord",
      handle: "mmqnym",
      url: "https://discord.com/users/556392934904430593",
    },
    {
      Logo: WeChatLogo,
      HoverLogo: WeChatHoverLogo,
      title: "WeChat",
      handle: "0xmmq",
      url: "https://github.com/mmqnym/mmqnym/blob/master/assets/wechat_p.png",
    },
    {
      Logo: ENSLogo,
      HoverLogo: ENSHoverLogo,
      title: "ENS",
      handle: "0xmmq.eth",
      url: "https://app.ens.domains/0xmmq.eth",
    },
    {
      Logo: LinkedInLogo,
      HoverLogo: LinkedInHoverLogo,
      title: "LinkedIn",
      handle: "mmqnym",
      url: "https://www.linkedin.com/in/mmqnym/",
    },
    { Logo: MailLogo, HoverLogo: MailLogo, title: "Mail", handle: "mmqnym", url: "mailto:mail@mmq.dev" },
  ];

  return (
    <Container>
      <div className="mt-52 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-24 lg:grid-cols-4 lg:gap-x-16">
        {LinkCardList.map(({ Logo, HoverLogo, title, handle, url }, index) => (
          <LinkCard key={index} Logo={Logo} HoverLogo={HoverLogo} title={title} handle={handle} url={url} />
        ))}
      </div>
      <div className="mt-32 sm:mt-64 lg:mt-[28rem] xl:mt-[17rem]"></div>
      <Footer />
    </Container>
  );
}

export default Links;
