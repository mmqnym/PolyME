import { Dispatch } from "react";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";

export interface chooserProps {
  target: string;
  src: string;
  alt: string;
  setCurrentChosenCard: Dispatch<React.SetStateAction<string>>;
  currentChosenCard: string;
}

function Chooser({ target, src, alt, setCurrentChosenCard, currentChosenCard }: chooserProps) {
  const toggleOnClick = () => {
    setCurrentChosenCard(target);
  };

  return (
    <button
      type="button"
      onClick={toggleOnClick}
      className={`${currentChosenCard === target ? "bg-gray-300" : "bg-gray-600/50 xl:hover:scale-95 xl:hover:bg-gray-300/30"} group ml-5 aspect-square h-2/3 rounded-md transition-all duration-100`}
    >
      <SuspenseImage
        src={src}
        alt={alt}
        className={`p-3 transition-all duration-300 ${currentChosenCard === target ? "" : "xl:group-hover:p-4"}`}
      />
    </button>
  );
}

export default Chooser;
