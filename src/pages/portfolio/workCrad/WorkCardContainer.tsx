function WorkCardContainer({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid w-4/5 grid-cols-6 gap-6 transition-colors duration-500 cursor-default h-4/5 grid-rows-12">
			{children}
		</div>
	);
}

export default WorkCardContainer;
