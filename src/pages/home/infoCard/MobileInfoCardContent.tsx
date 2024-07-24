import { NavLink } from "react-router-dom";

function MobileInfoCardContent() {
  return (
    <div className="mt-8 flex w-3/4 flex-col">
      <p className="mt-5 font-ubuntu text-lg leading-8 text-gray-600 transition-colors duration-500 dark:text-gray-300">
        I am a backend engineer passionate about development and technology research, specializing in blockchain and
        fintech domains with 3 years of relevant work experience.
      </p>
      <p className="mt-5 h-fit w-fit font-ubuntu text-lg leading-8 text-gray-600 opacity-100 transition-all duration-700 dark:text-gray-300">
        My expertise includes planning and developing EVM smart contracts and high-concurrency backend systems. Over the
        course of my career, involvement in various Web3 projects has allowed me to serve in multiple capacities, both
        in-person and remotely, as a translator, consultant, researcher, and developer.
      </p>
      <p className="mt-5 h-fit w-fit font-ubuntu text-lg leading-8 text-gray-600 opacity-100 transition-all duration-700 dark:text-gray-300">
        Equipped with strong communication skills and a collaborative mindset, my professional experience and technical
        proficiency make me a valuable asset to any team.
      </p>
      <div className="relative mt-10 flex h-12 w-full flex-row items-center gap-5">
        <NavLink
          to="/links"
          draggable="false"
          className="transion-colors w-fit rounded-md border-2 border-amber-800/40 bg-gray-100/70 px-6 py-2 font-ubuntu text-base font-medium tracking-wide text-gray-500 duration-500 dark:border-purple-400/40 dark:bg-gray-700/70 dark:text-gray-300 xl:text-lg xl:hover:bg-gray-100/90 xl:active:translate-y-1 xl:dark:hover:bg-gray-700/90"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default MobileInfoCardContent;
