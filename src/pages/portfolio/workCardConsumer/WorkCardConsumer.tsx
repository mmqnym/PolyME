import { useEffect, useState } from "react";
import {
	WorkCardContext,
	type WorkCardProps,
} from "../../../context/workCardContext";

import { workCardDataMap } from "./workCardDataMap";

function WorkCardConsumer({ children }: { children: React.ReactNode }) {
	// change card context value by query params

	const [workCardData, setWorkCardData] = useState<WorkCardProps>(
		workCardDataMap.PolyME,
	);
	const [currentChosenCard, setCurrentChosenCard] = useState<string>("PolyME");
	const [isSwitchingCard, setIsSwitchingCard] = useState<boolean>(false);

	// init route and set corresponding card
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const projectTitle = urlParams.get("project");

		if (projectTitle && workCardDataMap[projectTitle]) {
			setCurrentChosenCard(projectTitle);
		} else {
			const newUrl = new URL(window.location.href);
			newUrl.searchParams.set("project", "PolyME");
			window.history.replaceState({}, "", newUrl);

			setCurrentChosenCard("PolyME");
		}
	}, []);

	// change card context value and change query params
	useEffect(() => {
		if (workCardDataMap[currentChosenCard]) {
			setIsSwitchingCard(true);

			setTimeout(() => {
				const newUrl = new URL(window.location.href);
				newUrl.searchParams.set("project", currentChosenCard);
				window.history.replaceState({}, "", newUrl);
				setWorkCardData(workCardDataMap[currentChosenCard]);
				setIsSwitchingCard(false);
			}, 300);
		} else {
			throw new Error(`"${currentChosenCard}" is not a valid card name`);
		}
	}, [currentChosenCard]);

	const WorkCardContextValue = {
		currentChosenCard,
		setCurrentChosenCard,
		workCardData,
		setWorkCardData,
		isSwitchingCard,
		setIsSwitchingCard,
	};

	return (
		<WorkCardContext.Provider value={WorkCardContextValue}>
			{children}
		</WorkCardContext.Provider>
	);
}

export default WorkCardConsumer;
