import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";

import { DefaultSeo } from "next-seo";

import api from "@Api/index";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import PostDetail from "@Models/post";
import { postDetailSeo } from "@SEO";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

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
      <DefaultSeo {...seo} />
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

    return {
      props: {
        post,
      },
    };
  }
);
