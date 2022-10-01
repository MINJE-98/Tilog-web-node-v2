import UserBlogLink from "@Commons/molecules/link/UserBlogLink";
import UserDetailProfile from "@Commons/molecules/profile/UserDetailProfile";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

interface PostAuthorDetailProps {
  username: PostDetailUserInfoItem["username"];
}

const PostAuthorDetail = ({ username }: PostAuthorDetailProps) => {
  return (
    <div className="mt-20 rounded md:mt-0 bg-neutral-100 dark:bg-neutral-800">
      <div className="w-full p-5">
        <UserDetailProfile userName={username} />
        <UserBlogLink userName={username} />
      </div>
    </div>
  );
};

export default PostAuthorDetail;
