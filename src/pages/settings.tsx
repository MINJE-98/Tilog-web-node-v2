import { NextPage } from "next";
import Head from "next/head";

import { FormProvider, useForm } from "react-hook-form";

import {
  DisplayNameInput,
  EmailInput,
  IntroductionInput,
  PositionInput,
  SettingsSubmit,
} from "@Components/settings";
import { useAuth } from "@Contexts/auth/AuthContext";
import useHandleSubmit from "@Hooks/useHandleSettingsSubmit";
import RootBox from "@Layouts/box/RootBox";

import UserSettingTypes from "@Api/users/interface/userSettingTypes";

const SettingPage: NextPage = () => {
  const onSubmit = useHandleSubmit();
  const { userInfo } = useAuth();
  const method = useForm<UserSettingTypes>({
    defaultValues: userInfo ? userInfo.settings : {},
  });
  return (
    <RootBox>
      <Head>
        <title>설정</title>
      </Head>
      <div className="w-full m-auto p-14 bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSubmit)}>
            <DisplayNameInput />
            <EmailInput />
            <IntroductionInput />
            <PositionInput />
            <div className="text-right">
              <SettingsSubmit />
            </div>
          </form>
        </FormProvider>
      </div>
    </RootBox>
  );
};

export default SettingPage;
