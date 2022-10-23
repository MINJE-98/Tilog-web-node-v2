import Image from "next/image";

import { Users } from "@Api/interface/model";

interface AvatarImageProps {
  size: number;
  avatar: Users["proFileImageURL"];
}

const AvatarImage = ({ size, avatar }: AvatarImageProps) => {
  return (
    <Image
      placeholder="blur"
      width={size}
      height={size}
      alt="avatar"
      src={avatar}
      blurDataURL={avatar}
      quality={10}
    />
  );
};
export default AvatarImage;
