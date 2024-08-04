import About from "./About";
import Detail from "./Detail";
import Display from "./Display";
import Stack from "./Stack";
import Title from "./Title";
import WorkCardContainer from "./WorkCardContainer";

function WorkCard() {
	return (
		<WorkCardContainer>
			<Title />
			<Display />
			<About />
			<Stack />
			<Detail />
		</WorkCardContainer>
	);
}

export default WorkCard;
