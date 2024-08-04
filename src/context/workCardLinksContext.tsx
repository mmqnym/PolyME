import { type Dispatch, type SetStateAction, createContext } from "react";
import type { LinkGroup } from "../pages/portfolio/workCrad/links/linksType";

export interface WorkCardLinksContextType {
	setSwitchLinks: Dispatch<SetStateAction<LinkGroup>>;
	switchLinks: LinkGroup;
}

export const WorkCardLinksContext = createContext<
	WorkCardLinksContextType | undefined
>(undefined);
