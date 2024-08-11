import { NavLink } from "react-router-dom";
import SocialList from "../socialList/SocialList";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";
import { useContext } from "react";

interface Props {
	showHideMsg: boolean;
	toggleShowHideMsg: () => void;
}

function InfoCardFooter({ showHideMsg, toggleShowHideMsg }: Props) {
	const { t } = useTranslation();

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<section className="relative flex flex-row items-center w-full h-12 gap-5 mt-10">
			<button
				type="button"
				onClick={toggleShowHideMsg}
				className={`${showHideMsg ? "hidden" : ""} ${globalContext.font} h-fit w-fit rounded-md border-2 border-amber-800 bg-amber-800 px-6 py-2 text-base font-medium tracking-wide text-gray-100 transition-all duration-500 dark:border-violet-400 dark:bg-violet-400 dark:text-gray-700 xl:text-lg xl:hover:bg-amber-800/90 xl:active:translate-y-1 xl:dark:hover:bg-violet-400/90`}
			>
				{t("profile.readmore-btn")}
			</button>
			<NavLink
				to="/links"
				draggable="false"
				className={`${globalContext.font} px-6 py-2 text-base font-medium tracking-wide text-gray-500 duration-500 border-2 rounded-md transion-colors h-fit w-fit border-amber-800/40 bg-gray-100/70 dark:border-purple-400/40 dark:bg-gray-700/70 dark:text-gray-300 xl:text-lg xl:hover:bg-gray-100/90 xl:active:translate-y-1 xl:dark:hover:bg-gray-700/90`}
			>
				{t("profile.contact-btn")}
			</NavLink>
			<SocialList />
		</section>
	);
}

export default InfoCardFooter;
