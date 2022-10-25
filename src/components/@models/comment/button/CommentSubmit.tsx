import Paragraph from "@Commons/atom/paragraph";

interface CommentSubmitProps {
  onCreateComment: () => void;
}

const CommentSubmit = ({ onCreateComment }: CommentSubmitProps) => {
  return (
    <button
      type="button"
      onClick={onCreateComment}
      className="w-1/4 p-5 text-neutral-500 hover:text-neutral-400"
    >
      <Paragraph color="black" fontSize="medium" tw="text-neutral-50">
        확인
      </Paragraph>
    </button>
  );
};

export default CommentSubmit;
