import SuspenseImage from "../../../general/components/lazyLoader/SuspenseImage";

interface Props {
	logo: string;
	link: string;
	className?: string;
}

function SocialLink({ logo, link, className }: Props) {
	return (
		<button
			type="button"
			className={`h-6 w-6 transition-all duration-300 active:animate-ripple sm:relative sm:left-0 sm:h-6 sm:w-6 xl:hover:-left-0.5 xl:hover:h-8 xl:hover:w-8 ${className}`}
		>
			<a href={link} target="_blank" rel="noreferrer noopener">
				<SuspenseImage src={logo} className="" />
			</a>
		</button>
	);
}

export default SocialLink;
