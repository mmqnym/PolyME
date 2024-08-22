import { useTranslation } from "react-i18next";
import StackLanguages from "./StackLanguages";
import StackSkills from "./StackSkills";
import { GlobalContext } from "../../../context/globalContext";
import { useContext } from "react";

function Stack() {
	const { t } = useTranslation();

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<div className="relative w-full h-40 bg-orange-100 border 2k:h-52 border-orange-900/30 dark:border-gray-700 rounded-2xl dark:bg-gray-700/30">
			<p className="px-[1%] py-[0.1%] w-fit mt-[2%] ml-[2%] sm:mt-[0.8%] sm:ml-[0.8%] text-[1.8vh] rounded-xl dark:text-gray-200 tracking-wide text-gray-700 bg-orange-200 select-none dark:bg-purple-400/50">
				{t("portfolio.stack")}
			</p>
			<div
				className={`${globalContext.font} flex flex-col py-5 w-full gap-5 overflow-auto text-lg h-3/5 scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-amber-900/50 dark:scrollbar-thumb-purple-400/30`}
			>
				<StackLanguages />
				<StackSkills />
			</div>
		</div>
	);
}

export default Stack;
