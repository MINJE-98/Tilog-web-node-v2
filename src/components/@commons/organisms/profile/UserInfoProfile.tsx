import LinkTo from "@Commons/atom/LinkTo";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";
import useGetUserProfile from "@Queries/users/useGetUserProfile";

interface UserInfoProfileProps {
  userName: string;
}

const UserInfoProfile = ({ userName }: UserInfoProfileProps) => {
  const userInfo = useGetUserProfile(userName);
  if (!userInfo.data) return null;
  return (
    <div>
      <div className="flex">
        <UserAvatarImage
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
          <p className="text-sm line-clamp-1">
            {userInfo.data.settings.POSITION}
          </p>
        </div>
      </div>
      <div className="p-5">
        <span className="font-medium line-clamp-3">
          {userInfo.data.settings.INTRO_MSG}
        </span>
      </div>
    </div>
  );
};
export default UserInfoProfile;
