import { VscCircleFilled } from "react-icons/vsc";

import CategorySticker from "@Commons/molecules/CategorySticker";
import PostUpdateLink from "@Commons/molecules/link/PostUpdateLink";
import UserProfile from "@Commons/molecules/profile/UserProfile";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";
import PostDeleteButton from "@Components/post/button/PostDeleteButton";
import { VIEW_COUNT } from "@Constants/text";
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
        <UserProfile
          userName={post.user.username}
          avatar={post.user.avatar}
          dateAndViewCount={
            <div className="flex items-center space-x-1">
              <DateFnsFormatter className="text-xs" date={post.createdAt} />
              <VscCircleFilled className="text-[6px] dark:text-neutral-500 text-neutral-400" />
              <p className="text-xs">
                {VIEW_COUNT} {post.view}
              </p>
            </div>
          }
        />
        {isOwner && (
          <div className="flex justify-end w-full space-x-5">
            <PostDeleteButton postId={post.id} />
            <PostUpdateLink postId={post.id} />
          </div>
        )}
      </div>
      <div className="my-3 text-center">
        <div className="text-2xl">
          <CategorySticker categoryName={post.category.name} />
        </div>
        <h1>{post.title}</h1>
        <h6>{post.subTitle}</h6>
      </div>
    </header>
  );
};

export default PostHead;
