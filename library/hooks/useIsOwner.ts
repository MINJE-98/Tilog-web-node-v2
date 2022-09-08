import { useAuth } from "@Contexts/auth/AuthContext";

import { PostDetailUserInfoItem } from "@til-log.lab/tilog-api";

const useIsOwner = (userInfoId: PostDetailUserInfoItem["userId"]) => {
  const { userInfo } = useAuth();
  if (!userInfo) return false;
  if (userInfo.id === userInfoId) return true;
  return false;
};

export default useIsOwner;
