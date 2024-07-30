import { Dispatch, SetStateAction, createContext } from "react";
import { LinkGroup } from "../pages/portfolio/workCrad/links/linksType";

export interface WorkCardLinksContextType {
  setSwitchLinks: Dispatch<SetStateAction<LinkGroup>>;
  switchLinks: LinkGroup;
}

export const WorkCardLinksContext = createContext<WorkCardLinksContextType | undefined>(undefined);
