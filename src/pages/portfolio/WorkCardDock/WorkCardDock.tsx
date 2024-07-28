import { Fragment, useState } from "react";
import Chooser, { chooserProps } from "./Chooser";

import qcsProjectLogo from "../../../general/assets/works/preview/quickcerts.webp";
import goinkProjectLogo from "../../../general/assets/works/preview/goink.webp";
import polymeProjectLogo from "../../../general/assets/works/preview/polyme.webp";
import jumpcrossProjectLogo from "../../../general/assets/works/preview/jumpcross.webp";
import pwdportProjectLogo from "../../../general/assets/works/preview/pwdport.webp";
import tauriProjectLogo from "../../../general/assets/works/preview/tauri.webp";
import lineBotProjectLogo from "../../../general/assets/works/preview/line.webp";
import mymemoProjectLogo from "../../../general/assets/works/preview/mymemo.webp";
import nftMarketSniperProjectLogo from "../../../general/assets/works/preview/nft-market-sniper.webp";
import kaijuOfCronosProjectLogo from "../../../general/assets/works/preview/KaijuOfCronos.webp";

function WorkCardDock() {
  const [currentChosenCard, setCurrentChosenCard] = useState<string>("QuickCerts");

  const workCardChooserList: chooserProps[] = [
    {
      target: "QuickCerts",
      src: qcsProjectLogo,
      alt: "quickcerts-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "GoINK",
      src: goinkProjectLogo,
      alt: "quickcerts-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "JumpCross",
      src: jumpcrossProjectLogo,
      alt: "quickcerts-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "VisHybrid",
      src: tauriProjectLogo,
      alt: "tauri-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "PwdPort",
      src: pwdportProjectLogo,
      alt: "pwdport-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "PolyME",
      src: polymeProjectLogo,
      alt: "polyme-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "NFT Market Sniper",
      src: nftMarketSniperProjectLogo,
      alt: "nft-market-sniper-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "Discord Member Verification Bot",
      src: kaijuOfCronosProjectLogo,
      alt: "kaiju-of-cronos-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "Line Currency Bot",
      src: lineBotProjectLogo,
      alt: "line-bot-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
    {
      target: "MyMemo",
      src: mymemoProjectLogo,
      alt: "mymemo-project-logo",
      setCurrentChosenCard: setCurrentChosenCard,
      currentChosenCard: currentChosenCard,
    },
  ];

  return (
    <div className="absolute bottom-0 flex h-[8%] w-full flex-row items-center justify-center border-t-2 border-purple-400/30 bg-stone-900/80 transition-all duration-500 xl:hover:h-[9%] xl:hover:border-purple-400/70">
      {workCardChooserList.map((workCardChooserProps) => (
        <Fragment key={workCardChooserProps.target}>
          <Chooser {...workCardChooserProps} />
        </Fragment>
      ))}
    </div>
  );
}

export default WorkCardDock;
