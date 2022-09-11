import { useContext, useRef } from "react";

import LoginButton from "@Commons/molecules/buttons/LoginButton";
import ProfileImage from "@Commons/molecules/images/ProfileImage";
import DropdownProfile from "@Commons/organisms/header/profile/DropdownProfile";
import { AuthContext } from "@Contexts/auth/AuthContext";
import useOutsideClickAndEscClickListener from "@Hooks/useOutsideClickAndEscClickListener";

import AuthContextInterface from "@Contexts/auth/interface/AuthContextInterface";

const HeaderUserProfile = () => {
  const { userInfo } = useContext<AuthContextInterface>(AuthContext);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isOpen, handleOpen } =
    useOutsideClickAndEscClickListener(dropDownRef);
  if (!userInfo) {
    return <LoginButton />;
  }

  return (
    <div ref={dropDownRef}>
      <button type="button" onClick={handleOpen}>
        <ProfileImage
          className="w-12 h-12 md:w-14 md:h-14"
          avatar={userInfo.avatar}
        />
      </button>

      {isOpen && <DropdownProfile />}
    </div>
  );
};
export default HeaderUserProfile;
