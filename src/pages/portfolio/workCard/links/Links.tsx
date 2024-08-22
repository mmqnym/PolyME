import ControlButtonGroup from "../links/ControlButtonGroup";
import DonateButtonGroup from "../links/DonateButtonGroup";
import LinksContainer from "../links/LinksContainer";
import ReferenceButtonGroup from "../links/ReferenceButtonGroup";
import SocialButtonGroup from "../links/SocialButtonGroup";
import WorkCardLinksConsumer from "../workCardLinksConsumer/WorkCardLinksConsumer";

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
