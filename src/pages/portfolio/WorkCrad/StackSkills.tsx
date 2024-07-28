import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function StackSkills() {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  return (
    <div className="flex flex-row flex-wrap gap-5 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-400/50 scrollbar-track-rounded-full scrollbar-thumb-rounded-full hover:scrollbar-track-gray-700">
      {workCardContext.workCardData.stack.skills.map((item) => (
        <div className="flex flex-row items-center gap-2" key={item}>
          <div
            className={`h-2 w-2 rounded-full transition-all duration-300 ${workCardContext.isSwitchingCard ? "animate-pulse bg-gray-300/30" : "bg-gray-300"}`}
          ></div>
          <p
            className={`font-ubuntu text-base transition-all duration-300 ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-200/30" : "text-gray-200"}`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StackSkills;
