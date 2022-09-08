import { ChangeEvent, useState } from "react";

import { EMPTY_COMMENT } from "@Constants/messages/error";
import { useCreateCommentMutation } from "@Mutations/comments/useCommentMutation";

const useSubmitComment = (postId: string, replyTo: string | null) => {
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { mutate } = useCreateCommentMutation();
  const handleComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleSubmit = () => {
    if (content.length === 0) return setErrorMessage(EMPTY_COMMENT);
    return mutate(
      { postId, content, replyTo },
      {
        onSuccess: () => {
          setContent("");
          setErrorMessage("");
        },
      }
    );
  };
  return { handleSubmit, content, errorMessage, handleComment };
};
export default useSubmitComment;
