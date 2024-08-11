import { useTranslation } from "react-i18next";
import MobileNameSwitcher from "../nameSwitcher/MobileNameSwitcher";
import MobildSocialList from "../socialList/MobildSocialList";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";

function MobileInfoCardProfile() {
	const { t } = useTranslation();

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<div className="flex flex-col items-start">
			<MobileNameSwitcher />
			<p
				className={`${globalContext.font} text-xl tracking-wide transition-colors duration-500 text-amber-900/70 dark:text-purple-400/70`}
			>
				{t("profile.job-title-alt")} |
			</p>
			<MobildSocialList />
		</div>
	);
}

export default MobileInfoCardProfile;
