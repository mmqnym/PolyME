import SocialListRef from "./SocialListRef";

function MobileSocialList() {
	return (
		<div className="flex flex-col gap-2 px-4 py-2 mt-6 rounded-full h-fit w-fit bg-orange-900/10 dark:bg-violet-200/10">
			<div className="flex flex-row gap-4 h-fit w-fit">
				<SocialListRef />
			</div>
		</div>
	);
}

export default MobileSocialList;
