import dynamic from "next/dynamic";

import { AiFillPushpin } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";

import UserDetailProfile from "@Commons/molecules/profile/UserDetailProfile";
import CardTitle from "@Commons/molecules/title/CardTitle";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

// const GitStatsCardList = dynamic(
//   () => import("@Components/blog/list/GitStatsCardList"),
//   {
//     ssr: false,
//   }
// );

const PinnedRepoList = dynamic(
  () => import("@Models/blog/list/PinnedRepoList"),
  {
    ssr: false,
  }
);

const TopLanguageList = dynamic(
  () => import("@Models/blog/list/TopLanguageList"),
  {
    ssr: false,
  }
);

const UserStatsSection = ({
  userInfo,
}: {
  userInfo: GetUserProfileResponse;
}) => {
  return (
    <div className="flex flex-col w-full space-y-10">
      <section className="order-1">
        <UserDetailProfile userName={userInfo.name} />
      </section>

      {/* <section className="order-3">
        <CardTitle
          Icon={<MdOutlineDataSaverOff />}
          cardTitle={<h6>카테고리</h6>}
        />
        <hr />
        <GitStatsCardList userName={userInfo.name} />
      </section> */}

      <section className="order-4">
        <CardTitle
          Icon={
            <p>
              <VscJson />
            </p>
          }
          cardTitle={<p>Top Languages</p>}
        />
        <TopLanguageList userName={userInfo.name} />
      </section>

      <section className="order-5">
        <CardTitle
          Icon={
            <p>
              <AiFillPushpin />
            </p>
          }
          cardTitle={<p>Pinned Repositories</p>}
        />
        <PinnedRepoList userName={userInfo.name} />
      </section>
    </div>
  );
};

export default UserStatsSection;
