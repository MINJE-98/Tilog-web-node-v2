import CommentInput from "@Components/comment/input/CommentInput";
import RootComment from "@Components/comment/render/RootComment";
import { INPUT } from "@Constants/button";
import { COMMENT_PLACEHOLDER } from "@Constants/text/placeholder";
import useGetParentComment from "@Queries/comments/useGetParentComment";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface CommentProps {
  postId: GetPostDetailResponseDto["id"];
}

const Comment = ({ postId }: CommentProps) => {
  const commentList = useGetParentComment(postId);
  if (!commentList.data) return <>댓글이 없어요..</>;

  return (
    <div>
      <hr />
      {commentList.data.data.list.map((comment) => (
        <RootComment key={comment.id} comment={comment} />
      ))}
      <CommentInput
        postId={postId}
        replyTo={null}
        placeholder={COMMENT_PLACEHOLDER}
        buttonText={INPUT}
      />
    </div>
  );
};
export default Comment;
