import Paragraph from "@Commons/atom/paragraph";
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
      <Paragraph tw="text-sm text-neutral-400 hover:text-neutral-500 hover:underline">
        {DELETE}
      </Paragraph>
    </button>
  );
};
export default PostDeleteButton;
