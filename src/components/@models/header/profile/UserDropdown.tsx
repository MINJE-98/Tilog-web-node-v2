import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";
import LogoutButton from "@Commons/molecules/buttons/LogoutButton";
import { USER_PROFILE_DROPDOWN } from "@Constants/dropdown";
import { useAuth } from "@Contexts/auth/AuthContext";

import GetMeResponse from "@Api/users/interface/getMeResponse";

interface UserDropdownProps {
  userInfo: GetMeResponse;
}

const UserDropdown = ({ userInfo }: UserDropdownProps) => {
  const { handleLogout } = useAuth();
  return (
    <div className="relative z-50 inline-block text-left">
      <ol className="absolute right-0 w-40 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-neutral-600 ">
        <li className="py-1" role="none">
          <LinkTo href={`/blog/${userInfo.name}`} tw="block px-4 py-2">
            <Paragraph color="black" fontSize="medium">
              {USER_PROFILE_DROPDOWN.MY_BLOG}
            </Paragraph>
          </LinkTo>
        </li>
        <li className="py-1" role="none">
          <LinkTo href="/writer" tw="block px-4 py-2">
            <Paragraph color="black" fontSize="medium">
              {USER_PROFILE_DROPDOWN.CREATE_POST}
            </Paragraph>
          </LinkTo>
          <LinkTo href="/settings" tw="block px-4 py-2">
            <Paragraph color="black" fontSize="medium">
              {USER_PROFILE_DROPDOWN.SETTINGS}
            </Paragraph>
          </LinkTo>
        </li>
        <li className="py-1" role="none">
          <LogoutButton onClick={handleLogout}>
            {USER_PROFILE_DROPDOWN.LOGOUT}
          </LogoutButton>
        </li>
      </ol>
    </div>
  );
};

export default UserDropdown;
