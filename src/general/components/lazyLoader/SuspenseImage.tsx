import { imageLoader } from "./lazyImageLoader";

interface SuspenseImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
}

function SuspenseImage({ src, ...props }: SuspenseImageProps) {
	imageLoader.loadImage(src);

	// biome-ignore lint/a11y/useAltText: <explanation>
	return <img src={src} alt={`${src}-lazy`} draggable="false" {...props} />;
}

export default SuspenseImage;
