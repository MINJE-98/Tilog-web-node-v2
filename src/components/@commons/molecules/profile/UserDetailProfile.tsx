import Anchor from "@Commons/atom/anchor";
import Heading from "@Commons/atom/heading";
import Paragraph from "@Commons/atom/paragraph";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetUserProfile from "@Queries/users/useGetUserProfile";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

interface UserDetailProfileProps {
  userName: GetUserProfileResponse["name"];
  size: number;
}

const UserDetailProfile = ({ userName, size }: UserDetailProfileProps) => {
  const { data } = useGetUserProfile(userName);
  if (!data) return null;
  return (
    <>
      <div className="flex">
        <UserAvatarImage size={size} avatar={data.avatar} />

        <div className="ml-5">
          <Anchor href={`https://www.github.com/${data.name}`} target="_blank">
            <Paragraph color="gray" fontSize="small">
              @{data.name}
            </Paragraph>
          </Anchor>

          <Anchor href={`mailto:${data.settings.EMAIL}`}>
            <Paragraph color="gray" fontSize="small">
              {data.settings.EMAIL}
            </Paragraph>
          </Anchor>

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
