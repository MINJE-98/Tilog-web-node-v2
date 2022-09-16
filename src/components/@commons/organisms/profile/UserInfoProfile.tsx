import dynamic from "next/dynamic";
import { Suspense } from "react";

import { ErrorBoundary } from "react-error-boundary";

import LinkTo from "@Commons/atom/LinkTo";
import ProfileImage from "@Commons/molecules/images/ProfileImage";
import useGetUserProfile from "@Queries/users/useGetUserProfile";

const GitStats = dynamic(() => import("@Components/blog/github/GitStats"), {
  suspense: true,
  ssr: false,
});
interface UserInfoProfileProps {
  userName: string;
}

const UserInfoProfile = ({ userName }: UserInfoProfileProps) => {
  const userInfo = useGetUserProfile(userName);
  if (!userInfo.data) return null;
  return (
    <div>
      <div className="flex">
        <ProfileImage
          className="w-20 h-20 md:w-28 md:h-28"
          avatar={userInfo.data.avatar}
        />
        <div className="ml-5">
          <LinkTo
            href={`https://www.github.com/${userInfo.data.name}`}
            target="_blank"
          >
            <p className="text-xs font-normal">@{userInfo.data.name}</p>
          </LinkTo>
          <LinkTo href={`mailto:${userInfo.data.settings.EMAIL}`}>
            <p className="text-xs">{userInfo.data.settings.EMAIL}</p>
          </LinkTo>
          <h4 className="line-clamp-1">
            {userInfo.data.settings.DISPLAY_NAME
              ? userInfo.data.settings.DISPLAY_NAME
              : "닉네임이 없습니다!"}
          </h4>
          <p className="text-sm line-clamp-1">
            {userInfo.data.settings.POSITION}
          </p>
          <Suspense fallback={<>로딩중이야.</>}>
            <ErrorBoundary fallback={<>에러 났어.</>}>
              <GitStats userName={userInfo.data.name} />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
      <span className="p-5 font-medium line-clamp-3">
        {userInfo.data.settings.INTRO_MSG}
      </span>
    </div>
  );
};
export default UserInfoProfile;
