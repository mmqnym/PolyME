import { Fragment, useContext, useState } from "react";
import Chooser from "./Chooser";

import { WorkCardContext } from "../../../context/workCardContext";
import { dock } from "../workCardConsumer/workCardData/dock";

function WorkCardDock() {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	const [currentHoveredProject, setCurrentHoveredProject] =
		useState<string>("");

	return (
		<>
			<p
				className={`${currentHoveredProject === "" ? "hidden" : "block"} absolute bottom-[10%] select-none rounded-full bg-gray-500/30 px-6 py-1 text-2xl text-purple-400`}
			>
				{currentHoveredProject}
			</p>
			<section className="absolute bottom-0 flex h-[8%] w-full flex-row items-center justify-center border-t-2 border-purple-400/30 bg-stone-900/80 transition-all duration-500 xl:hover:h-[9%] xl:hover:border-purple-400/70">
				{dock.map((project) => (
					<Fragment key={`dock-${project.title}`}>
						<Chooser
							{...project}
							setCurrentHoveredProject={setCurrentHoveredProject}
						/>
					</Fragment>
				))}
			</section>
		</>
	);
}

export default WorkCardDock;
