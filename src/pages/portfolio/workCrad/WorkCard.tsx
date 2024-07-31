import About from "./About";
import Stack from "./Stack";
import Title from "./Title";
import Detail from "./Detail";
import Display from "./Display";
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
