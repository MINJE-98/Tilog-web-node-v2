import Heading from "@Commons/atom/heading";
import Paragraph from "@Commons/atom/paragraph";
import CategorySticker from "@Commons/molecules/CategorySticker";
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
      <div className="md:absolute md:bottom-6 bg-neutral-50 dark:bg-neutral-800 w-full md:w-[400px]">
        {/** 자식과 자식 div */}
        <div className="relative py-5">
          <div className="absolute -top-10 ">
            <CategorySticker categoryName={post.category.name} />
          </div>
          <div className="mx-5">
            <Heading level={4} tw="font-bold line-clamp-1">
              {post.title}
            </Heading>
            <Paragraph fontSize="small" tw="line-clamp-1">
              {post.subTitle}
            </Paragraph>
          </div>
          <div className="flex items-center justify-between mx-5 mt-5">
            <UserAvatarImage avatar={post.user.avatar} size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;
