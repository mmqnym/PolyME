import { type Dispatch, type SetStateAction, createContext } from "react";

export interface GlobalContextType {
	setFont: Dispatch<SetStateAction<string>>;
	font: string;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
	undefined,
);
