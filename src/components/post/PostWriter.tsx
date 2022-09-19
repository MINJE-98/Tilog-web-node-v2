import UserDetailProfile from "@Commons/molecules/profile/UserDetailProfile";
import UserBlogLink from "@Components/post/link/UserBlogLink";
import useGetUserProfile from "@Queries/users/useGetUserProfile";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

interface PostWriterProps {
  username: PostDetailUserInfoItem["username"];
}

const PostWriter = ({ username }: PostWriterProps) => {
  const userInfo = useGetUserProfile(username);
  if (!userInfo.data) return null;
  return (
    <div className="w-full p-5">
      <UserDetailProfile userInfo={userInfo.data} />
      <UserBlogLink userName={username} />
    </div>
  );
};

export default PostWriter;
