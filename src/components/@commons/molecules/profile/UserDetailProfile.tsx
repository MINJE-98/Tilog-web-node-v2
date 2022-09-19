import LinkTo from "@Commons/atom/LinkTo";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

interface UserDetailProfileProps {
  userInfo: GetUserProfileResponse;
}

const UserDetailProfile = ({ userInfo }: UserDetailProfileProps) => {
  return (
    <>
      <div className="flex">
        <UserAvatarImage
          className="w-20 h-20 xl:w-32 xl:h-32"
          avatar={userInfo.avatar}
        />

        <div className="ml-5">
          <LinkTo
            href={`https://www.github.com/${userInfo.name}`}
            target="_blank"
          >
            <p className="text-xs font-normal">@{userInfo.name}</p>
          </LinkTo>

          <LinkTo href={`mailto:${userInfo.settings.EMAIL}`}>
            <p className="text-xs">{userInfo.settings.EMAIL}</p>
          </LinkTo>

          <h4 className="line-clamp-1">
            {userInfo.settings.DISPLAY_NAME
              ? userInfo.settings.DISPLAY_NAME
              : userInfo.name}
          </h4>

          <p className="text-sm line-clamp-1">{userInfo.settings.POSITION}</p>
        </div>
      </div>
      <div className="p-5">
        <span className="font-medium line-clamp-3">
          {userInfo.settings.INTRO_MSG}
        </span>
      </div>
    </>
  );
};
export default UserDetailProfile;
