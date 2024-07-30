import { WorkCardDockProjectProps } from "../../../../context/workCardContext";
import { workCardDataMap } from "../workCardDataMap";

export const dock: WorkCardDockProjectProps[] = [
  {
    title: workCardDataMap["PolyME"].title,
    icon: workCardDataMap["PolyME"].dockIcon.src,
    alt: workCardDataMap["PolyME"].dockIcon.alt,
  },
  {
    title: workCardDataMap["QuickCerts"].title,
    icon: workCardDataMap["QuickCerts"].dockIcon.src,
    alt: workCardDataMap["QuickCerts"].dockIcon.alt,
  },
  {
    title: workCardDataMap["JumpCross"].title,
    icon: workCardDataMap["JumpCross"].dockIcon.src,
    alt: workCardDataMap["JumpCross"].dockIcon.alt,
  },
  {
    title: workCardDataMap["VisHybrid"].title,
    icon: workCardDataMap["VisHybrid"].dockIcon.src,
    alt: workCardDataMap["VisHybrid"].dockIcon.alt,
  },
  {
    title: workCardDataMap["PwdPort"].title,
    icon: workCardDataMap["PwdPort"].dockIcon.src,
    alt: workCardDataMap["PwdPort"].dockIcon.alt,
  },
  {
    title: workCardDataMap["Discord Member Verification System"].title,
    icon: workCardDataMap["Discord Member Verification System"].dockIcon.src,
    alt: workCardDataMap["Discord Member Verification System"].dockIcon.alt,
  },
  // {
  //   target: "GoINK",
  //   src: goinkProjectLogo,
  //   alt: "quickcerts-project-logo",
  //   setCurrentChosenCard: setCurrentChosenCard,
  //   currentChosenCard: currentChosenCard,
  // },
  // {
  //   target: "PolyME",
  //   src: polymeProjectLogo,
  //   alt: "polyme-project-logo",
  //   setCurrentChosenCard: setCurrentChosenCard,
  //   currentChosenCard: currentChosenCard,
  // },
  // {
  //   target: "NFT Market Sniper",
  //   src: nftMarketSniperProjectLogo,
  //   alt: "nft-market-sniper-project-logo",
  //   setCurrentChosenCard: setCurrentChosenCard,
  //   currentChosenCard: currentChosenCard,
  // },
  // {
  //   target: "Discord Member Verification System",
  //   src: kaijuOfCronosProjectLogo,
  //   alt: "kaiju-of-cronos-project-logo",
  //   setCurrentChosenCard: setCurrentChosenCard,
  //   currentChosenCard: currentChosenCard,
  // },
  // {
  //   target: "Line Currency Bot",
  //   src: lineBotProjectLogo,
  //   alt: "line-bot-project-logo",
  //   setCurrentChosenCard: setCurrentChosenCard,
  //   currentChosenCard: currentChosenCard,
  // },
  // {
  //   target: "MyMemo",
  //   src: mymemoProjectLogo,
  //   alt: "mymemo-project-logo",
  //   setCurrentChosenCard: setCurrentChosenCard,
  //   currentChosenCard: currentChosenCard,
  // },
];
