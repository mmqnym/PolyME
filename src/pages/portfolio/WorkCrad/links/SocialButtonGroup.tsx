import {
  TelegramShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  FacebookShareButton,
  RedditShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import telegramIcon from "../../../../general/assets/works/linkIcon/telegram.webp";
import xIcon from "../../../../general/assets/works/linkIcon/x.webp";
import lineIcon from "../../../../general/assets/works/linkIcon/line.webp";
import linkedinIcon from "../../../../general/assets/works/linkIcon/linkedin.webp";
import pinterestIcon from "../../../../general/assets/works/linkIcon/pinterest.webp";
import facebookIcon from "../../../../general/assets/works/linkIcon/facebook.webp";
import redditIcon from "../../../../general/assets/works/linkIcon/reddit.webp";
import whatsappIcon from "../../../../general/assets/works/linkIcon/whatsapp.webp";
import mailIcon from "../../../../general/assets/works/linkIcon/mail.webp";

import SuspenseImage from "../../../../general/components/lazyLoader/SuspenseImage";
import { useContext } from "react";
import { WorkCardContext } from "../../../../context/workCardContext";

import { LinkGroup } from "../links/linksType";
import { WorkCardLinksContext } from "../../../../context/workCardLinksContext";

function SocialButtonGroup() {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  const workCardLinksContext = useContext(WorkCardLinksContext);

  if (!workCardLinksContext) {
    throw new Error("workCardLinksContext must be used within a WorkCardLinksContextProvider");
  }

  return (
    <>
      <TelegramShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        title={"PolyME | project - PolyME"}
        url={"https://github.com/nygardk/react-share"}
      >
        <SuspenseImage src={telegramIcon} alt={`${workCardContext.workCardData.title}-share-telegram`} />
      </TelegramShareButton>
      <TwitterShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        title={"PolyME | project - PolyME"}
        url={"https://github.com/nygardk/react-share"}
        hashtags={["react", "share"]}
        related={["@mmqnym"]}
      >
        <SuspenseImage src={xIcon} alt={`${workCardContext.workCardData.title}-share-x`} />
      </TwitterShareButton>
      <LineShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        title="PolyME | project - PolyME"
        url={"https://github.com/nygardk/react-share"}
      >
        <SuspenseImage src={lineIcon} alt={`${workCardContext.workCardData.title}-share-x`} />
      </LineShareButton>
      <LinkedinShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        title="PolyME | project - PolyME"
        summary="0xmmq's portfolio"
        source="PolyME"
        url={"https://github.com/nygardk/react-share"}
      >
        <SuspenseImage src={linkedinIcon} alt={`${workCardContext.workCardData.title}-share-x`} />
      </LinkedinShareButton>
      <PinterestShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        title="PolyME | project - PolyME"
        description="0xmmq's portfolio"
        url={"https://cdn.pixabay.com/photo/2024/05/15/01/13/cat-8762411_1280.png"}
        media="https://cdn.pixabay.com/photo/2024/05/15/01/13/cat-8762411_1280.png"
      >
        <SuspenseImage src={pinterestIcon} alt={`${workCardContext.workCardData.title}-share-x`} />
      </PinterestShareButton>
      <FacebookShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        url={"https://github.com/nygardk/react-share"}
        hashtag="#0xmmq #PolyME #Portfolio"
      >
        <SuspenseImage src={facebookIcon} alt={`${workCardContext.workCardData.title}-share-x`} />
      </FacebookShareButton>
      <RedditShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        url={"https://github.com/nygardk/react-share"}
        title="PolyME | project - PolyME"
      >
        <SuspenseImage src={redditIcon} alt={`${workCardContext.workCardData.title}-share-x`} />
      </RedditShareButton>
      <WhatsappShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        url={"https://github.com/nygardk/react-share"}
        title="PolyME | project - PolyME"
      >
        <SuspenseImage src={whatsappIcon} alt={`${workCardContext.workCardData.title}-share-x`} />
      </WhatsappShareButton>
      <EmailShareButton
        className={`${workCardLinksContext.switchLinks === LinkGroup.SOCIAL ? "" : "hidden"} h-9 w-9 select-none ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} transition-all duration-300 xl:hover:scale-90`}
        url={"https://github.com/nygardk/react-share"}
        subject="PolyME | project - PolyME"
        body="Hi! Here's the link to 0xmmq's portfolio. Check it out!"
      >
        <SuspenseImage src={mailIcon} alt={`${workCardContext.workCardData.title}-share-x`} />
      </EmailShareButton>
    </>
  );
}

export default SocialButtonGroup;
