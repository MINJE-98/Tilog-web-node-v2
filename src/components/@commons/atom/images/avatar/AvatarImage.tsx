import Image from "next/image";

import { Users } from "@Api/interface/model";

interface AvatarImageProps {
  avatar: Users["proFileImageURL"];
}

const AvatarImage = ({ avatar }: AvatarImageProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-full">
      <Image
        placeholder="blur"
        layout="fill"
        alt="avatar"
        src={avatar}
        blurDataURL={avatar}
      />
    </div>
  );
};
export default AvatarImage;
