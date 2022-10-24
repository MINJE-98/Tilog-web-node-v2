import Paragraph from "@Commons/atom/paragraph";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentContentsProps {
  comment: GetCommentsItem;
}

const CommentContents = ({ comment }: CommentContentsProps) => {
  if (comment.content === null)
    return <Paragraph fontSize="medium">삭제된 댓글입니다.</Paragraph>;
  return <span>{comment.content}</span>;
};

export default CommentContents;
