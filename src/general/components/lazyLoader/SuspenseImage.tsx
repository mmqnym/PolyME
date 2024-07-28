import { imageLoader } from "./lazyImageLoader";

interface SuspenseImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

function SuspenseImage({ src, ...props }: SuspenseImageProps) {
  imageLoader.loadImage(src);
  return <img src={src} draggable="false" {...props} />;
}

export default SuspenseImage;
