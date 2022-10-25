import Button from "@Commons/atom/button";
import Paragraph from "@Commons/atom/paragraph";
import { CANCEL, EDIT } from "@Constants/button";
import { COMMENT_PLACEHOLDER } from "@Constants/text/placeholder";
import useSubmitUpdateComment from "@Models/comment/input/hooks/useSubmitUpdateComment";

import { GetCommentsItem } from "@til-log.lab/tilog-api";

interface CommentInputProps {
  comment: GetCommentsItem;
  handleUpdate: () => void;
}
const CommentUpdateInput = ({ comment, handleUpdate }: CommentInputProps) => {
  const { handleSubmit, updateContent, errorMessage, handleComment } =
    useSubmitUpdateComment(comment, handleUpdate);
  return (
    <div>
      <div className="p-5 bg-neutral-100 dark:bg-neutral-800">
        <div className="mt-5">
          {errorMessage && (
            <Paragraph color="gray" fontSize="small" tw="text-Nestjs">
              {errorMessage}
            </Paragraph>
          )}
          <textarea
            className="w-full p-5"
            value={updateContent}
            placeholder={COMMENT_PLACEHOLDER}
            onChange={handleComment}
          />
        </div>

        <div className="flex">
          <Button
            size="small"
            color="secondary"
            type="button"
            onClick={handleUpdate}
            className="rounded-none"
          >
            {CANCEL}
          </Button>
          <Button
            size="small"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            className="rounded-none"
          >
            {EDIT}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentUpdateInput;
