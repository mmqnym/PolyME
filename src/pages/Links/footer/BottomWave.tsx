function BottomWave() {
	return (
		<div className="absolute bottom-0 left-0 w-full h-6 overflow-hidden">
			<div className="absolute bottom-0 h-full w-[200%] animate-wave">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					className="float-left w-1/2 h-full"
					viewBox="0 0 1200 100"
					preserveAspectRatio="none"
				>
					<path
						d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,100 L0,100 Z"
						className="transition-all duration-500 fill-amber-900/15 dark:fill-purple-300/15"
					/>
					<path
						d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,100 L0,100 Z"
						className="transition-all duration-500 fill-amber-900/10 dark:fill-purple-400/10"
					/>
					<path
						d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,100 L0,100 Z"
						className="transition-all duration-500 fill-amber-900/5 dark:fill-purple-400/5"
					/>
				</svg>
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					className="float-left w-1/2 h-full"
					viewBox="0 0 1200 100"
					preserveAspectRatio="none"
				>
					<path
						d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,100 L0,100 Z"
						className="transition-all duration-500 fill-amber-900/15 dark:fill-purple-300/15"
					/>
					<path
						d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,100 L0,100 Z"
						className="transition-all duration-500 fill-amber-900/10 dark:fill-purple-400/10"
					/>
					<path
						d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,100 L0,100 Z"
						className="transition-all duration-500 fill-amber-900/5 dark:fill-purple-400/5"
					/>
				</svg>
			</div>
		</div>
	);
}

export default BottomWave;
