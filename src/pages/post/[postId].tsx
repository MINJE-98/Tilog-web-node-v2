import { GetServerSideProps, NextPage } from "next";

import { DefaultSeo } from "next-seo";

import api from "@Api/index";
import PostThumbnailImage from "@Commons/molecules/images/PostThumbnailImage";
import TiptapViewer from "@Commons/molecules/text-area/TiptapViewer";
import Comment from "@Components/comment";
import PostAuthorDetail from "@Components/post/PostAuthorDetail";
import PostHead from "@Components/post/PostHead";
import PostLike from "@Components/post/PostLike";
import withAuthServerSideProps from "@HOCS/withAuthGetServerSideProps";
import RootBox from "@Layouts/box/RootBox";
import { postDetailSeo } from "@SEO";

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
              <PostAuthorDetail username={post.user.username} />
            </aside>
          </div>
        </article>
        <section className="mt-5">
          <PostLike postId={post.id} count={post.like} />
          <Comment postId={post.id} />
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
