import LinkTo from "@Commons/atom/LinkTo";
import LogoutButton from "@Commons/molecules/buttons/LogoutButton";
import { USER_PROFILE_DROPBOX } from "@Constants/dropbox";
import { useAuth } from "@Contexts/auth/AuthContext";

const DropdownProfile = () => {
  const { userInfo } = useAuth();
  if (!userInfo) return null;
  return (
    <div className="relative z-50 inline-block text-left">
      <ol className="absolute right-0 w-40 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ">
        <li className="py-1" role="none">
          <LinkTo
            href={`/blog/${userInfo.name}`}
            className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          >
            {USER_PROFILE_DROPBOX.MY_BLOG}
          </LinkTo>
        </li>
        <li className="py-1" role="none">
          <LinkTo
            href="/writer"
            className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          >
            {USER_PROFILE_DROPBOX.CREATE_POST}
          </LinkTo>
          <LinkTo
            href="/settings"
            className="block px-4 py-2 text-lg text-gray-700 font-eng-sub-font-1"
          >
            {USER_PROFILE_DROPBOX.SETTINGS}
          </LinkTo>
        </li>
        <li className="py-1" role="none">
          <LogoutButton>{USER_PROFILE_DROPBOX.LOGOUT}</LogoutButton>
        </li>
      </ol>
    </div>
  );
};

export default DropdownProfile;
