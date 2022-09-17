import { VscCircleFilled } from "react-icons/vsc";

import LockIcon from "@Commons/atom/icons/LockIcon";
import UserNameProfile from "@Commons/molecules/profile/UserNameProfile";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";
import { VIEW_COUNT } from "@Constants/text/viewCount";
import useGetUserProfile from "@Queries/users/useGetUserProfile";

interface PostUserProfileProps {
  userName: string;
  createdAt: string;
  viewCount: number;
  isPrivate?: boolean;
}

const PostUserProfile = ({
  userName,
  createdAt,
  viewCount,
  isPrivate,
}: PostUserProfileProps) => {
  const userInfo = useGetUserProfile(userName);
  if (!userInfo.data) return null;
  return (
    <UserNameProfile
      avatar={userInfo.data.avatar}
      username={userInfo.data.name}
      displayName={userInfo.data.settings.DISPLAY_NAME}
    >
      {isPrivate && <LockIcon />}
      <div className="flex items-center space-x-1">
        <DateFnsFormatter className="text-xs" date={createdAt} />
        <VscCircleFilled className="text-[6px] text-neutral-400" />
        <p className="text-xs">
          {VIEW_COUNT} {viewCount}
        </p>
      </div>
    </UserNameProfile>
  );
};

export default PostUserProfile;
