import UserProfile from "@Commons/molecules/profile/UserProfile";
import DateFnsFormatter from "@Commons/molecules/text/DateFnsFormatter";

import { GetCommentsUserItem } from "@til-log.lab/tilog-api";

interface CommentUserProfileProps {
  userName: GetCommentsUserItem["username"];
  avatar: GetCommentsUserItem["avatar"];
  createdAt?: string;
}

const CommentUserProfile = ({
  userName,
  avatar,
  createdAt,
}: CommentUserProfileProps) => {
  return (
    <div>
      <UserProfile
        avatar={avatar}
        userName={userName}
        dateAndViewCount={
          createdAt && <DateFnsFormatter className="text-xs" date={createdAt} />
        }
      />
    </div>
  );
};

export default CommentUserProfile;
