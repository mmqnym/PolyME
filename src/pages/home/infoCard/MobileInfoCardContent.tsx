import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../../context/globalContext";

function MobileInfoCardContent() {
	const { t } = useTranslation();

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<div className={`${globalContext.font} flex flex-col w-3/4 mt-10`}>
			<p className="mt-5 text-lg leading-8 text-gray-600 transition-colors duration-500 dark:text-gray-300">
				{t("profile.description-1")}
			</p>
			<p className="mt-5 text-lg leading-8 text-gray-600 transition-all duration-700 opacity-100 h-fit w-fit dark:text-gray-300">
				{t("profile.description-2")}
			</p>
			<p className="mt-5 text-lg leading-8 text-gray-600 transition-all duration-700 opacity-100 h-fit w-fit dark:text-gray-300">
				{t("profile.description-3")}
			</p>
			<div className="relative flex flex-row items-center w-full h-12 gap-5 mt-10">
				<NavLink
					to="/links"
					draggable="false"
					className="px-6 py-2 text-base font-medium tracking-wide text-gray-500 duration-500 border-2 rounded-md transion-colors w-fit border-amber-800/40 bg-gray-100/70 dark:border-purple-400/40 dark:bg-gray-700/70 dark:text-gray-300 xl:text-lg xl:hover:bg-gray-100/90 xl:active:translate-y-1 xl:dark:hover:bg-gray-700/90"
				>
					{t("profile.contact-btn")}
				</NavLink>
			</div>
		</div>
	);
}

export default MobileInfoCardContent;
