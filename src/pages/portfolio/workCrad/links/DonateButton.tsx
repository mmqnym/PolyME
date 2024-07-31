import { useContext } from "react";
import SuspenseImage from "../../../../general/components/lazyLoader/SuspenseImage";
import { WorkCardContext } from "../../../../context/workCardContext";
import { WorkCardLinksContext } from "../../../../context/workCardLinksContext";
import { LinkGroup } from "../links/linksType";

interface DonateButtonProps {
  src: string;
  alt?: string;
  url: string;
}

function DonateButton({ src, alt, url }: DonateButtonProps) {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  const workCardLinksContext = useContext(WorkCardLinksContext);

  if (!workCardLinksContext) {
    throw new Error("workCardLinksContext must be used within a WorkCardLinksContextProvider");
  }

  return (
    <button
      type="button"
      className={`${workCardLinksContext.switchLinks === LinkGroup.DONATION ? "" : "hidden"} h-9 w-9 select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-gray-600/30" : "bg-gray-600/70"} p-1.5 transition-all duration-300 xl:hover:scale-90 xl:hover:bg-gray-300`}
    >
      <a href={url} target="_blank" rel="noopener">
        <SuspenseImage src={src} alt={alt} />
      </a>
    </button>
  );
}

export default DonateButton;
