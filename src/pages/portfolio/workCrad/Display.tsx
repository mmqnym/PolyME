import { Carousel } from "flowbite-react";
import { useContext } from "react";
import { WorkCardContext } from "../../../context/workCardContext";

function Display() {
	const workCardContext = useContext(WorkCardContext);

	if (!workCardContext) {
		throw new Error(
			"workCardContext must be used within a WorkCardContextProvider",
		);
	}

	const carouselTheme = {
		root: {
			base: "relative h-full w-full group",
			leftControl:
				"pl-2 absolute left-0 top-0 flex h-full items-center justify-center",
			rightControl:
				"pr-2 absolute right-0 top-0 flex h-full items-center justify-center",
		},
		indicators: {
			active: {
				off: "bg-gray-500/50 hover:bg-white/50 dark:bg-gray-500/50 dark:hover:bg-gray-800",
				on: "bg-amber-900 dark:bg-purple-300 w-10",
			},
			base: "h-1.5 w-6 rounded-full transition-all duration-300",
			wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-2",
		},
		item: {
			base: "absolute inset-0 flex items-center justify-center",
			wrapper: {
				off: "w-full flex-shrink-0 transform snap-center",
				on: "w-full flex-shrink-0 transform snap-center",
			},
		},
		control: {
			base: "opacity-0 rounded-full group-hover:opacity-100 inline-flex h-16 w-16 items-center justify-center transition-all duration-300 hover:bg-gray-900/50 hover:scale-90 dark:hover:bg-gray-200/50 dark:active:bg-gray-300/70",
			icon: "h-4/5 w-4/5 text-gray-400 dark:text-gray-400 dark:hover:text-gray-700 hover:text-gray-200",
		},
		scrollContainer: {
			base: "flex h-full w-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-2xl",
			snap: "snap-x",
		},
	};

	return (
		<div className="w-full xl:h-full h-[600px] xl:col-span-4 xl:col-start-1 xl:row-start-2 bg-orange-100 border border-orange-900/30 dark:border-gray-700 row-span-11 rounded-2xl dark:bg-gray-700/30">
			<Carousel
				slide={true}
				slideInterval={5000}
				pauseOnHover={true}
				draggable={true}
				theme={carouselTheme}
			>
				{workCardContext.workCardData.display.imgs.map((item, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="flex items-center justify-center w-full h-full"
					>
						<img
							src={item.src}
							alt={item.alt}
							className={`h-auto max-h-full w-[99.9%] max-w-full transition-all duration-100 ${workCardContext.isSwitchingCard ? "animate-pulse" : ""} object-contain`}
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default Display;
