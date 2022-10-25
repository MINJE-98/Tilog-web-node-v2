import Button from "@Commons/atom/button";
import LinkTo from "@Commons/atom/LinkTo";
import { VIEW_BLOG } from "@Constants/button";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

interface UserBlogButtonProps {
  userName: PostDetailUserInfoItem["username"];
}

const UserBlogLink = ({ userName }: UserBlogButtonProps) => {
  return (
    <div>
      <LinkTo href={`/blog/${userName}`} tw="text-neutral-50 w-full">
        <Button
          size="medium"
          color="primary"
          type="button"
          tw="w-full"
        >{`${userName}${VIEW_BLOG}`}</Button>
      </LinkTo>
    </div>
  );
};

export default UserBlogLink;
