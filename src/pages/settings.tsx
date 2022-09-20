import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import SettingsForm from "@Components/settings/SettingsForm";
import { useAuth } from "@Contexts/auth/AuthContext";
import RootBox from "@Layouts/box/RootBox";

const SettingPage: NextPage = () => {
  const { userInfo } = useAuth();
  const router = useRouter();
  if (!userInfo) router.push("404");
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
