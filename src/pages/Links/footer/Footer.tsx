import BottomWave from "./BottomWave";

function Footer() {
  return (
    <footer className="group flex h-60 w-full select-none flex-col items-center justify-center gap-4 border-t-2 border-amber-900/30 transition-colors duration-500 hover:border-amber-900/70 dark:border-purple-400/30 dark:hover:border-purple-400/70 sm:h-40 sm:flex-row">
      <div className="mr-12 flex w-full flex-col items-center justify-center sm:w-1/4">
        <p className="font-orbitron flex flex-row items-center justify-center text-3xl text-amber-900/60 transition-colors duration-500 group-hover:text-amber-900 dark:text-purple-400/60 dark:group-hover:text-purple-400">
          PolyME
        </p>
        <p className="font-ubuntu flex items-center justify-center pl-36 pt-1 text-sm text-gray-400/80">
          Produced by 0xmmq
        </p>
      </div>
      <p className="font-ubuntu flex w-full items-center justify-center text-pretty px-12 text-sm text-gray-400/80 transition-colors duration-500 group-hover:text-gray-500 dark:group-hover:text-gray-300 sm:w-2/3 sm:justify-start lg:px-4 xl:w-1/4">
        For business cooperation, welcome to leaving your details by contact channels above, and I will respond as soon
        as possible.
      </p>

      <BottomWave />
    </footer>
  );
}

export default Footer;
