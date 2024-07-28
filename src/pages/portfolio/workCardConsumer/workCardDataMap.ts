import { WorkCardProps } from "../../../context/workCardContext";

import quickCertsData from "./workCardData/quickcerts";
import pwdPortData from "./workCardData/pwdport";
import jumpcrossData from "./workCardData/jumpcross";

type WorkCardDataMap = Record<string, WorkCardProps>;

export const workCardDataMap: WorkCardDataMap = {
  QuickCerts: quickCertsData,
  PwdPort: pwdPortData,
  JumpCross: jumpcrossData,
};
