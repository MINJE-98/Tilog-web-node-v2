import { ReactNode } from "react";

import LockIcon from "@Commons/atom/icons/LockIcon";
import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";

import { GetPostsItem } from "@til-log.lab/tilog-api";

interface UserProfileProps {
  userName: GetPostsItem["user"]["username"];
  avatar: GetPostsItem["user"]["avatar"];
  dateAndViewCount?: ReactNode;
  isPrivate?: boolean;
}

const UserProfile = ({
  userName,
  avatar,
  dateAndViewCount,
  isPrivate,
}: UserProfileProps) => {
  return (
    <div className="flex w-full space-x-3">
      <UserAvatarImage size={40} avatar={avatar} />

      <div>
        <div tw="flex items-center">
          <LinkTo href={`/blog/${userName}`}>
            <Paragraph color="black" fontSize="medium">
              {userName}
            </Paragraph>
          </LinkTo>
          {isPrivate && <LockIcon />}
        </div>
        {dateAndViewCount}
      </div>
    </div>
  );
};

export default UserProfile;
