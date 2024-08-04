interface Props {
	isFirst: boolean;
	isCurrent?: boolean;
}

function TimeLineLine({ isFirst, isCurrent }: Props) {
	return (
		<span
			className={`absolute left-4 top-4 -ml-px h-full w-0.5 transition-colors duration-500 ${isCurrent ? (isFirst ? "bg-gradient-to-t from-amber-700 via-amber-800 to-amber-900 dark:from-purple-400 dark:via-violet-500 dark:to-violet-600" : "bg-amber-700 dark:bg-purple-400") : "bg-gray-400"}`}
			aria-hidden="true"
		/>
	);
}

export default TimeLineLine;
