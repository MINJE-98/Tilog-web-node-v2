import Heading from "@Commons/atom/heading";
import Paragraph from "@Commons/atom/paragraph";
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
            <Heading level={2} tw="line-clamp-1">
              {post.title}
            </Heading>
            <Paragraph color="gray" fontSize="small" tw="mt-1 line-clamp-1">
              {post.subTitle}
            </Paragraph>
            <div tw="pt-5">
              <UserAvatarImage avatar={post.user.avatar} size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeMobileCard;
