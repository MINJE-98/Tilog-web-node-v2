import Image from "next/image";

import { Posts } from "@Api/interface/model";

const ThumbnailImage = ({
  thumbnailUrl,
}: {
  thumbnailUrl: Posts["thumbNailURL"];
}) => (
  <div className="relative aspect-[2/1] w-full h-full">
    <Image
      placeholder="blur"
      layout="fill"
      alt="thumbnail"
      src={thumbnailUrl}
    />
  </div>
);
export default ThumbnailImage;
