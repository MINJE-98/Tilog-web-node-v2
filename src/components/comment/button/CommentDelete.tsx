import { IoMdClose } from "react-icons/io";

import { useDeleteCommentMutation } from "@Mutations/comments/useCommentMutation";

import { Comments } from "@Api/interface/model";

interface CommentDeleteProps {
  commentId: Comments["id"];
  postId: Comments["postsID"];
  replyTo: Comments["replyTo"] | null;
}
const CommentDelete = ({ commentId, postId, replyTo }: CommentDeleteProps) => {
  const { mutate } = useDeleteCommentMutation();
  const handleDeleteComment = () => {
    mutate({
      commentId,
      postId,
      replyTo,
    });
  };
  return (
    <button type="button" onClick={handleDeleteComment}>
      <IoMdClose className="text-neutral-400 hover:text-neutral-500" />
    </button>
  );
};
export default CommentDelete;
