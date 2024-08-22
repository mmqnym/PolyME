import { useTranslation } from "react-i18next";
import Description from "./Description.tsx";
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
		<div className="flex flex-col w-full h-40 overflow-y-auto bg-orange-100 border 2k:h-52 border-orange-900/30 dark:border-gray-700 rounded-2xl dark:bg-gray-700/30">
			<p className="px-[1%] py-[0.1%] w-fit mt-[2%] ml-[2%] sm:mt-[0.8%] sm:ml-[0.8%] text-[1.8vh] rounded-xl dark:text-gray-200 tracking-wide text-gray-700 bg-orange-200 select-none dark:bg-purple-400/50">
				{t("portfolio.about")}
			</p>
			<Description />
			{/* <div className="h-0.5 w-full border-t border-orange-900/30 dark:border-gray-700" /> */}
			<Links />
		</div>
	);
}

export default About;
