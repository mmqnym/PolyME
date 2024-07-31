import { WorkCardLinksContext, WorkCardLinksContextType } from "../../../../context/workCardLinksContext";
import { WorkCardContext } from "../../../../context/workCardContext";
import { useContext, useEffect, useState } from "react";
import { LinkGroup } from "../links/linksType";

function WorkCardLinksConsumer({ children }: { children: React.ReactNode }) {
  const workCardContext = useContext(WorkCardContext);

  if (!workCardContext) {
    throw new Error("workCardContext must be used within a WorkCardContextProvider");
  }

  const [switchLinks, setSwitchLinks] = useState<LinkGroup>(LinkGroup.REFERENCE);

  useEffect(() => {
    // Reset switchLinks when currentChosenCard changes
    setSwitchLinks(LinkGroup.REFERENCE);
  }, [workCardContext.currentChosenCard]);

  const WorkCardLinksContextValue = {
    setSwitchLinks,
    switchLinks,
  } as WorkCardLinksContextType;

  return <WorkCardLinksContext.Provider value={WorkCardLinksContextValue}>{children}</WorkCardLinksContext.Provider>;
}

export default WorkCardLinksConsumer;
