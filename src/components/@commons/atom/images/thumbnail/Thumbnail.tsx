import Image from "next/image";

import { Posts } from "@Api/interface/model";

const ThumbNail = ({
  thumbnailUrl,
}: {
  thumbnailUrl: Posts["thumbNailURL"];
}) => (
  <div className="relative aspect-[2/1] w-full h-full">
    <Image layout="fill" alt="thumbnail" src={thumbnailUrl} />
  </div>
);
export default ThumbNail;
