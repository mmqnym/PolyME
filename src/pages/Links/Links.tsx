import Container from "./Container";

import DiscordHoverLogo from "../../general/assets/socials/cDiscord.svg?react";
import ENSHoverLogo from "../../general/assets/socials/cEns.svg?react";
import LinkedInHoverLogo from "../../general/assets/socials/cLinkedin.svg?react";
import TelegramHoverLogo from "../../general/assets/socials/cTelegram.svg?react";
import WeChatHoverLogo from "../../general/assets/socials/cWechat.svg?react";
import DiscordLogo from "../../general/assets/socials/discord.svg?react";
import ENSLogo from "../../general/assets/socials/ens.svg?react";
import GitHubLogo from "../../general/assets/socials/github.svg?react";
import LinkedInLogo from "../../general/assets/socials/linkedin.svg?react";
import MailLogo from "../../general/assets/socials/mail.svg?react";
import TelegramLogo from "../../general/assets/socials/telegram.svg?react";
import WeChatLogo from "../../general/assets/socials/wechat.svg?react";
import XLogo from "../../general/assets/socials/x.svg?react";

import { Fragment } from "react";
import Footer from "./footer/Footer";
import LinkCard, { type LinkCardProps } from "./linkCard/LinkCard";

function Links() {
	const linkCardList: LinkCardProps[] = [
		{
			Logo: XLogo,
			HoverLogo: XLogo,
			title: "X",
			handle: "@mmqnym",
			url: "https://x.com/mmqnym",
		},
		{
			Logo: GitHubLogo,
			HoverLogo: GitHubLogo,
			title: "GitHub",
			handle: "mmqnym",
			url: "https://github.com/mmqnym",
		},
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
		{
			Logo: MailLogo,
			HoverLogo: MailLogo,
			title: "Mail",
			handle: "mail@mmq.dev",
			url: "mailto:mail@mmq.dev",
		},
	];

	return (
		<Container>
			<div className="grid grid-cols-1 mt-24 gap-x-5 gap-y-10 sm:mt-36 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20 xl:mt-56 xl:grid-cols-4 xl:gap-x-16">
				{linkCardList.map(({ Logo, HoverLogo, title, handle, url }, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Fragment key={index}>
						<LinkCard
							Logo={Logo}
							HoverLogo={HoverLogo}
							title={title}
							handle={handle}
							url={url}
						/>
					</Fragment>
				))}
			</div>
			<div className="mt-32 sm:mt-64 lg:mt-[18rem] xl:mt-[17rem]" />
			<Footer />
		</Container>
	);
}

export default Links;
