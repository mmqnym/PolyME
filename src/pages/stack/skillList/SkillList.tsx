import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../context/globalContext";
import { useContext } from "react";

interface Props {
	category: string;
	child: React.ReactNode;
}

function SkillList({ category, child }: Props) {
	const { t } = useTranslation();

	const globalContext = useContext(GlobalContext);

	if (!globalContext) {
		throw new Error("GlobalContext must be used within a GlobalProvider");
	}

	return (
		<div className="pb-6 mt-12 cursor-default select-none group sm:pb-12">
			<h2
				className={`${globalContext.font} text-2xl tracking-wide text-gray-700 transition-colors duration-500 dark:text-gray-300 sm:text-4xl xl:group-hover:text-amber-900 xl:dark:group-hover:text-purple-400`}
			>
				{t(`stack.${category}`)}
			</h2>
			<div className="mt-2 h-0.5 w-full rounded-full border-b border-gray-300 transition-colors duration-300 dark:border-gray-700" />
			<div className="flex flex-row flex-wrap gap-3 sm:gap-5">{child}</div>
		</div>
	);
}

export default SkillList;
