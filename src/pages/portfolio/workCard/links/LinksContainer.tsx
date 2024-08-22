function LinksContainer({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-row items-center w-full h-full gap-3 px-5 py-1 overflow-x-auto overflow-y-hidden border-t border-orange-900/30 dark:border-gray-700">
			{children}
		</section>
	);
}

export default LinksContainer;
