import { AiOutlineComment } from "react-icons/ai";

import Paragraph from "@Commons/atom/paragraph";

interface CommentCounterProps {
  count: number;
}

const CommentCounter = ({ count }: CommentCounterProps) => {
  return (
    <div tw="flex items-center space-x-1">
      <AiOutlineComment tw="w-4 h-4 text-neutral-500 " />
      <Paragraph>{count}</Paragraph>
    </div>
  );
};

export default CommentCounter;
