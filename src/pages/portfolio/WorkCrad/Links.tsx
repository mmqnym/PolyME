import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";
import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function Links() {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  return (
    <div className="col-span-3 col-start-1 row-span-1 row-start-10 flex h-full w-full flex-row items-center gap-4 rounded-2xl border border-gray-700 bg-gray-700/30 px-5">
      {workCardContext.workCardData.links.map((item) => (
        <button
          type="button"
          className={`h-10 w-10 select-none rounded-full ${workCardContext.isSwitchingCard ? "animate-pulse bg-gray-500/30" : "bg-gray-500/70"} p-1.5 transition-all duration-300 xl:hover:scale-90 xl:hover:bg-gray-300`}
        >
          <a target="_blank" href={item.url}>
            <SuspenseImage src={item.icon} alt={item.alt} />
          </a>
        </button>
      ))}
    </div>
  );
}

export default Links;
