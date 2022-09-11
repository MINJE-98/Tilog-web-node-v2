import { DELETE } from "@Constants/button";
import useDeletePostMutation from "@Mutations/posts/useDeletePostMutation";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostUpdateLinkProps {
  postId: GetPostDetailResponseDto["id"];
}

const PostDeleteButton = ({ postId }: PostUpdateLinkProps) => {
  const { mutate } = useDeletePostMutation();
  const handleDelete = () => {
    mutate(postId);
  };
  return (
    <button type="button" onClick={handleDelete}>
      <p className="m-auto text-sm text-neutral-400 hover:text-neutral-500 hover:underline h-fit">
        {DELETE}
      </p>
    </button>
  );
};
export default PostDeleteButton;
