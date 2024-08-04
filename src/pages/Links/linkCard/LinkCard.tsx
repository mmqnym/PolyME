export interface LinkCardProps {
	Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	HoverLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	title: string;
	handle: string;
	url: `https://${string}` | `http://${string}` | `mailto:${string}` | "#";
}

function LinkCard({ Logo, HoverLogo, title, handle, url }: LinkCardProps) {
	return (
		<a
			target="_blank"
			href={url}
			className="group flex h-14 w-64 flex-row items-center justify-center rounded-md border-2 border-gray-500 tracking-wider shadow-sm shadow-gray-700/50 transition-all duration-500 dark:shadow-white/50 sm:h-24 sm:w-72 xl:flex xl:h-64 xl:w-60 xl:flex-col xl:hover:-translate-y-4 xl:hover:border-amber-900 xl:hover:bg-white/20 xl:hover:shadow-lg xl:hover:shadow-amber-900/40 xl:dark:hover:border-purple-400 xl:dark:hover:shadow-purple-400/40"
			rel="noreferrer"
		>
			<Logo className="mt-4 hidden h-24 w-2/5 fill-gray-700 transition-opacity duration-700 dark:fill-gray-300 xl:block xl:group-hover:mt-0 xl:group-hover:h-0 xl:group-hover:w-0 xl:group-hover:opacity-0" />
			<HoverLogo className="mx-1 h-8 w-2/5 fill-gray-700 transition-opacity duration-700 dark:fill-gray-300 sm:mx-2 sm:h-14 sm:w-2/5 xl:h-0 xl:w-0 xl:animate-lower-bounce xl:fill-amber-900 xl:opacity-0 xl:group-hover:top-0 xl:group-hover:mt-4 xl:group-hover:h-24 xl:group-hover:w-2/5 xl:group-hover:opacity-100 xl:dark:fill-purple-400" />
			<span className="mt-6 hidden font-ubuntu text-gray-700 dark:text-gray-300 xl:inline">
				{title}
			</span>
			<div className="h-full w-0 border-r-2 border-gray-500 transition-colors duration-300 xl:mt-10 xl:h-0 xl:w-full xl:border-t-2 xl:group-hover:border-amber-900 xl:group-hover:bg-white/20 xl:dark:group-hover:border-purple-400" />
			<div className="flex h-10 w-full flex-col items-center justify-center text-lg text-gray-700 dark:text-gray-300 xl:text-sm">
				{handle}
			</div>
		</a>
	);
}

export default LinkCard;
