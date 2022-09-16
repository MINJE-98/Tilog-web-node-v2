import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { FormProvider, useForm } from "react-hook-form";

import api from "@Api/index";
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
import useHandleEditSummit from "@Hooks/useHandleEditSummit";
import RootBox from "@Layouts/box/RootBox";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

import WriterFormTypes from "@Components/writer/interface/writerFormTypes";

interface EditorPageProps {
  post: GetPostDetailResponseDto;
}
const EditorPage: NextPage<EditorPageProps> = ({ post }: EditorPageProps) => {
  const method = useForm<WriterFormTypes>({
    defaultValues: {
      postId: post.id,
      subTitle: post.subTitle,
      thumbnailUrl: post.thumbnailUrl,
      markdownContent: post.content,
      categoryId: post.category.categoryId,
      title: post.title,
    },
  });
  const onSummit = useHandleEditSummit();
  return (
    <div>
      <Head>
        <title>글수정</title>
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

export default EditorPage;
export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async (context) => {
    const { postId } = context.query;
    if (!postId) return { props: {} };
    if (Array.isArray(postId)) return { props: {} };
    try {
      const { data } = await api.postService.getPostDetail(postId);
      return {
        props: {
          post: data,
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  },
  {
    destination: "/",
    permanent: true,
  }
);
