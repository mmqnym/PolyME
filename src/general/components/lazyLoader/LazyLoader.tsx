import { Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
	fallback: React.ReactNode;
	minDelay?: number;
	children: React.ReactNode;
}

function LazyLoader({ fallback, minDelay = 500, children }: Props) {
	const [isDelayPassed, setIsDelayPassed] = useState(false);
	const location = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: Make sure to apply transition effects every time the route is switched
	useEffect(() => {
		setIsDelayPassed(false);

		const timer = setTimeout(() => {
			setIsDelayPassed(true);
		}, minDelay);

		return () => clearTimeout(timer);
	}, [minDelay, location]);

	return (
		<Suspense fallback={fallback}>
			{isDelayPassed ? children : fallback}
		</Suspense>
	);
}

export default LazyLoader;
