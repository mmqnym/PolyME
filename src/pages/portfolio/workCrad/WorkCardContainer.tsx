function WorkCardContainer({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col w-4/5 min-h-screen gap-6 transition-colors duration-500 cursor-default xl:min-h-fit xl:h-[calc(100vh-14rem)] xl:grid xl:grid-cols-6 xl:grid-rows-12">
			{children}
		</div>
	);
}

export default WorkCardContainer;
