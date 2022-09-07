import type { NextPage } from "next";
import Head from "next/head";

import { FormProvider, useForm } from "react-hook-form";

import RootBox from "@Commons/atom/box/RootBox";
import {
  CoverImage,
  PrivateSubmit,
  PublicSubmit,
  SearchCategory,
  SubTitleInput,
  TiptapEditor,
  TitleInput,
} from "@Components/writer";
import { TITLE_WRITER } from "@Constants/writer";
import useHandleSummit from "@Hooks/useHandleWriterSummit";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const WriterPage: NextPage = () => {
  const method = useForm<WriterFormTypes>();
  const onSummit = useHandleSummit();
  return (
    <RootBox>
      <Head>
        <title>{TITLE_WRITER.ko}</title>
      </Head>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSummit)}>
          <CoverImage />
          <TitleInput />
          <SubTitleInput />
          <SearchCategory />
          <TiptapEditor />

          <div className="flex w-[300px] mt-3 space-x-5 ml-auto">
            <PrivateSubmit />
            <PublicSubmit />
          </div>
        </form>
      </FormProvider>
    </RootBox>
  );
};

export default WriterPage;
