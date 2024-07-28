import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function Description() {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  return (
    <div className="col-span-3 col-start-4 row-span-2 row-start-2 flex h-full w-full flex-col rounded-2xl border border-gray-700 bg-gray-700/30">
      <p className="m-2 h-fit w-fit select-none rounded-xl bg-purple-400/50 px-4 py-1 font-ubuntu text-xl text-gray-200">
        Description
      </p>
      <p
        className={`mt-2 h-3/5 w-full overflow-auto px-6 font-ubuntu text-lg ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-200/30" : "text-gray-200"} transition-all duration-300 scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full`}
      >
        {workCardContext.workCardData.description}
      </p>
    </div>
  );
}

export default Description;
