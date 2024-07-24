import Container from "./Container";
import Avatar from "./avatar/Avatar";
import InfoCard from "./infoCard/InfoCard";
import MobileInfoCard from "./infoCard/MobildInfoCard";

function Home() {
  return (
    <Container>
      {/* Background elements */}
      <div className="absolute right-0 top-0 z-0 h-1/4 w-full rotate-0 rounded-md bg-amber-900/30 shadow-[0_0_10px_0_#000] shadow-amber-800 transition-all duration-500 dark:bg-purple-300/30 dark:shadow-purple-400 sm:h-[calc(100vh-2rem)] sm:w-[40%] sm:rotate-0 xl:-right-1/4 xl:-top-1/2 xl:h-[150vh] xl:w-[60%] xl:-rotate-[30deg] xl:shadow-lg"></div>

      {/* Content */}
      <div className="mt-6 flex h-full w-full flex-row items-start justify-center sm:mt-24 xl:mt-0 xl:items-center">
        <InfoCard />
        <MobileInfoCard />
        <Avatar />
      </div>
    </Container>
  );
}

export default Home;
