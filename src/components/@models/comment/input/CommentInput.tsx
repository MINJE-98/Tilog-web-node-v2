import Button from "@Commons/atom/button";
import Paragraph from "@Commons/atom/paragraph";
import { useAuth } from "@Contexts/auth/AuthContext";
import CommentUserProfile from "@Models/comment/CommentUserProfile";
import useSubmitComment from "@Models/comment/input/hooks/useSubmitComment";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentInputProps {
  postId: GetCommentsItem["postId"];
  replyTo: GetCommentsItem["replyTo"] | null;
  placeholder: string;
  buttonText: string;
}
const CommentInput = ({
  postId,
  replyTo,
  placeholder,
  buttonText,
}: CommentInputProps) => {
  const { userInfo } = useAuth();

  const { handleSubmit, content, errorMessage, handleComment } =
    useSubmitComment(postId, replyTo);
  if (!userInfo) return null;
  return (
    <div>
      <div className="p-5 bg-neutral-100 dark:bg-neutral-800">
        <CommentUserProfile userName={userInfo.name} avatar={userInfo.avatar} />

        <div className="mt-5">
          {errorMessage && (
            <Paragraph color="gray" fontSize="small" tw="text-Nestjs">
              {errorMessage}
            </Paragraph>
          )}
          <textarea
            className="w-full p-5"
            placeholder={placeholder}
            onChange={handleComment}
            value={content}
          />
        </div>
        <Button
          size="small"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          className="rounded-none"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CommentInput;
