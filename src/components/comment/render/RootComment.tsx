import { useState } from "react";

import CommentInput from "@Components/comment/input/CommentInput";
import CommentRender from "@Components/comment/render/CommentRender";
import { INPUT, REPLY_STATE } from "@Constants/button";
import { REPLY_PLACEHOLDER } from "@Constants/text/placeholder";
import useGetChildComment from "@Queries/comments/useGetChildComment";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface RootCommentProps {
  comment: GetCommentsItem;
}
const RootComment = ({ comment }: RootCommentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const childCommentList = useGetChildComment(
    isOpen,
    comment.postId,
    comment.id
  );

  return (
    <div className="p-4">
      <div>
        <CommentRender comment={comment} />
        <div>
          <div className="text-right">
            <button onClick={() => setIsOpen(!isOpen)} type="button">
              {isOpen ? (
                <p className="hover:text-neutral-500 dark:hover:text-neutral-400 text-neutral-800 dark:text-neutral-300">
                  {REPLY_STATE.CLOSE}
                </p>
              ) : (
                <p className="hover:text-neutral-800 dark:hover:text-neutral-300">
                  {REPLY_STATE.OPEN}
                </p>
              )}
            </button>
          </div>
        </div>

        <div className="mx-6">
          {isOpen &&
            childCommentList.isSuccess &&
            childCommentList.data.list.map((childComment) => (
              <CommentRender key={childComment.id} comment={childComment} />
            ))}
          {isOpen && (
            <CommentInput
              postId={comment.postId}
              replyTo={comment.id}
              placeholder={REPLY_PLACEHOLDER}
              buttonText={INPUT}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default RootComment;
