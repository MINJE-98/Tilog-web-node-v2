import useIsOwner from "@Hooks/useIsOwner";
import CommentDelete from "@Models/comment/button/CommentDelete";
import CommentRestore from "@Models/comment/button/CommentRestore";
import CommentUpdate from "@Models/comment/button/CommentUpdate";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentToolsProps {
  comment: GetCommentsItem;
  handleUpdate: () => void;
}

const CommentTools = ({ comment, handleUpdate }: CommentToolsProps) => {
  const isOwner = useIsOwner(comment.user.userId);
  if (!isOwner) return null;
  if (comment.content === null) return <CommentRestore />;
  return (
    <div className="space-x-2">
      <CommentDelete
        commentId={comment.id}
        postId={comment.postId}
        replyTo={comment.replyTo}
      />
      <CommentUpdate handleUpdate={handleUpdate} />
    </div>
  );
};

export default CommentTools;
