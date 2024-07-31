import WorkCardLinksConsumer from "../workCardLinksConsumer/WorkCardLinksConsumer";
import ReferenceButtonGroup from "../links/ReferenceButtonGroup";
import SocialButtonGroup from "../links/SocialButtonGroup";
import DonateButtonGroup from "../links/DonateButtonGroup";
import ControlButtonGroup from "../links/ControlButtonGroup";
import LinksContainer from "../links/LinksContainer";

function Links() {
  return (
    <LinksContainer>
      <WorkCardLinksConsumer>
        <ReferenceButtonGroup />
        <SocialButtonGroup />
        <DonateButtonGroup />
        <ControlButtonGroup />
      </WorkCardLinksConsumer>
    </LinksContainer>
  );
}

export default Links;
