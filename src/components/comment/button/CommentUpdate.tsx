import { BsPencilSquare } from "react-icons/bs";

interface CommentUpdateProps {
  handleUpdate: () => void;
}
const CommentUpdate = ({ handleUpdate }: CommentUpdateProps) => {
  return (
    <button
      className="text-neutral-400 hover:text-neutral-500"
      type="button"
      onClick={handleUpdate}
    >
      <BsPencilSquare />
    </button>
  );
};
export default CommentUpdate;
