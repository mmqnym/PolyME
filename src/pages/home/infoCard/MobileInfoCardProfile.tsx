import MobileNameSwitcher from "../nameSwitcher/MobileNameSwitcher";
import MobileWeb3List from "../web3list/MobildWeb3List";

function MobileInfoCardProfile() {
  return (
    <div className="flex flex-col items-start gap-3">
      {/* <p className="mt-2 bg-gradient-to-tr from-orange-700 via-amber-800 to-amber-900 bg-clip-text font-ubuntu text-5xl text-transparent transition-colors duration-500 dark:from-pink-300 dark:via-purple-300 dark:to-violet-400 xl:text-6xl">
        0xmmq
      </p> */}
      <MobileNameSwitcher />
      <p className="font-ubuntu text-xl tracking-wide text-amber-900/70 transition-colors duration-500 dark:text-purple-400/70">
        Backend Engineer |
      </p>
      <MobileWeb3List />
    </div>
  );
}

export default MobileInfoCardProfile;
