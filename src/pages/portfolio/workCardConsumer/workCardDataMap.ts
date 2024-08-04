import type { WorkCardProps } from "../../../context/workCardContext";

import autoInteracterData from "./workCardData/autoInteracter";
import discordMemberVerificationSystemData from "./workCardData/discordMemberVerificationSystem";
import goinkData from "./workCardData/goink";
import jumpcrossData from "./workCardData/jumpcross";
import mymemoData from "./workCardData/myMemo";
import nftMarketSniperData from "./workCardData/nftMarketSniper";
import polymeData from "./workCardData/polyme";
import pwdPortData from "./workCardData/pwdport";
import quickCertsData from "./workCardData/quickcerts";
import recipeMasterData from "./workCardData/recipeMaster";
import travelLineBotData from "./workCardData/travelLineBot";
import vishybridData from "./workCardData/vishybrid";

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
