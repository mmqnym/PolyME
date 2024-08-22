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
				className={`${currentHoveredProject === "" ? "hidden" : "xl:block hidden"} fixed bottom-[12%] select-none rounded-full animate-bounce ring-gray-600 dark:ring-white ring-2 bg-gray-500 dark:bg-gray-700 px-6 py-1 text-2xl text-gray-100 dark:text-gray-200`}
			>
				{currentHoveredProject}
			</p>
			<section className="fixed left-0 bottom-0 h-[8%] w-full bg-orange-100 dark:bg-stone-900 border-or-400/30 transition-all duration-500 xl:hover:h-[9%] border-t-2 border-orange-300 dark:border-purple-400/30 xl:dark:hover:border-purple-400/70">
				<div className="flex items-center justify-start w-full h-full gap-2 px-3 overflow-x-auto sm:gap-3 xl:gap-5 sm:justify-center xl:px-5 sm:scrollbar-thin sm:scrollbar-track-transparent sm:scrollbar-track-rounded-full sm:scrollbar-thumb-rounded-full">
					{dock.map((project) => (
						<Fragment key={`dock-${project.title}`}>
							<Chooser
								{...project}
								setCurrentHoveredProject={setCurrentHoveredProject}
							/>
						</Fragment>
					))}
				</div>
			</section>
		</>
	);
}

export default WorkCardDock;
