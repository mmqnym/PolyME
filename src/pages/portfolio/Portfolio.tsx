import Container from "./Container";
import WorkCard from "./workCrad/WorkCard";
import WorkCardDock from "./workCardDock/WorkCardDock";

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
