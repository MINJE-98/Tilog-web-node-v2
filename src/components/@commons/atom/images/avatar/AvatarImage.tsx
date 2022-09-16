import Image from "next/image";

import { Users } from "@Api/interface/model";

interface AvatarImageProps {
  avatar: Users["proFileImageURL"];
}

const AvatarImage = ({ avatar }: AvatarImageProps) => {
  return (
    <div className="relative w-full h-full">
      <Image className="rounded-full" layout="fill" alt="avatar" src={avatar} />
    </div>
  );
};
export default AvatarImage;
