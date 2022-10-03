import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import SettingsForm from "@Models/settings/SettingsForm";

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
