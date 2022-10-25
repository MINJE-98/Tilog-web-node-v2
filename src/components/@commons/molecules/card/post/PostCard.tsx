import { VscCircleFilled } from "react-icons/vsc";

import Heading from "@Commons/atom/heading";
import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";
import LikeCounter from "@Commons/molecules/counter/LikeCounter";
import PostThumbnailImage from "@Commons/molecules/images/PostThumbnailImage";
import CategoryLink from "@Commons/molecules/link/CategoryLink";
import UserProfile from "@Commons/molecules/profile/UserProfile";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";
import { VIEW_COUNT } from "@Constants/text";

import { GetPostsItem } from "@til-log.lab/tilog-api";

const PostCard = ({ post }: { post: GetPostsItem }) => {
  return (
    <div tw="flex flex-col w-full bg-neutral-100 dark:bg-neutral-800 max-w-[400px]">
      <div tw="">
        <LinkTo href={`/post/${post.id}`} tw="w-full hover:no-underline">
          <PostThumbnailImage
            id={post.id}
            thumbnailUrl={post.thumbnailUrl}
            title={post.title}
            sizes="400px"
            fontSize={80}
          />
        </LinkTo>
      </div>
      <div tw="w-full p-4 md:py-4 md:pl-4">
        <UserProfile
          userName={post.user.username}
          avatar={post.user.avatar}
          isPrivate={post.private === 1}
          dateAndViewCount={
            <div tw="flex items-center space-x-1">
              <DateFnsFormatter tw="md:text-xs" date={post.createdAt} />
              <VscCircleFilled tw="text-[6px] dark:text-neutral-500 text-neutral-400" />
              <Paragraph color="gray" fontSize="small">
                {VIEW_COUNT} {post.view}
              </Paragraph>
            </div>
          }
        />

        <div tw="mt-2 h-[95px]">
          <LinkTo href={`/post/${post.id}`}>
            <Heading level={4} tw="font-bold line-clamp-1">
              {post.title}
            </Heading>
            <Paragraph color="gray" fontSize="medium" tw="line-clamp-2">
              {!post.subTitle ? "" : post.subTitle}
            </Paragraph>
          </LinkTo>
        </div>

        <div tw="flex items-center space-x-2">
          <CategoryLink categoryName={post.category.name} />
          {/* <CommentCounter count={10} /> */}
          <LikeCounter count={post.like} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
