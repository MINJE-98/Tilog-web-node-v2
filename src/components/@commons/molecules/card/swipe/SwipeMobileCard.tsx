import CategorySticker from "@Commons/molecules/CategorySticker";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";
import { backgroundColor } from "@Utility/color";

import { GetPostsItem } from "@til-log.lab/tilog-api";

const SwipeMobileCard = ({
  isActive,
  post,
}: {
  isActive: boolean;
  post: GetPostsItem;
}) => {
  return (
    <div>
      <div
        style={{ backgroundColor: backgroundColor(post.id) }}
        className={`h-[200px] sm:h-[320px] relative rounded-lg ${
          !isActive && "opacity-50 "
        } `}
      >
        <div className="absolute mx-5 -bottom-3">
          <CategorySticker categoryName={post.category.name} />
        </div>
      </div>

      <div className="w-full p-5">
        <div className="relative py-5">
          <div className="mx-5">
            <h1 className="text-lg font-black md:text-xl line-clamp-1">
              {post.title}
            </h1>
            <p className="mt-1 text-sm font-normal md:text-base line-clamp-1">
              {post.subTitle}
            </p>
          </div>
          <UserAvatarImage
            avatar={post.user.avatar}
            className="mt-5 ml-5 w-7 h-7"
          />
        </div>
      </div>
    </div>
  );
};

export default SwipeMobileCard;
