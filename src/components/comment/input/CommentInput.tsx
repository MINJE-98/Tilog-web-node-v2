import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";
import CommentUserProfile from "@Components/comment/CommentUserProfile";
import useSubmitComment from "@Components/comment/input/hooks/useSubmitComment";
import { useAuth } from "@Contexts/auth/AuthContext";

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
        <CommentUserProfile userName={userInfo.name} />

        <div className="mt-5">
          {errorMessage && <p className="text-rose-500">{errorMessage}</p>}
          <textarea
            className="w-full p-5"
            placeholder={placeholder}
            onChange={handleComment}
            value={content}
          />
        </div>
        <PrimaryButton isSubmit onClick={handleSubmit} className="rounded-none">
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CommentInput;
