import Heading from "@Commons/atom/heading";
import Paragraph from "@Commons/atom/paragraph";
import CategorySticker from "@Commons/molecules/CategorySticker";
import PostUpdateLink from "@Commons/molecules/link/PostUpdateLink";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";
import useIsOwner from "@Hooks/useIsOwner";
import PostDeleteButton from "@Models/post/button/PostDeleteButton";

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
        <DateFnsFormatter date={post.createdAt} />
        <Heading level={1}>{post.title}</Heading>
        <Paragraph color="gray" fontSize="large">
          {post.subTitle}
        </Paragraph>
        <div className="my-5 text-2xl">
          <CategorySticker categoryName={post.category.name} />
        </div>
      </div>
    </header>
  );
};

export default PostHead;
