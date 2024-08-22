import {
	EmailShareButton,
	FacebookShareButton,
	LineShareButton,
	LinkedinShareButton,
	PinterestShareButton,
	RedditShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";

import facebookIcon from "../../../../general/assets/works/linkIcon/facebook.webp";
import lineIcon from "../../../../general/assets/works/linkIcon/line.webp";
import linkedinIcon from "../../../../general/assets/works/linkIcon/linkedin.webp";
import mailIcon from "../../../../general/assets/works/linkIcon/mail.webp";
import pinterestIcon from "../../../../general/assets/works/linkIcon/pinterest.webp";
import redditIcon from "../../../../general/assets/works/linkIcon/reddit.webp";
import telegramIcon from "../../../../general/assets/works/linkIcon/telegram.webp";
import whatsappIcon from "../../../../general/assets/works/linkIcon/whatsapp.webp";
import xIcon from "../../../../general/assets/works/linkIcon/x.webp";

import { useContext } from "react";
import { WorkCardContext } from "../../../../context/workCardContext";
import SuspenseImage from "../../../../general/components/lazyLoader/SuspenseImage";

import { WorkCardLinksContext } from "../../../../context/workCardLinksContext";
import { LinkGroup } from "../links/linksType";

function SocialButtonGroup() {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	const workCardLinksContext = useContext(WorkCardLinksContext);

	if (!workCardLinksContext) {
		throw new Error(
			"workCardLinksContext must be used within a WorkCardLinksContextProvider",
		);
	}

	return (
		<>
			<TelegramShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				title={`PolyME | project - ${workCardContext.workCardData.title}`}
				url={window.location.href}
			>
				<SuspenseImage
					src={telegramIcon}
					alt={`${workCardContext.workCardData.title}-share-telegram`}
					className="w-full h-full"
				/>
			</TelegramShareButton>
			<TwitterShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				title={`PolyME | project - ${workCardContext.workCardData.title}`}
				url={window.location.href}
				hashtags={["0xmmq", "project"]}
				related={["@mmqnym"]}
			>
				<SuspenseImage
					src={xIcon}
					alt={`${workCardContext.workCardData.title}-share-x`}
					className="w-full h-full"
				/>
			</TwitterShareButton>
			<LineShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				title={`PolyME | project - ${workCardContext.workCardData.title}`}
				url={window.location.href}
			>
				<SuspenseImage
					src={lineIcon}
					alt={`${workCardContext.workCardData.title}-share-line`}
					className="w-full h-full"
				/>
			</LineShareButton>
			<LinkedinShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				title={`PolyME | project - ${workCardContext.workCardData.title}`}
				summary="Hi! Here's the link to 0xmmq's project. Check it out!"
				source="PolyME"
				url={window.location.href}
			>
				<SuspenseImage
					src={linkedinIcon}
					alt={`${workCardContext.workCardData.title}-share-linkedin`}
					className="w-full h-full"
				/>
			</LinkedinShareButton>
			<PinterestShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				title={`PolyME | project - ${workCardContext.workCardData.title}`}
				description="0xmmq's project"
				url={window.location.href}
				media={`https://mmq.dev/projects/${workCardContext.workCardData.title}.png`}
			>
				<SuspenseImage
					src={pinterestIcon}
					alt={`${workCardContext.workCardData.title}-share-pinterest`}
					className="w-full h-full"
				/>
			</PinterestShareButton>
			<FacebookShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				url={window.location.href}
				hashtag={`PolyME | project - ${workCardContext.workCardData.title}`}
			>
				<SuspenseImage
					src={facebookIcon}
					alt={`${workCardContext.workCardData.title}-share-facebook`}
					className="w-full h-full"
				/>
			</FacebookShareButton>
			<RedditShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				url={window.location.href}
				title={`PolyME | project - ${workCardContext.workCardData.title}`}
			>
				<SuspenseImage
					src={redditIcon}
					alt={`${workCardContext.workCardData.title}-share-reddit`}
					className="w-full h-full"
				/>
			</RedditShareButton>
			<WhatsappShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				url={window.location.href}
				title={`PolyME | project - ${workCardContext.workCardData.title}`}
			>
				<SuspenseImage
					src={whatsappIcon}
					alt={`${workCardContext.workCardData.title}-share-whatsapp`}
					className="w-full h-full"
				/>
			</WhatsappShareButton>
			<EmailShareButton
				className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-3/4 w-auto p-[2%] sm:p-[0.5%] select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
				url={window.location.href}
				subject={`PolyME | project - ${workCardContext.workCardData.title}`}
				body="Hi! Here's the link to 0xmmq's project. Check it out!"
			>
				<SuspenseImage
					src={mailIcon}
					alt={`${workCardContext.workCardData.title}-share-mail`}
					className="w-full h-full"
				/>
			</EmailShareButton>
		</>
	);
}

export default SocialButtonGroup;
