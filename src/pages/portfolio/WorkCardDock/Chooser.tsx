import { Dispatch, useContext } from "react";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";
import { WorkCardContext } from "../../../context/workCardContext";

export interface chooserProps {
  title: string;
  icon: string;
  alt?: string;
  setCurrentHoveredProject: Dispatch<React.SetStateAction<string>>;
}

function Chooser({ title, icon, alt, setCurrentHoveredProject }: chooserProps) {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  const toggleOnClick = () => {
    workCardContext.setCurrentChosenCard(title);
  };

  const handleMouseEnter = () => {
    setCurrentHoveredProject(title);
  };

  const handleMouseLeave = () => {
    setCurrentHoveredProject("");
  };

  return (
    <button
      type="button"
      onClick={toggleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${workCardContext.currentChosenCard === title ? "bg-gray-300" : "bg-gray-600/50 xl:hover:scale-95 xl:hover:bg-gray-300/30"} group ml-5 flex aspect-square h-2/3 flex-row rounded-md transition-all duration-100`}
    >
      <SuspenseImage
        src={icon}
        alt={alt}
        className={`p-3 transition-all duration-300 ${workCardContext.currentChosenCard === title ? "" : "xl:group-hover:p-4"}`}
      />
    </button>
  );
}

export default Chooser;
