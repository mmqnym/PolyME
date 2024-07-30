import { WorkCardContext, WorkCardProps } from "../../../context/workCardContext";
import { useEffect, useState } from "react";
import { workCardDataMap } from "./workCardDataMap";

function WorkCardConsumer({ children }: { children: React.ReactNode }) {
  const [workCardData, setWorkCardData] = useState<WorkCardProps>(workCardDataMap["PolyME"]);
  const [currentChosenCard, setCurrentChosenCard] = useState<string>("PolyME");
  const [isSwitchingCard, setIsSwitchingCard] = useState<boolean>(false);

  useEffect(() => {
    if (workCardDataMap[currentChosenCard]) {
      setIsSwitchingCard(true);

      setTimeout(() => {
        setWorkCardData(workCardDataMap[currentChosenCard]);
        setIsSwitchingCard(false);
      }, 300);
    } else {
      throw new Error(`"${currentChosenCard}" is not a valid card name`);
    }
  }, [currentChosenCard]);

  const WorkCardContextValue = {
    currentChosenCard,
    setCurrentChosenCard,
    workCardData,
    setWorkCardData,
    isSwitchingCard,
    setIsSwitchingCard,
  };

  return <WorkCardContext.Provider value={WorkCardContextValue}>{children}</WorkCardContext.Provider>;
}

export default WorkCardConsumer;
