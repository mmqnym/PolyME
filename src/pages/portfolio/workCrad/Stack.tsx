import StackLanguages from "./StackLanguages";
import StackSkills from "./StackSkills";

function Stack() {
	return (
		<div className="col-span-2 col-start-5 row-span-3 row-start-5 h-full w-full rounded-2xl border border-gray-700 bg-gray-700/30">
			<p className="m-2 w-fit select-none rounded-xl bg-purple-400/50 px-4 py-1 font-ubuntu text-xl tracking-wide text-gray-200">
				Stack
			</p>
			<div className="mt-4 flex h-3/5 w-full flex-col gap-6 overflow-auto px-6 font-ubuntu text-lg text-gray-200">
				<StackLanguages />
				<StackSkills />
			</div>
		</div>
	);
}

export default Stack;
