import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import api from "@Api/index";
import PostThumbnail from "@Commons/molecules/images/PostThumbnail";
import TiptapViewer from "@Commons/molecules/text-area/TiptapViewer";
import Header from "@Commons/organisms/header";
import Comment from "@Components/comment";
import { PostHeader, PostLike, PostWriter } from "@Components/post";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import { postDetailSeo } from "@SEO/seo";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

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
      <Header />
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
                <div className="w-full rounded h-fit bg-neutral-100 dark:bg-neutral-800">
                  <PostWriter userInfo={post.user} />
                </div>
              </section>
            </div>
          </article>
        </div>
        <div className="mt-5">
          <PostLike postId={post.id} count={post.like} />
          <Comment postId={post.id} />
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
