import { useState } from "react";
import InfoCardFooter from "./InfoCardFooter";
import InfoCardContent from "./InfoCardContent";

function InfoCard() {
  const [showHideMsg, setShowHideMsg] = useState(false);

  const toggleShowHideMsg = () => {
    setShowHideMsg(!showHideMsg);
  };

  return (
    <div className="absolute left-[5%] hidden w-1/2 flex-col pb-[20%] sm:flex xl:static xl:w-1/3 xl:pb-0">
      <InfoCardContent showHideMsg={showHideMsg} />
      <InfoCardFooter showHideMsg={showHideMsg} toggleShowHideMsg={toggleShowHideMsg} />
    </div>
  );
}

export default InfoCard;
