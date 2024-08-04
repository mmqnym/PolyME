import StackLanguages from "./StackLanguages";
import StackSkills from "./StackSkills";

function Stack() {
	return (
		<div className="w-full h-full col-span-2 col-start-5 row-span-3 row-start-5 border border-gray-700 rounded-2xl bg-gray-700/30">
			<p className="px-4 py-1 m-2 text-xl tracking-wide text-gray-200 select-none w-fit rounded-xl bg-purple-400/50 font-ubuntu">
				Stack
			</p>
			<div className="flex flex-col w-full gap-6 px-6 mt-4 overflow-auto text-lg text-gray-200 h-3/5 font-ubuntu">
				<StackLanguages />
				<StackSkills />
			</div>
		</div>
	);
}

export default Stack;
