import { WorkCardProps } from "../../../context/workCardContext";

import quickCertsData from "./workCardData/quickcerts";
import pwdPortData from "./workCardData/pwdport";
import jumpcrossData from "./workCardData/jumpcross";
import vishybridData from "./workCardData/vishybrid";
import polymeData from "./workCardData/polyme";
import discordMemberVerificationSystemData from "./workCardData/discordMemberVerificationSystem";

type WorkCardDataMap = Record<string, WorkCardProps>;

export const workCardDataMap: WorkCardDataMap = {
  PolyME: polymeData,
  QuickCerts: quickCertsData,
  JumpCross: jumpcrossData,
  VisHybrid: vishybridData,
  PwdPort: pwdPortData,
  "Discord Member Verification System": discordMemberVerificationSystemData,
};
