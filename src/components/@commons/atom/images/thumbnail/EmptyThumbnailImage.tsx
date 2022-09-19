import { GetPostsItem } from "@til-log.lab/tilog-api";

import TailwindSize from "@Components/interface/fontSize";

export interface EmptyThumbnailImageProps {
  title: GetPostsItem["title"];
  backgroundColor: string;
  getBrightness: string;
  fontSize?: TailwindSize;
}

const EmptyThumbnailImage = ({
  title,
  backgroundColor,
  getBrightness,
  fontSize = "base",
}: EmptyThumbnailImageProps) => {
  return (
    <div
      style={{ backgroundColor }}
      className="flex items-center justify-center w-full h-full aspect-[2/1]"
    >
      <span
        className={`px-10 font-semibold text-center md:text-${fontSize}`}
        style={{
          color: getBrightness,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default EmptyThumbnailImage;
