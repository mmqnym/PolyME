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
			className="flex flex-row items-center justify-center w-64 tracking-wider transition-all duration-500 border-2 border-gray-500 rounded-md shadow-sm group h-14 shadow-gray-700/50 dark:shadow-white/50 sm:h-24 sm:w-72 xl:flex xl:h-[20vh] xl:w-[10vw] xl:flex-col xl:hover:-translate-y-4 xl:hover:border-amber-900 xl:hover:bg-white/20 xl:hover:shadow-lg xl:hover:shadow-amber-900/40 xl:dark:hover:border-purple-400 xl:dark:hover:shadow-purple-400/40"
			rel="noreferrer"
		>
			<Logo className="hidden w-2/5 h-24 mt-4 transition-opacity duration-700 fill-gray-700 dark:fill-gray-300 xl:block xl:group-hover:mt-0 xl:group-hover:h-0 xl:group-hover:w-0 xl:group-hover:opacity-0" />
			<HoverLogo className="w-2/5 h-8 mx-1 transition-opacity duration-700 fill-gray-700 dark:fill-gray-300 sm:mx-2 sm:h-14 sm:w-2/5 xl:h-0 xl:w-0 xl:animate-lower-bounce xl:fill-amber-900 xl:opacity-0 xl:group-hover:top-0 xl:group-hover:mt-4 xl:group-hover:h-24 xl:group-hover:w-2/5 xl:group-hover:opacity-100 xl:dark:fill-purple-400" />
			<span className="hidden mt-6 text-gray-700 font-ubuntu dark:text-gray-300 xl:inline">
				{title}
			</span>
			<div className="w-0 h-full transition-colors duration-300 border-r-2 border-gray-500 xl:mt-10 xl:h-0 xl:w-full xl:border-t-2 xl:group-hover:border-amber-900 xl:group-hover:bg-white/20 xl:dark:group-hover:border-purple-400" />
			<div className="flex flex-col items-center font-ubuntu justify-center w-full h-10 xl:h-12 2k:h-10 xl:py-0.5 2k:py-0 2k:mt-1 text-lg 2k:text-xl text-gray-700 dark:text-gray-300 xl:text-sm">
				{handle}
			</div>
		</a>
	);
}

export default LinkCard;
