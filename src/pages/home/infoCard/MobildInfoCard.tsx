import MobileInfoCardContent from "./MobileInfoCardContent";
import MobileInfoCardProfile from "./MobileInfoCardProfile";

function MobileInfoCard() {
	return (
		<div className="absolute left-[5%] flex w-full flex-col pb-[20%] sm:hidden">
			<MobileInfoCardProfile />
			<MobileInfoCardContent />
		</div>
	);
}

export default MobileInfoCard;
