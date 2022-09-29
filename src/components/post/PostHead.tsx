import CategorySticker from "@Commons/molecules/CategorySticker";
import PostUpdateLink from "@Commons/molecules/link/PostUpdateLink";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";
import PostDeleteButton from "@Components/post/button/PostDeleteButton";
import useIsOwner from "@Hooks/useIsOwner";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostHeadProps {
  post: GetPostDetailResponseDto;
}

const PostHead = ({ post }: PostHeadProps) => {
  const isOwner = useIsOwner(post.user.userId);
  return (
    <header>
      {isOwner && (
        <div className="flex justify-end w-full space-x-5">
          <PostDeleteButton postId={post.id} />
          <PostUpdateLink postId={post.id} />
        </div>
      )}
      <div className="flex flex-col items-center">
        <DateFnsFormatter className="text-base" date={post.createdAt} />
        <h1>{post.title}</h1>
        <h6>{post.subTitle}</h6>
        <div className="my-5 text-2xl">
          <CategorySticker categoryName={post.category.name} />
        </div>
      </div>
    </header>
  );
};

export default PostHead;
