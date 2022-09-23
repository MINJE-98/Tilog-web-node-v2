import Spinner from "@Commons/atom/Spinner";
import UserBlogLink from "@Commons/molecules/link/UserBlogLink";
import UserDetailProfile from "@Commons/molecules/profile/UserDetailProfile";
import useGetUserProfile from "@Queries/users/useGetUserProfile";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

interface PostAuthorDetailProps {
  username: PostDetailUserInfoItem["username"];
}

const PostAuthorDetail = ({ username }: PostAuthorDetailProps) => {
  const userInfo = useGetUserProfile(username);
  if (!userInfo.data) return null;
  return (
    <div className="mt-20 rounded md:sticky md:top-4 md:mt-0 bg-neutral-100 dark:bg-neutral-800">
      <div className="w-full p-5">
        {userInfo.isLoading && <Spinner />}
        {userInfo.isSuccess && (
          <UserDetailProfile userName={userInfo.data.name} />
        )}
        <UserBlogLink userName={username} />
      </div>
    </div>
  );
};

export default PostAuthorDetail;
