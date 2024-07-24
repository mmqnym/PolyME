import Container from "./Container";
import Avatar from "./avatar/Avatar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Web3List from "./web3list/Web3List";

function Home() {
  const [showHideMsg, setShowHideMsg] = useState(false);

  const toggleShowHideMsg = () => {
    setShowHideMsg(!showHideMsg);
  };

  return (
    <Container>
      <div className="absolute -right-1/4 -top-1/2 z-0 h-[150vh] w-[60%] -rotate-[30deg] bg-amber-900/30 shadow-lg shadow-amber-800 dark:bg-purple-300/30 dark:shadow-purple-400"></div>
      <Avatar />
      <div className="absolute left-[30%] top-[40%] flex w-1/4 -translate-x-1/2 -translate-y-1/2 flex-col">
        <div className="flex flex-row items-center gap-4">
          <p className="font-ubuntu text-4xl text-gray-600 transition-colors duration-500 dark:text-gray-300">
            Hi! I am
          </p>
          <p className="bg-gradient-to-tr from-orange-700 via-amber-800 to-amber-900 bg-clip-text font-ubuntu text-6xl text-transparent transition-colors duration-500 dark:from-pink-300 dark:via-purple-300 dark:to-violet-400">
            0xmmq
          </p>
        </div>
        <p className="mt-4 font-ubuntu text-3xl tracking-wide text-amber-900/70 transition-colors duration-500 dark:text-purple-400/70">
          Backend Software Engineer |
        </p>
        <p className="mt-5 font-ubuntu text-lg leading-8 text-gray-600 transition-colors duration-500 dark:text-gray-300">
          I am a backend engineer passionate about development and technology research, specializing in blockchain and
          fintech domains with 3 years of relevant work experience.
        </p>
        <p
          className={`${showHideMsg ? "mt-5 h-fit w-fit opacity-100" : "absolute z-[-1] mt-0 h-0 w-0 opacity-0"} font-ubuntu text-lg leading-8 text-gray-600 transition-all duration-500 dark:text-gray-300`}
        >
          My expertise includes planning and developing EVM smart contracts and high-concurrency backend systems. Over
          the course of my career, involvement in various Web3 projects has allowed me to serve in multiple capacities,
          both in-person and remotely, as a translator, consultant, researcher, and developer.
        </p>
        <p
          className={`${showHideMsg ? "mt-5 h-fit w-fit opacity-100" : "absolute z-[-1] mt-0 h-0 w-0 opacity-0"} font-ubuntu text-lg leading-8 text-gray-600 transition-all duration-700 dark:text-gray-300`}
        >
          Equipped with strong communication skills and a collaborative mindset, my professional experience and
          technical proficiency make me a valuable asset to any team.
        </p>
        <div className="mt-10 flex h-12 w-full flex-row items-center gap-5">
          <button
            type="button"
            onClick={toggleShowHideMsg}
            className={`${showHideMsg ? "hidden" : ""} h-fit w-fit rounded-md border-2 border-amber-800 bg-amber-800 px-6 py-2 font-ubuntu text-lg font-medium tracking-wide text-gray-100 transition-all duration-500 dark:border-violet-400 dark:bg-violet-400 dark:text-gray-700 xl:hover:bg-amber-800/90 xl:active:translate-y-1 xl:dark:hover:bg-violet-400/90`}
          >
            Read more
          </button>
          <NavLink
            to="/links"
            draggable="false"
            className="transion-colors w-fit rounded-md border-2 border-amber-800/40 bg-gray-100/70 px-6 py-2 font-ubuntu text-lg font-medium tracking-wide text-gray-500 duration-500 dark:border-purple-400/40 dark:bg-gray-700/70 dark:text-gray-300 xl:hover:bg-gray-100/90 xl:active:translate-y-1 xl:dark:hover:bg-gray-700/90"
          >
            Contact
          </NavLink>
          <Web3List />
        </div>
      </div>
    </Container>
  );
}

export default Home;
