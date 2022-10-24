import dynamic from "next/dynamic";

import { AiFillPushpin } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";

import Paragraph from "@Commons/atom/paragraph";
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
            <Paragraph fontSize="medium">
              <VscJson />
            </Paragraph>
          }
          cardTitle={<Paragraph fontSize="medium">Top Languages</Paragraph>}
        />
        <TopLanguageList userName={userInfo.name} />
      </section>

      <section className="order-5">
        <CardTitle
          Icon={
            <Paragraph fontSize="medium">
              <AiFillPushpin />
            </Paragraph>
          }
          cardTitle={
            <Paragraph fontSize="medium">Pinned Repositories</Paragraph>
          }
        />
        <PinnedRepoList userName={userInfo.name} />
      </section>
    </div>
  );
};

export default UserStatsSection;
