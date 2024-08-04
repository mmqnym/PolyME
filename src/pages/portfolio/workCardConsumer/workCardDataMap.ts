import { WorkCardProps } from "../../../context/workCardContext";

import quickCertsData from "./workCardData/quickcerts";
import pwdPortData from "./workCardData/pwdport";
import jumpcrossData from "./workCardData/jumpcross";
import vishybridData from "./workCardData/vishybrid";
import polymeData from "./workCardData/polyme";
import discordMemberVerificationSystemData from "./workCardData/discordMemberVerificationSystem";
import nftMarketSniperData from "./workCardData/nftMarketSniper";
import travelLineBotData from "./workCardData/travelLineBot";
import goinkData from "./workCardData/goink";
import autoInteracterData from "./workCardData/autoInteracter";
import recipeMasterData from "./workCardData/recipeMaster";
import mymemoData from "./workCardData/myMemo";

type WorkCardDataMap = Record<string, WorkCardProps>;

export const workCardDataMap: WorkCardDataMap = {
  PolyME: polymeData,
  QuickCerts: quickCertsData,
  JumpCross: jumpcrossData,
  VisHybrid: vishybridData,
  PwdPort: pwdPortData,
  AutoInteracter: autoInteracterData,
  "Discord Member Verification System": discordMemberVerificationSystemData,
  "NFT Market Sniper": nftMarketSniperData,
  GoINK: goinkData,
  "Travel Line Bot": travelLineBotData,
  RecipeMaster: recipeMasterData,
  MyMemo: mymemoData,
};
