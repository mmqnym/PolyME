import BottomWave from "./BottomWave";
import logo from "../../../general/assets/logo.webp";
import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";

function Footer() {
  return (
    <footer className="group flex h-60 w-full select-none flex-col items-center justify-center gap-4 bg-orange-100 transition-colors duration-500 dark:border-t-2 dark:border-purple-400/30 dark:bg-stone-900/80 sm:fixed sm:bottom-0 sm:h-40 sm:flex-row xl:static xl:dark:hover:border-purple-400/70">
      <SuspenseImage src={logo} alt="logo" className="ml-12 hidden w-20 xl:block" />
      <div className="mr-12 flex w-full flex-col items-center justify-center sm:ml-10 sm:w-1/4 lg:items-start xl:ml-2 xl:mr-16 xl:w-1/5">
        <p className="flex flex-row items-center justify-center font-orbitron text-3xl text-amber-900/60 transition-colors duration-500 dark:text-purple-400/60 xl:group-hover:text-amber-900 xl:dark:group-hover:text-purple-400">
          PolyME
        </p>
        <p className="flex items-center justify-center pl-36 pt-1 font-ubuntu text-sm text-gray-400/80 sm:pl-16 lg:pl-16">
          Produced by 0xmmq
        </p>
      </div>
      <p className="mt-4 flex w-full items-center justify-center text-pretty px-12 font-ubuntu text-sm text-gray-400/80 transition-colors duration-500 sm:w-2/3 sm:justify-start lg:mt-0 lg:px-4 xl:w-1/5 xl:group-hover:text-gray-500 xl:dark:group-hover:text-gray-300">
        For business cooperation, welcome to leaving your details by contact channels above, and I will respond as soon
        as possible.
      </p>

      <BottomWave />
    </footer>
  );
}

export default Footer;
