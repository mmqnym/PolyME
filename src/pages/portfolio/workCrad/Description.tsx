import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function Description() {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  return (
    <p
      className={`my-2 h-3/5 w-full overflow-auto break-words px-6 font-ubuntu text-lg ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-200/30" : "text-gray-200"} transition-all duration-300 scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full`}
    >
      {workCardContext.workCardData.description}
    </p>
  );
}

export default Description;
