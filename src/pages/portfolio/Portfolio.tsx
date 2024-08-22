import Container from "./Container";
import WorkCardDock from "./workCardDock/WorkCardDock";
import WorkCard from "./workCard/WorkCard";

import WorkCardConsumer from "./workCardConsumer/WorkCardConsumer";
import Hinter from "./Hinter";

function Portfolio() {
	return (
		<Container>
			<WorkCardConsumer>
				<Hinter />
				<WorkCard />
				<WorkCardDock />
			</WorkCardConsumer>
		</Container>
	);
}

export default Portfolio;
