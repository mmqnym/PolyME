import MobileNameSwitcher from "../nameSwitcher/MobileNameSwitcher";
import MobildSocialList from "../web3list/MobildSocialList";

function MobileInfoCardProfile() {
  return (
    <div className="flex flex-col items-start gap-3">
      <MobileNameSwitcher />
      <p className="font-ubuntu text-xl tracking-wide text-amber-900/70 transition-colors duration-500 dark:text-purple-400/70">
        Backend Engineer |
      </p>
      <MobildSocialList />
    </div>
  );
}

export default MobileInfoCardProfile;
