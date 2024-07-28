import { Carousel } from "flowbite-react";
import quickcerts1 from "../../../general/assets/works/content/quickcerts/quickerts-1.webp";
import quickcerts2 from "../../../general/assets/works/content/quickcerts/quickerts-2.webp";

function Display() {
  const images = [quickcerts1, quickcerts2];

  const carouselTheme = {
    root: {
      base: "relative h-full w-full group",
      leftControl: "pl-2 absolute left-0 top-0 flex h-full items-center justify-center",
      rightControl: "pr-2 absolute right-0 top-0 flex h-full items-center justify-center",
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-500/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-purple-300 w-10",
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
      base: "opacity-0 rounded-full group-hover:opacity-100 inline-flex h-16 w-16 items-center justify-center transition-all duration-300 hover:bg-white/50 hover:scale-90 dark:hover:bg-gray-300/50 dark:active:bg-gray-300/70",
      icon: "h-4/5 w-4/5 text-gray-500 dark:text-gray-500/70 dark:hover:text-gray-900",
    },
    scrollContainer: {
      base: "flex h-full w-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-2xl",
      snap: "snap-x",
    },
  };

  return (
    <div className="col-span-3 col-start-1 row-span-8 row-start-2 h-full w-full rounded-2xl border border-gray-700 bg-gray-700/30">
      <Carousel slideInterval={5000} pauseOnHover={true} draggable={false} theme={carouselTheme}>
        {images.map((src, index) => (
          <div key={index} className="flex h-full w-full items-center justify-center">
            <img
              src={src}
              alt={`display-${index + 1}`}
              className="h-auto max-h-full w-[99.9%] max-w-full object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Display;
