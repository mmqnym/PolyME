import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function Title() {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  return (
    <div className="relative col-span-6 col-start-1 row-span-1 row-start-1 flex items-center justify-center rounded-2xl border border-gray-700 bg-gray-700/30">
      <p className="absolute left-2 top-1/2 -translate-y-1/2 select-none rounded-xl bg-purple-400/50 px-4 py-1 font-ubuntu text-xl tracking-wide text-gray-200">
        Title
      </p>
      <p
        className={`font-ubuntu text-3xl tracking-wide transition-all duration-300 ${workCardContext.isSwitchingCard ? "animate-pulse text-gray-200/30" : "text-gray-200"}`}
      >
        {workCardContext.workCardData.title}
      </p>
    </div>
  );
}

export default Title;
