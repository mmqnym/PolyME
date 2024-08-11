import { useTranslation } from "react-i18next";
import Description from "./Description";
import Links from "./links/Links";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";

function About() {
	const { t } = useTranslation();

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<div className="flex flex-col xl:grid h-[200px] w-full xl:h-full xl:col-span-2 xl:col-start-5 xl:row-span-3 xl:row-start-2 bg-orange-100 border border-orange-900/30 dark:border-gray-700 rounded-2xl dark:bg-gray-700/30">
			<p
				className={`${globalContext.font} py-0.5 px-3 2k:px-4 2k:py-1 mt-2 ml-2 text-base tracking-wide text-gray-700 bg-orange-200 select-none 2k:text-xl dark:text-gray-200 h-fit w-fit rounded-xl dark:bg-purple-400/50`}
			>
				{t("portfolio.about")}
			</p>
			<Description />
			<div className="h-0.5 w-full border-t border-orange-900/30 dark:border-gray-700" />
			<Links />
		</div>
	);
}

export default About;
