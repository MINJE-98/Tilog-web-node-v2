import RenderTechIcons from "@Commons/molecules/tech-icons/RenderTechIcons";
import PostUserProfile from "@Commons/organisms/profile/PostUserProfile";
import PostDeleteButton from "@Components/post/button/PostDeleteButton";
import PostUpdateLink from "@Components/post/link/PostUpdateLink";
import useIsOwner from "@Hooks/useIsOwner";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostHeaderProps {
  post: GetPostDetailResponseDto;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  const isOwner = useIsOwner(post.user.userId);
  return (
    <header>
      <div className="flex">
        <PostUserProfile
          viewCount={post.view}
          userName={post.user.username}
          createdAt={post.createdAt}
        />
        {isOwner && (
          <div className="flex ml-auto space-x-5">
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

export default PostHeader;
