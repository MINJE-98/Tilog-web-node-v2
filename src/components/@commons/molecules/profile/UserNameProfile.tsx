import { ReactNode } from "react";

import LinkTo from "@Commons/atom/LinkTo";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

interface UserNameProfileProps {
  username: GetUserProfileResponse["name"];
  displayName: GetUserProfileResponse["settings"]["DISPLAY_NAME"];
  avatar: GetUserProfileResponse["avatar"];
  children: ReactNode;
}

const UserNameProfile = ({
  username,
  displayName,
  avatar,
  children,
}: UserNameProfileProps) => {
  return (
    <div className="flex items-center space-x-3">
      <LinkTo href={`/blog/${username}`}>
        <UserAvatarImage className="w-10 h-10" avatar={avatar} />
      </LinkTo>
      <div>
        <LinkTo href={`/blog/${username}`}>
          <span className="text-sm font-semibold">
            {!displayName ? username : displayName}
          </span>
        </LinkTo>
        {children}
      </div>
    </div>
  );
};

export default UserNameProfile;
