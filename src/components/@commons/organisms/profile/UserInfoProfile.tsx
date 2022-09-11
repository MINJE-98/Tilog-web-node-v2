import LinkTo from "@Commons/atom/LinkTo";
import Spinner from "@Commons/atom/loading/Spinner";
import ProfileImage from "@Commons/molecules/images/ProfileImage";
import useGetUserProfileQuery from "@Queries/users/useGetUserProfileQuery";

interface UserInfoProfileProps {
  userName: string;
}

const UserInfoProfile = ({ userName }: UserInfoProfileProps) => {
  const userInfo = useGetUserProfileQuery(userName);
  if (userInfo.isError) return <div>{userInfo.error.message}</div>;
  if (!userInfo.data) return null;
  if (userInfo.isLoading) return <Spinner size="10" />;
  return (
    <div>
      <div className="flex">
        <ProfileImage
          className="w-20 h-20 md:w-28 md:h-28"
          avatar={userInfo.data.avatar}
        />
        <div className="ml-5">
          <LinkTo
            href={`https://www.github.com/${userInfo.data.name}`}
            target="_blank"
          >
            <p className="text-xs font-normal">@{userInfo.data.name}</p>
          </LinkTo>
          <LinkTo href={`mailto:${userInfo.data.settings.EMAIL}`}>
            <p className="text-xs">{userInfo.data.settings.EMAIL}</p>
          </LinkTo>
          <h4 className="line-clamp-1">
            {userInfo.data.settings.DISPLAY_NAME
              ? userInfo.data.settings.DISPLAY_NAME
              : "닉네임이 없습니다!"}
          </h4>
          <span className="text-sm line-clamp-3">
            {userInfo.data.settings.POSITION}
          </span>
        </div>
      </div>
      <span className="p-5 font-medium line-clamp-3">
        {userInfo.data.settings.INTRO_MSG}
      </span>
    </div>
  );
};
export default UserInfoProfile;
