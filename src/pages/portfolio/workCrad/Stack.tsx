import StackLanguages from "./StackLanguages";
import StackSkills from "./StackSkills";

function Stack() {
	return (
		<div className="w-full h-64 bg-orange-100 border xl:h-full xl:col-span-2 xl:col-start-5 xl:row-span-3 xl:row-start-5 border-orange-900/30 dark:border-gray-700 rounded-2xl dark:bg-gray-700/30">
			<p className="px-4 py-1 m-2 text-xl tracking-wide text-gray-700 bg-orange-200 select-none dark:text-gray-200 w-fit rounded-xl dark:bg-purple-400/50 font-ubuntu">
				Stack
			</p>
			<div className="flex flex-col w-full gap-6 mt-4 overflow-auto text-lg h-3/5 font-ubuntu">
				<StackLanguages />
				<StackSkills />
			</div>
		</div>
	);
}

export default Stack;
