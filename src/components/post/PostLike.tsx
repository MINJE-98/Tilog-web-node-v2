import LikeCounter from "@Commons/molecules/counter/LikeCounter";
import useLikeMutation from "@Mutations/likes/useLikeMutation";
import useGetHasLike from "@Queries/likes/useGetHasLike";

import { Users } from "@Api/interface/model";
import PostHasLikeDto from "@Library/api/post/like/interface/postHasLikeDto";

interface PostLikeProps {
  userId: Users["id"];
  postId: PostHasLikeDto["postId"];
  count: number;
}

const PostLike = ({ userId, postId, count }: PostLikeProps) => {
  const { mutate } = useLikeMutation();
  const isLiked = useGetHasLike(userId, postId);
  if (!isLiked.data?.data.like)
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            mutate({ postId });
          }}
        >
          <LikeCounter iconSize="5" count={count} />
        </button>
      </div>
    );
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          mutate({ postId });
        }}
      >
        <LikeCounter active iconSize="5" count={count} />
      </button>
    </div>
  );
};

export default PostLike;
