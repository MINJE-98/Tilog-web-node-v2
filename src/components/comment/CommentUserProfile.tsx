import ProfileImage from "@Commons/molecules/images/ProfileImage";
import UserNameProfile from "@Commons/molecules/profile/UserNameProfile";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";
import useGetUserProfileQuery from "@Queries/users/useGetUserProfileQuery";

interface CommentUserProfileProps {
  userName: string;
  createdAt?: string;
}

const CommentUserProfile = ({
  userName,
  createdAt,
}: CommentUserProfileProps) => {
  const userInfo = useGetUserProfileQuery(userName);

  if (userInfo.isError) return <p>{userInfo.error.message}</p>;
  if (userInfo.isLoading)
    return (
      <div className="flex items-center space-x-3">
        <ProfileImage className="w-10 h-10" />
        <span className="text-sm font-bold">로딩중..</span>
        {createdAt && (
          <DateFnsFormatter className="line-clamp-1" date={createdAt} />
        )}
      </div>
    );
  if (!userInfo.data) return null;
  return (
    <div>
      <UserNameProfile
        avatar={userInfo.data.avatar}
        username={userInfo.data.name}
        displayName={userInfo.data.settings.DISPLAY_NAME}
      >
        {createdAt && <DateFnsFormatter className="text-xs" date={createdAt} />}
      </UserNameProfile>
    </div>
  );
};

export default CommentUserProfile;
