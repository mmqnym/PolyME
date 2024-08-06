import { type Dispatch, type SetStateAction, createContext } from "react";

export interface NavigatorContextType {
	setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
	showMobileMenu: boolean;
	setIsDarkMode: Dispatch<SetStateAction<boolean>>;
	isDarkMode: boolean;
}

export const NavigatorContext = createContext<NavigatorContextType | undefined>(
	undefined,
);
