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
        <link
          rel="stylesheet"
          href="//unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/tokyo-night-dark.min.css"
        />
        <script
          async
          src="//unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js"
        />
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
