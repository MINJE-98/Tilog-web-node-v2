import LinkTo from "@Commons/atom/LinkTo";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetUserProfile from "@Queries/users/useGetUserProfile";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

interface UserDetailProfileProps {
  userName: GetUserProfileResponse["name"];
}

const UserDetailProfile = ({ userName }: UserDetailProfileProps) => {
  const { data } = useGetUserProfile(userName);
  if (!data) return null;
  return (
    <>
      <div className="flex">
        <UserAvatarImage
          className="w-20 h-20 xl:w-32 xl:h-32"
          avatar={data.avatar}
        />

        <div className="ml-5">
          <LinkTo href={`https://www.github.com/${data.name}`} target="_blank">
            <p className="text-xs font-normal">@{data.name}</p>
          </LinkTo>

          <LinkTo href={`mailto:${data.settings.EMAIL}`}>
            <p className="text-xs">{data.settings.EMAIL}</p>
          </LinkTo>

          <h4 className="line-clamp-1">
            {data.settings.DISPLAY_NAME
              ? data.settings.DISPLAY_NAME
              : data.name}
          </h4>

          <p className="text-sm line-clamp-1">{data.settings.POSITION}</p>
        </div>
      </div>
      <div className="p-5">
        <span className="font-medium line-clamp-3">
          {data.settings.INTRO_MSG}
        </span>
      </div>
    </>
  );
};
export default withSuspenseAndErrorBoundary(UserDetailProfile);
