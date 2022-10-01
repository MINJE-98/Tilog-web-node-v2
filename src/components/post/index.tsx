import PostThumbnailImage from "@Commons/molecules/images/PostThumbnailImage";
import TiptapViewer from "@Commons/molecules/text-area/TiptapViewer";
import PostAuthorDetail from "@Components/post/PostAuthorDetail";
import PostHead from "@Components/post/PostHead";
import PostLike from "@Components/post/PostLike";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetPostDetail from "@Queries/posts/useGetPostDetail";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

const PostDetail = ({ post }: { post: GetPostDetailResponseDto }) => {
  const { data } = useGetPostDetail(post.id);
  if (!data) return null;
  return (
    <article className="relative w-full">
      <PostHead post={data} />
      <PostThumbnailImage
        fontSize="2xl"
        id={data.id}
        thumbnailUrl={data.thumbnailUrl}
        title={data.title}
      />

      <div className="mt-10 lg:grid lg:grid-flow-col lg:space-x-5 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <TiptapViewer content={JSON.parse(data.content)} />
        </article>
        <aside className="sticky md:top-10">
          <PostAuthorDetail username={data.user.username} />
        </aside>
      </div>
      <section className="mt-5">
        <PostLike postId={data.id} count={data.like} />
      </section>
    </article>
  );
};

export default withSuspenseAndErrorBoundary(PostDetail);
