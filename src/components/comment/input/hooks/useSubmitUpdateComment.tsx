import { ChangeEvent, useState } from "react";

import { EMPTY_COMMENT } from "@Constants/messages/error";
import { useUpdateCommentMutation } from "@Mutations/comments/useCommentMutation";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

const useSubmitUpdateComment = (
  comment: GetCommentsItem,
  handleUpdate: () => void
) => {
  const [updateContent, setUpdateContent] = useState<string>(
    !comment.content ? "" : comment.content
  );
  const [errorMessage, setErrorMessage] = useState("");
  const { mutate } = useUpdateCommentMutation();
  const handleComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUpdateContent(e.target.value);
  };
  const handleSubmit = () => {
    if (updateContent.length === 0) return setErrorMessage(EMPTY_COMMENT);
    const { postId, replyTo, id } = comment;
    return mutate(
      { postId, content: updateContent, replyTo, commentId: id },
      {
        onSuccess: () => {
          handleUpdate();
        },
      }
    );
  };
  return { handleSubmit, updateContent, errorMessage, handleComment };
};
export default useSubmitUpdateComment;
