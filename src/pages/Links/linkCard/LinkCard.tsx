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
      className="group flex h-64 w-60 flex-col items-center justify-center rounded-md border-2 border-gray-500 tracking-wider transition-all duration-500 hover:-translate-y-4 hover:border-amber-900 hover:bg-white/20 hover:shadow-lg hover:shadow-amber-900/40 dark:hover:border-purple-400 dark:hover:shadow-purple-400/40"
    >
      <Logo className="mt-4 h-24 w-2/5 fill-gray-700 transition-opacity duration-700 group-hover:mt-0 group-hover:h-0 group-hover:w-0 group-hover:opacity-0 dark:fill-gray-300" />
      <HoverLogo className="h-0 w-0 fill-amber-900 opacity-0 transition-opacity duration-700 group-hover:top-0 group-hover:mt-4 group-hover:h-24 group-hover:w-2/5 group-hover:opacity-100 dark:fill-purple-400" />
      <span className="font-ubuntu mt-6 text-gray-700 dark:text-gray-300">{title}</span>
      <div className="mt-10 w-full border-t-2 border-gray-500 transition-colors duration-300 group-hover:border-amber-900 group-hover:bg-white/20 dark:group-hover:border-purple-400"></div>
      <div className="flex h-10 w-full flex-col items-center justify-center text-sm text-gray-700 dark:text-gray-300">
        {handle}
      </div>
    </a>
  );
}

export default LinkCard;
