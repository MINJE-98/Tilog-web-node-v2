import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { DefaultSeo } from "next-seo";
import { ErrorBoundary } from "react-error-boundary";

import api from "@Api/index";
import Spinner from "@Commons/atom/loading/Spinner";
import PostThumbnail from "@Commons/molecules/images/PostThumbnail";
import TiptapViewer from "@Commons/molecules/text-area/TiptapViewer";
import { PostHeader, PostWriter } from "@Components/post";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import { postDetailSeo } from "@SEO";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

const Comment = dynamic(() => import("@Components/comment"), { ssr: false });

const PostLike = dynamic(() => import("@Components/post/PostLike"), {
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
        <div>
          <article className="w-full">
            <PostHeader post={post} />
            <figure>
              <PostThumbnail
                id={post.id}
                thumbnailUrl={post.thumbnailUrl}
                title={post.title}
              />
            </figure>
            <div className="mt-5 lg:grid lg:grid-flow-col lg:space-x-5 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TiptapViewer content={JSON.parse(post.content)} />
              </div>
              <section>
                <div className="w-full mt-20 rounded md:sticky md:top-4 md:mt-0 h-fit bg-neutral-100 dark:bg-neutral-800">
                  <PostWriter username={post.user.username} />
                </div>
              </section>
            </div>
          </article>
        </div>
        <div className="mt-5">
          <Suspense fallback={<Spinner size="w-1 h-1" />}>
            <ErrorBoundary fallback={<>에러 났어.</>}>
              <PostLike postId={post.id} count={post.like} />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={<Spinner size="w-10 h-10" />}>
            <ErrorBoundary fallback={<>에러 났어.</>}>
              <Comment postId={post.id} />
            </ErrorBoundary>
          </Suspense>
        </div>
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
  }
);
