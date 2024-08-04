import Container from "./Container";
import WorkCardDock from "./workCardDock/WorkCardDock";
import WorkCard from "./workCrad/WorkCard";

import WorkCardConsumer from "./workCardConsumer/WorkCardConsumer";

function Portfolio() {
	return (
		<Container>
			<WorkCardConsumer>
				<WorkCard />
				<WorkCardDock />
			</WorkCardConsumer>
		</Container>
	);
}

export default Portfolio;
