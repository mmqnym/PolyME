import { Dispatch, SetStateAction, createContext } from "react";

export interface WorkCardProps {
  title: string;
  dockIcon: WorkCardIconProps;
  display: WorkCardDisplayProps;
  links: WorkCardLinkProps[];
  description: string;
  stack: WorkCardStackProps;
  detail: string;
}

export interface WorkCardDisplayProps {
  imgs: WorkCardIconProps[];
}

export interface WorkCardIconProps {
  src: string;
  alt?: string;
}

export interface WorkCardLinkProps {
  icon: string;
  alt?: string;
  url: string;
}

export interface WorkCardStackProps {
  languages: WorkCardStackLanguageProps[];
  skills: string[];
}

export interface WorkCardStackLanguageProps {
  name: string;
  color: string;
}

export interface WorkCardDockProjectProps {
  title: string;
  icon: string;
  alt?: string;
}

export interface WorkCardContextType {
  currentChosenCard: string;
  setCurrentChosenCard: Dispatch<SetStateAction<string>>;
  workCardData: WorkCardProps;
  setWorkCardData: Dispatch<SetStateAction<WorkCardProps>>;
  isSwitchingCard: boolean;
  setIsSwitchingCard: Dispatch<SetStateAction<boolean>>;
}

export const WorkCardContext = createContext<WorkCardContextType | undefined>(undefined);
