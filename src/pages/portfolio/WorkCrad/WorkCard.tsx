import Description from "./Description";
import Stack from "./Stack";
import Title from "./Title";
import Detail from "./Detail";
import Links from "./Links";
import Display from "./Display";
import WorkCardContainer from "./WorkCardContainer";

function WorkCard() {
  return (
    <WorkCardContainer>
      <Title />
      <Display />
      <Links />
      <Description />
      <Stack />
      <Detail />
    </WorkCardContainer>
  );
}

export default WorkCard;
