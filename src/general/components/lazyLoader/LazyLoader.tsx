import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface Props {
	fallback: React.ReactNode;
	minDelay?: number;
	children: React.ReactNode;
}

function LazyLoader({ fallback, children, minDelay = 600 }: Props) {
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);
	const visitedRoutes = useRef(new Set<string>());

	useEffect(() => {
		const currentPath = location.pathname;

		if (!visitedRoutes.current.has(currentPath)) {
			setIsLoading(true);
			visitedRoutes.current.add(currentPath);

			const timer = setTimeout(() => {
				setIsLoading(false);
			}, minDelay);

			return () => clearTimeout(timer);
		}

		setIsLoading(false);
	}, [location, minDelay]);

	return (
		<React.Suspense fallback={fallback}>
			{isLoading ? fallback : children}
		</React.Suspense>
	);
}

export default LazyLoader;
