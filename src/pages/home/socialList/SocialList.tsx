import SocialListRef from "./SocialListRef";

function SocialList() {
	return (
		<div className="absolute flex flex-row items-center gap-4 rounded-md top-20 h-fit bg-gray-300/30 dark:bg-gray-500/30 sm:px-4 sm:py-2 xl:static xl:bg-transparent xl:p-0 xl:dark:bg-transparent">
			<div className="hidden h-12 w-0.5 rounded-full border-l-2 border-gray-400 dark:border-gray-600 xl:block" />
			<SocialListRef />
		</div>
	);
}

export default SocialList;
