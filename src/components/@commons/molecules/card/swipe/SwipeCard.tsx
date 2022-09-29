import LinkTo from "@Commons/atom/LinkTo";
import CategorySticker from "@Commons/molecules/card/swipe/CategoryIconName";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";
import { backgroundColor } from "@Utility/color";

import { GetPostsItem } from "@til-log.lab/tilog-api";

const SwipeCard = ({
  isActive,
  post,
}: {
  isActive: boolean;
  post: GetPostsItem;
}) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor(post.id) }}
      className={`w-full h-[450px] md:w-[700px] m-auto px-6 md:pt-0 pt-20 relative rounded-lg ${
        !isActive && "opacity-50"
      } `}
    >
      {/** 최상위 부모와 자식 div */}
      <p>{isActive}</p>
      <div className="md:absolute md:bottom-6 bg-neutral-50 dark:bg-neutral-800 w-full md:w-[400px]">
        {/** 자식과 자식 div */}
        <div className="relative py-5">
          <div className="absolute -top-11 ">
            <CategorySticker categoryName={post.category.name} />
          </div>
          <div className="mx-5">
            <h1 className="text-lg font-black md:text-xl line-clamp-1">
              {post.title}
            </h1>
            <p className="mt-1 text-sm font-normal md:text-base line-clamp-1">
              {post.subTitle}
            </p>
          </div>
          <hr className="mb-3" />
          <div className="flex items-center justify-between mx-5">
            <UserAvatarImage avatar={post.user.avatar} className="w-7 h-7" />
            <LinkTo href={`/post/${post.id}`}>바로가기</LinkTo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;
