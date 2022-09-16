import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { FormProvider, useForm } from "react-hook-form";

import {
  CoverImage,
  PrivateSubmit,
  PublicSubmit,
  SearchCategory,
  SubTitleInput,
  TiptapEditor,
  TitleInput,
} from "@Components/writer";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import useHandleWriterSummit from "@Hooks/useHandleWriterSummit";
import RootBox from "@Layouts/box/RootBox";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

const WriterPage: NextPage = () => {
  const method = useForm<WriterFormTypes>();
  const onSummit = useHandleWriterSummit();
  return (
    <div>
      <Head>
        <title>글쓰기</title>
      </Head>

      <RootBox>
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(onSummit)}>
            <CoverImage />
            <TitleInput />
            <SubTitleInput />
            <SearchCategory />
            <TiptapEditor />
            <div className="flex w-[300px] sticky bottom-0 z-10 mt-3 space-x-5 ml-auto bg-slate-100">
              <PrivateSubmit />
              <PublicSubmit />
            </div>
          </form>
        </FormProvider>
      </RootBox>
    </div>
  );
};

export default WriterPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  null,
  {
    destination: "/",
    permanent: true,
  }
);
