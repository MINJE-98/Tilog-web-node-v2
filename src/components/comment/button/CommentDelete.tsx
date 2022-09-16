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
      <IoMdClose className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" />
    </button>
  );
};
export default CommentDelete;
