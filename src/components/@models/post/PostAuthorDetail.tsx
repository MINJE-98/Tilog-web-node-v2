import UserBlogLink from "@Commons/molecules/link/UserBlogLink";
import UserDetailProfile from "@Commons/molecules/profile/UserDetailProfile";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

interface PostAuthorDetailProps {
  username: PostDetailUserInfoItem["username"];
}

const PostAuthorDetail = ({ username }: PostAuthorDetailProps) => {
  return (
    <div tw="mt-20 rounded md:mt-0 bg-neutral-100 dark:bg-neutral-800">
      <div tw="w-full p-5">
        <UserDetailProfile size={100} userName={username} />
        <UserBlogLink userName={username} />
      </div>
    </div>
  );
};

export default PostAuthorDetail;
