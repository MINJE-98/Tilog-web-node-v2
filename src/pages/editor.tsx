import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import api from "@Api/index";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import EditorForm from "@Models/writer/EditorForm";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface EditorPageProps {
  post: GetPostDetailResponseDto;
}
const EditorPage: NextPage<EditorPageProps> = ({ post }: EditorPageProps) => {
  return (
    <div>
      <Head>
        <title>글 수정</title>
      </Head>
      <RootBox>
        <EditorForm post={post} />
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
      const post = await api.postService.getPostDetail(postId);
      return {
        props: {
          post,
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
