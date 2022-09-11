import UserInfoProfile from "@Commons/organisms/profile/UserInfoProfile";
import UserBlogLink from "@Components/post/link/UserBlogLink";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

interface PostWriterProps {
  username: PostDetailUserInfoItem["username"];
}

const PostWriter = ({ username }: PostWriterProps) => {
  return (
    <div className="w-full p-5">
      <UserInfoProfile userName={username} />
      <UserBlogLink userName={username} />
    </div>
  );
};

export default PostWriter;
