import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import SettingsForm from "@Components/settings/SettingsForm";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";

const SettingPage: NextPage = () => {
  return (
    <RootBox>
      <Head>
        <title>설정</title>
      </Head>
      <SettingsForm />
    </RootBox>
  );
};

export default SettingPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  null,
  {
    destination: "/",
    permanent: true,
  }
);
