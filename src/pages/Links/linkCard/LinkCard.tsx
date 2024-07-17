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
      className="group flex h-14 w-64 flex-row items-center justify-center rounded-md border-2 border-gray-500 tracking-wider shadow-sm shadow-gray-700/50 transition-all duration-500 hover:-translate-y-4 hover:border-amber-900 hover:bg-white/20 dark:shadow-white/50 sm:h-24 sm:w-72 xl:flex xl:h-64 xl:w-60 xl:flex-col xl:hover:shadow-lg xl:hover:shadow-amber-900/40 xl:dark:hover:border-purple-400 xl:dark:hover:shadow-purple-400/40"
    >
      <Logo className="mt-4 hidden h-24 w-2/5 fill-gray-700 transition-opacity duration-700 group-hover:mt-0 group-hover:h-0 group-hover:w-0 group-hover:opacity-0 dark:fill-gray-300 xl:block" />
      <HoverLogo className="xl:animate-lower-bounce mx-1 h-8 w-2/5 fill-gray-700 transition-opacity duration-700 group-hover:top-0 group-hover:mt-4 group-hover:h-24 group-hover:w-2/5 group-hover:opacity-100 dark:fill-gray-300 sm:mx-2 sm:h-14 sm:w-2/5 xl:h-0 xl:w-0 xl:fill-amber-900 xl:opacity-0 xl:dark:fill-purple-400" />
      <span className="font-ubuntu mt-6 hidden text-gray-700 dark:text-gray-300 xl:inline">{title}</span>
      <div className="h-full w-0 border-r-2 border-gray-500 transition-colors duration-300 group-hover:border-amber-900 group-hover:bg-white/20 dark:group-hover:border-purple-400 xl:mt-10 xl:h-0 xl:w-full xl:border-t-2"></div>
      <div className="flex h-10 w-full flex-col items-center justify-center text-lg text-gray-700 dark:text-gray-300 xl:text-sm">
        {handle}
      </div>
    </a>
  );
}

export default LinkCard;
