import { VscCircleFilled } from "react-icons/vsc";

import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";
import LikeCounter from "@Commons/molecules/counter/LikeCounter";
import CategoryLink from "@Commons/molecules/link/CategoryLink";
import UserProfile from "@Commons/molecules/profile/UserProfile";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";
import { VIEW_COUNT } from "@Constants/text";

import { GetPostsItem } from "@til-log.lab/tilog-api";
import Heading from "@Commons/atom/heading";

interface MostPopularPostCardProps {
  index?: number;
  post: GetPostsItem;
}

const MostPopularPostCard = ({ index, post }: MostPopularPostCardProps) => {
  return (
    <div className="flex justify-center">
      <h6 className="w-4 mr-2">{index}.</h6>
      <div className="w-full md:w-[350px] bg-neutral-100 dark:bg-neutral-800">
        <div className="p-4">
          <UserProfile
            userName={post.user.username}
            avatar={post.user.avatar}
            isPrivate={post.private === 1}
            dateAndViewCount={
              <div className="flex items-center space-x-1">
                <DateFnsFormatter tw="text-xs" date={post.createdAt} />
                <VscCircleFilled tw="text-[6px] dark:text-neutral-500 text-neutral-500" />
                <Paragraph tw="text-xs">
                  {VIEW_COUNT} {post.view}
                </Paragraph>
              </div>
            }
          />

          <div className="mt-2 h-[50px]">
            <LinkTo href={`/post/${post.id}`}>
              <Heading level={1} tw="font-bold line-clamp-1">
                {post.title}
              </Heading>
            </LinkTo>
          </div>

          <div className="flex items-center gap-x-2">
            <CategoryLink categoryName={post.category.name} />
            <LikeCounter count={post.like} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularPostCard;
