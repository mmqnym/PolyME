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
		<div className="w-full h-64 bg-orange-100 border xl:h-full xl:col-span-2 xl:col-start-5 xl:row-span-3 xl:row-start-5 border-orange-900/30 dark:border-gray-700 rounded-2xl dark:bg-gray-700/30">
			<p
				className={`${globalContext.font} py-0.5 px-3 2k:px-4 2k:py-1 mt-2 ml-2 text-base 2k:text-xl tracking-wide text-gray-700 bg-orange-200 select-none dark:text-gray-200 w-fit rounded-xl dark:bg-purple-400/50`}
			>
				{t("portfolio.stack")}
			</p>
			<div
				className={`${globalContext.font} flex flex-col w-full gap-6 mt-4 overflow-auto text-lg h-3/5 scrollbar-thin scrollbar-track-transparent scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-amber-900/50 dark:scrollbar-thumb-purple-400/30`}
			>
				<StackLanguages />
				<StackSkills />
			</div>
		</div>
	);
}

export default Stack;
