import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { DefaultSeo } from "next-seo";
import { ErrorBoundary } from "react-error-boundary";

import api from "@Api/index";
import Spinner from "@Commons/atom/Spinner";
import PostThumbnailImage from "@Commons/molecules/images/PostThumbnailImage";
import TiptapViewer from "@Commons/molecules/text-area/TiptapViewer";
import PostAuthorDetail from "@Components/post/PostAuthorDetail";
import PostHead from "@Components/post/PostHead";
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
        <article className="w-full">
          <PostHead post={post} />
          <figure>
            <PostThumbnailImage
              id={post.id}
              thumbnailUrl={post.thumbnailUrl}
              title={post.title}
            />
          </figure>
          <div className="mt-5 lg:grid lg:grid-flow-col lg:space-x-5 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <TiptapViewer content={JSON.parse(post.content)} />
            </article>
            <aside>
              <Suspense fallback={<Spinner />}>
                <ErrorBoundary fallback={<>에러 났어.</>}>
                  <PostAuthorDetail username={post.user.username} />
                </ErrorBoundary>
              </Suspense>
            </aside>
          </div>
        </article>
        <section className="mt-5">
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary fallback={<>에러 났어.</>}>
              <PostLike postId={post.id} count={post.like} />
            </ErrorBoundary>
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary fallback={<>에러 났어.</>}>
              <Comment postId={post.id} />
            </ErrorBoundary>
          </Suspense>
        </section>
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
