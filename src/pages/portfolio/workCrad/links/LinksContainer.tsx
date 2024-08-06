function LinksContainer({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-row items-center w-full gap-3 px-5 py-0.5 h-fit">
			{children}
		</section>
	);
}

export default LinksContainer;
