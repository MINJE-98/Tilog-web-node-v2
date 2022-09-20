import { useRef } from "react";

import EmptyAvatarImage from "@Commons/atom/images/avatar/EmptyAvatarImage";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";
import LoginButton from "@Components/auth/LoginButton";
import UserDropdown from "@Components/header/profile/UserDropdown";
import { useAuth } from "@Contexts/auth/AuthContext";
import useOutsideClickAndEscClickListener from "@Hooks/useOutsideClickAndEscClickListener";

const HeaderUserProfile = () => {
  const { userInfo } = useAuth();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener(dropDownRef);
  if (!userInfo) {
    return <LoginButton />;
  }
  if (userInfo.id === 0) {
    return (
      <div className="w-12 h-12 md:w-14 md:h-14">
        <EmptyAvatarImage />
      </div>
    );
  }
  return (
    <div ref={dropDownRef}>
      <button type="button" onClick={handleOpen}>
        <UserAvatarImage
          className="w-12 h-12 md:w-14 md:h-14"
          avatar={userInfo.avatar}
        />
      </button>

      {isOpen && <UserDropdown userInfo={userInfo} />}
    </div>
  );
};
export default HeaderUserProfile;
