import { useContext } from "react";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";
import { WorkCardContext } from "../../../context/workCardContext";

export interface chooserProps {
  title: string;
  icon: string;
  alt?: string;
}

function Chooser({ title, icon, alt }: chooserProps) {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  const toggleOnClick = () => {
    workCardContext.setCurrentChosenCard(title);
  };

  return (
    <button
      type="button"
      onClick={toggleOnClick}
      className={`${workCardContext.currentChosenCard === title ? "bg-gray-300" : "bg-gray-600/50 xl:hover:scale-95 xl:hover:bg-gray-300/30"} group ml-5 aspect-square h-2/3 rounded-md transition-all duration-100`}
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
