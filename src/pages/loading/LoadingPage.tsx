import { useEffect, useState } from "react";
import logo from "../../../src/general/assets/logo.webp";

interface Props {
	needTime: number;
}

function LoadingPage({ needTime }: Props) {
	const [progress, setProgress] = useState(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const intervalTime = 100 / needTime;

		const timer = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress >= 100) {
					clearInterval(timer);
					return 100;
				}
				return prevProgress + 1;
			});
		}, intervalTime);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-orange-50 dark:bg-black">
			<div className="flex w-1/3 flex-col items-center justify-center sm:w-1/4 xl:w-[10%]">
				<img
					src={logo}
					alt="logo"
					className="w-[80%]"
					style={{ opacity: progress / 100 }}
				/>

				<div className="w-full h-2 mt-6 rounded-full bg-gray-700/30">
					<div
						className="h-full transition-all duration-300 ease-out rounded-full bg-gradient-to-r from-orange-500 via-amber-700 to-amber-900 dark:from-purple-300 dark:via-violet-500 dark:to-violet-600"
						style={{ width: `${progress}%` }}
					/>
				</div>

				<p className="w-full mt-5 text-3xl tracking-wide text-center text-gray-700 font-ubuntu dark:text-gray-300">
					Loading...
				</p>
			</div>
		</div>
	);
}

export default LoadingPage;
