import { useState } from "react";

import LikeCounter from "@Commons/molecules/counter/LikeCounter";
import useLikeMutation from "@Mutations/likes/useLikeMutation";
import useGetHasLike from "@Queries/likes/useGetHasLike";

import PostHasLikeDto from "@Api/post/like/interface/postHasLikeDto";

interface PostLikeProps {
  postId: PostHasLikeDto["postId"];
  count: number;
}

const PostLike = ({ postId, count }: PostLikeProps) => {
  const { isLoading, mutate } = useLikeMutation();
  const [newCount, setNewCount] = useState(count);
  const isLiked = useGetHasLike(postId);
  if (isLoading)
    return <LikeCounter active={!!isLiked.data?.data.like} count={newCount} />;
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
        <LikeCounter active={!!isLiked.data?.data.like} count={newCount} />
      </button>
    </div>
  );
};

export default PostLike;
