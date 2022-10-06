import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import { DefaultSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";

import api from "@Api/index";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import { postDetailSeo } from "@SEO";
import { postQueryKeys, userQueryKeys } from "@Utility/queryKey";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

const PostDetail = dynamic(() => import("@Models/post"));

const Comment = dynamic(() => import("@Models/comment"), {
  ssr: false,
});

interface PostDetailPageProps {
  post: GetPostDetailResponseDto;
}
const PostDetailPage: NextPage<PostDetailPageProps> = ({
  post,
}: PostDetailPageProps) => {
  const seo = postDetailSeo(post);

  return (
    <div>
      <Head>
        <DefaultSeo {...seo} />
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
        <PostDetail post={post} />
        <Comment postId={post.id} />
      </RootBox>
    </div>
  );
};
export default PostDetailPage;

export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async (context) => {
    const { postId } = context.query;
    if (!postId) return { props: {} };
    if (Array.isArray(postId)) return { props: {} };
    let post: GetPostDetailResponseDto;
    try {
      post = await api.postService.getPostDetail(postId);
    } catch (error) {
      return {
        notFound: true,
      };
    }

    const queryClient = new QueryClient();
    await queryClient.setQueryData(postQueryKeys.detailPostId(postId), post);
    await queryClient.prefetchQuery(
      userQueryKeys.userDetailUserName(post.user.username),
      () => api.usersService.getUserProfile(post.user.username)
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        post,
      },
    };
  }
);
