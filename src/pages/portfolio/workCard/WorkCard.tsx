import Title from "./Title";
import Display from "./Display";
import Stack from "./Stack";
import { GlobalContext } from "../../../context/globalContext";
import { useContext } from "react";
import Detail from "./Detail";
import About from "./About";

function WorkCard() {
	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<div className={`${globalContext.font} w-3/4 flex flex-col gap-5`}>
			<Title />
			<Display />
			<About />
			<Stack />
			<Detail />
		</div>
	);
}

export default WorkCard;
