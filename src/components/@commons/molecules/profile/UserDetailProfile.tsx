import Heading from "@Commons/atom/heading";
import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";
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
        <UserAvatarImage size={160} avatar={data.avatar} />

        <div className="ml-5">
          <LinkTo href={`https://www.github.com/${data.name}`} target="_blank">
            <Paragraph color="gray" fontSize="medium">
              @{data.name}
            </Paragraph>
          </LinkTo>

          <LinkTo href={`mailto:${data.settings.EMAIL}`}>
            <Paragraph color="gray" fontSize="medium">
              {data.settings.EMAIL}
            </Paragraph>
          </LinkTo>

          <Heading level={2} className="line-clamp-1">
            {data.settings.DISPLAY_NAME
              ? data.settings.DISPLAY_NAME
              : data.name}
          </Heading>

          <Paragraph color="black" fontSize="medium" tw="line-clamp-1">
            {data.settings.POSITION}
          </Paragraph>
        </div>
      </div>
      <div className="p-5">
        <Paragraph color="black" fontSize="medium" tw="line-clamp-3">
          {data.settings.INTRO_MSG}
        </Paragraph>
      </div>
    </>
  );
};
export default withSuspenseAndErrorBoundary(UserDetailProfile);
