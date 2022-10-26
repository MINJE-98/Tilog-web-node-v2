import dynamic from "next/dynamic";

import { AiFillPushpin } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";

import Paragraph from "@Commons/atom/paragraph";
import CardTitle from "@Commons/molecules/title/CardTitle";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

// const GitStatsCardList = dynamic(
//   () => import("@Components/blog/list/GitStatsCardList"),
//   {
//     ssr: false,
//   }
// );
const UserDetailProfile = dynamic(
  () => import("@Commons/molecules/profile/UserDetailProfile"),
  {
    ssr: false,
  }
);

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
        <UserDetailProfile size={150} userName={userInfo.name} />
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
            <Paragraph color="gray" fontSize="large">
              <VscJson />
            </Paragraph>
          }
          cardTitle={
            <Paragraph color="gray" fontSize="large">
              Top Languages
            </Paragraph>
          }
        />
        <TopLanguageList userName={userInfo.name} />
      </section>

      <section className="order-5">
        <CardTitle
          Icon={
            <Paragraph color="gray" fontSize="large">
              <AiFillPushpin />
            </Paragraph>
          }
          cardTitle={
            <Paragraph color="gray" fontSize="large">
              Pinned Repositories
            </Paragraph>
          }
        />
        <PinnedRepoList userName={userInfo.name} />
      </section>
    </div>
  );
};

export default UserStatsSection;
