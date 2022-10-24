import { AiFillHeart } from "react-icons/ai";
import tw from "twin.macro";

import Paragraph from "@Commons/atom/paragraph";

interface LikeCounterProps {
  count: number;
  active?: boolean;
}

const LikeCounter = ({ count, active = false }: LikeCounterProps) => {
  return (
    <div tw="flex items-center space-x-1">
      <AiFillHeart
        css={[tw`w-4 h-4`, active ? tw`text-Nestjs` : tw`text-neutral-500`]}
      />
      <Paragraph fontSize="small">{count}</Paragraph>
    </div>
  );
};

export default LikeCounter;
