import { VscCircleFilled } from "react-icons/vsc";

import LinkTo from "@Commons/atom/LinkTo";
import LikeCounter from "@Commons/molecules/counter/LikeCounter";
import CategoryLink from "@Commons/molecules/link/CategoryLink";
import UserProfile from "@Commons/molecules/profile/UserProfile";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";
import { VIEW_COUNT } from "@Constants/text";

import { GetPostsItem } from "@til-log.lab/tilog-api";

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
                <DateFnsFormatter className="text-xs" date={post.createdAt} />
                <VscCircleFilled className="text-[6px] dark:text-neutral-500 text-neutral-400" />
                <p className="text-xs">
                  {VIEW_COUNT} {post.view}
                </p>
              </div>
            }
          />

          <div className="mt-2 h-[50px]">
            <LinkTo href={`/post/${post.id}`}>
              <h5 className="font-bold line-clamp-1 text-neutral-800 dark:text-neutral-50">
                {post.title}
              </h5>
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
