import { useContext } from "react";
import NameSwitcher from "../nameSwitcher/NameSwitcher";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";

interface Props {
	showHideMsg: boolean;
}

function InfoCardContent({ showHideMsg }: Props) {
	const { t } = useTranslation();

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<>
			<div className="flex flex-row items-center gap-2 xl:gap-4">
				<p
					className={`${globalContext.font} text-2xl text-gray-600 transition-colors duration-500 dark:text-gray-300 xl:text-4xl`}
				>
					{t("profile.greeting")}
				</p>
				<NameSwitcher />
			</div>
			<p
				className={`${globalContext.font} mt-4 text-base tracking-wide transition-colors duration-500 text-amber-900/70 dark:text-purple-400/70 sm:text-2xl xl:text-3xl`}
			>
				{t("profile.job-title")} |
			</p>
			<p
				className={`${globalContext.font} mt-5 text-lg leading-8 text-gray-600 transition-colors duration-500 dark:text-gray-300`}
			>
				{t("profile.description-1")}
			</p>
			<p
				className={`${showHideMsg ? "mt-5 h-fit w-fit opacity-100" : "absolute z-[-1] mt-0 opacity-0"} ${globalContext.font} text-lg leading-8 text-gray-600 transition-all duration-500 dark:text-gray-300`}
			>
				{t("profile.description-2")}
			</p>
			<p
				className={`${showHideMsg ? "mt-5 h-fit w-fit opacity-100" : "absolute z-[-1] mt-0 opacity-0"} ${globalContext.font} text-lg leading-8 text-gray-600 transition-all duration-700 dark:text-gray-300`}
			>
				{t("profile.description-3")}
			</p>
		</>
	);
}

export default InfoCardContent;
