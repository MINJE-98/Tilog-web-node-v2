import LikeCounter from "@Commons/molecules/counter/LikeCounter";
import useLikeMutation from "@Mutations/likes/useLikeMutation";
import useGetHasLike from "@Queries/likes/useGetHasLike";

import PostHasLikeDto from "@Api/post/like/interface/postHasLikeDto";
import { useState } from "react";

interface PostLikeProps {
  postId: PostHasLikeDto["postId"];
  count: number;
}

const PostLike = ({ postId, count }: PostLikeProps) => {
  const { mutate } = useLikeMutation();
  const [newCount, setNewCount] = useState(count);
  const isLiked = useGetHasLike(postId);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          mutate(
            { postId },
            {
              onSuccess: () => {
                setNewCount((prev) => {
                  if (!isLiked.data) return prev;
                  return isLiked.data.data.like ? prev - 1 : prev + 1;
                });
              },
            }
          );
        }}
      >
        <LikeCounter
          active={!!isLiked.data?.data.like}
          iconSize="5"
          count={newCount}
        />
      </button>
    </div>
  );
};

export default PostLike;
