import { Dispatch, SetStateAction, createContext } from "react";

export interface NavigatorContextType {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
}

export const NavigatorContext = createContext<NavigatorContextType | undefined>(undefined);
