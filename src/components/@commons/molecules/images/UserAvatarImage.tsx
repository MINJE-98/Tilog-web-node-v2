import React from "react";

import tw from "twin.macro";

import AvatarImage from "@Commons/atom/images/avatar/AvatarImage";
import EmptyAvatarImage from "@Commons/atom/images/avatar/EmptyAvatarImage";

import { GetUserProfileResponseDto } from "@til-log.lab/tilog-api";

interface UserAvatarImageProps {
  avatar?: GetUserProfileResponseDto["avatar"];
  size: number;
}

const UserAvatarImage = ({ avatar, size }: UserAvatarImageProps) => {
  return (
    <div
      css={[
        tw`overflow-hidden rounded-full ring-1 ring-neutral-200 dark:ring-neutral-600`,
        `
        width: ${size}px;
        height: ${size}px;
        `,
      ]}
    >
      {!avatar ? (
        <EmptyAvatarImage />
      ) : (
        <AvatarImage size={size} avatar={avatar} />
      )}
    </div>
  );
};

export default UserAvatarImage;
