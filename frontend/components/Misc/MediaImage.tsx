import Image, { ImageProps } from "next/image";
import { FC } from "react";

interface MediaImageProps extends ImageProps {
    src: string;
}

const MImage: FC<MediaImageProps> = ({ src, ...props }) => {
    const isAbsoluteUrl = /^https?:\/\//i.test(src);
    const mediaSrc = isAbsoluteUrl
        ? src
        : `${process.env.NEXT_PUBLIC_BACKEND_URL}${src}`;

    return <Image {...props} src={mediaSrc} />;
};

export default MImage;
