import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { FormProvider, useForm } from "react-hook-form";

import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import useHandleSubmit from "@Models/settings/hooks/useHandleSettingsSubmit";
import SettingsForm from "@Models/settings/SettingsForm";

import GetMeResponse from "@Api/users/interface/getMeResponse";
import UserSettingTypes from "@Api/users/interface/userSettingTypes";

interface SettingPageProps {
  initUserInfo: GetMeResponse;
}

const SettingPage: NextPage<SettingPageProps> = ({
  initUserInfo,
}: SettingPageProps) => {
  const onSubmit = useHandleSubmit();
  const method = useForm<UserSettingTypes>({
    defaultValues: initUserInfo.settings,
  });
  return (
    <RootBox>
      <Head>
        <title>설정</title>
      </Head>
      <div tw="h-screen">
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <SettingsForm />
          </form>
        </FormProvider>
      </div>
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
