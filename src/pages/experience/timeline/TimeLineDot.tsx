interface Props {
  isFirst: boolean;
  isCurrent?: boolean;
}

function TimeLineDot({ isFirst, isCurrent }: Props) {
  return (
    <>
      <div
        className={`absolute left-2.5 top-2 flex h-3 w-3 items-center justify-center rounded-full transition-colors duration-500 sm:left-2 sm:top-3 sm:h-4 sm:w-4 ${isCurrent ? (isFirst ? "bg-amber-900 dark:bg-violet-600" : "bg-amber-700 dark:bg-purple-400") : "bg-gray-400"}`}
      ></div>
      <div
        className={`absolute left-2.5 top-2 flex h-3 w-3 items-center justify-center rounded-full transition-colors duration-500 sm:left-2 sm:top-3 sm:h-4 sm:w-4 ${isCurrent ? (isFirst ? "animate-ripple block bg-amber-900 dark:bg-violet-600" : "animate-ripple block bg-amber-700 dark:bg-purple-400") : "hidden"}`}
      ></div>
    </>
  );
}

export default TimeLineDot;
