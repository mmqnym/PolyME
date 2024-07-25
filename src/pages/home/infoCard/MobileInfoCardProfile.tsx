import MobileNameSwitcher from "../nameSwitcher/MobileNameSwitcher";
import MobileWeb3List from "../web3list/MobildWeb3List";

function MobileInfoCardProfile() {
  return (
    <div className="flex flex-col items-start gap-3">
      <MobileNameSwitcher />
      <p className="font-ubuntu text-xl tracking-wide text-amber-900/70 transition-colors duration-500 dark:text-purple-400/70">
        Backend Engineer |
      </p>
      <MobileWeb3List />
    </div>
  );
}

export default MobileInfoCardProfile;
