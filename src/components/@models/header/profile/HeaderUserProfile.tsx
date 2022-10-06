import { useRef } from "react";

import LoginButton from "@Commons/atom/buttons/LoginButton";
import UserAvatarImage from "@Commons/molecules/images/UserAvatarImage";
import { useAuth } from "@Contexts/auth/AuthContext";
import useOutsideClickAndEscClickListener from "@Hooks/useOutsideClickAndEscClickListener";
import UserDropdown from "@Models/header/profile/UserDropdown";

const HeaderUserProfile = () => {
  const { userInfo, handleLogin } = useAuth();
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener(dropDownRef);
  if (!userInfo) {
    return <LoginButton onClick={handleLogin} />;
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
