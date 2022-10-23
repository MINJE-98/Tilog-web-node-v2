import Image from "next/image";

import { Posts } from "@Api/interface/model";

const ThumbnailImage = ({
  thumbnailUrl,
}: {
  thumbnailUrl: Posts["thumbNailURL"];
}) => (
  <Image
    placeholder="blur"
    height={720}
    width={1260}
    alt="thumbnail"
    src={thumbnailUrl}
    blurDataURL={thumbnailUrl}
    quality={60}
  />
);
export default ThumbnailImage;
