import PostUpdateLink from "@Commons/molecules/link/PostUpdateLink";
import UserProfile from "@Commons/molecules/profile/UserProfile";
import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";
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
      <div className="flex items-center">
        <UserProfile userName={post.user.username} avatar={post.user.avatar} />
        {isOwner && (
          <div className="flex justify-end w-full space-x-5">
            <PostDeleteButton postId={post.id} />
            <PostUpdateLink postId={post.id} />
          </div>
        )}
      </div>
      <div className="my-3 text-center">
        <div className="text-2xl">
          <RenderTechIcons categoryName={post.category.name} />
        </div>
        <h1>{post.title}</h1>
        <h4>{post.subTitle}</h4>
      </div>
    </header>
  );
};

export default PostHead;
