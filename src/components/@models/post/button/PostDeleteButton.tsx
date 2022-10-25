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
      <Paragraph
        color="gray"
        fontSize="small"
        tw="hover:text-neutral-600 hover:underline"
      >
        {DELETE}
      </Paragraph>
    </button>
  );
};
export default PostDeleteButton;
