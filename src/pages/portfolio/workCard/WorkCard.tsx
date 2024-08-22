import Title from "./Title";
import Display from "./Display";
import Stack from "./Stack";
import { GlobalContext } from "../../../context/globalContext";
import { useContext } from "react";
import Detail from "./Detail";
import About from "./About";
import { Helmet } from "react-helmet";
import { WorkCardContext } from "../../../context/workCardContext";

function WorkCard() {
	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	return (
		<div className={`${globalContext.font} w-3/4 flex flex-col gap-5`}>
			<Helmet>
				<meta
					name="description"
					content={workCardContext.workCardData.description}
				/>
				<meta
					property="og:title"
					content={`Portfolio/${workCardContext.workCardData.title} - PolyME`}
				/>
				<meta property="og:url" content={window.location.href} />
				<meta
					property="og:image"
					content={`https://mmq.dev/projects/project-${workCardContext.workCardData.title.replaceAll(" ", "+")}`}
				/>
				<meta
					property="og:image:alt"
					content={`PolyME-Portfolio/${workCardContext.workCardData.title}`}
				/>
				<meta
					property="og:description"
					content={workCardContext.workCardData.description}
				/>
			</Helmet>
			<Title />
			<Display />
			<About />
			<Stack />
			<Detail />
		</div>
	);
}

export default WorkCard;
