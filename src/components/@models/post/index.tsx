import dynamic from "next/dynamic";

import PostThumbnailImage from "@Commons/molecules/images/PostThumbnailImage";
import PostAuthorDetail from "@Models/post/PostAuthorDetail";
import PostHead from "@Models/post/PostHead";
import PostLike from "@Models/post/PostLike";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

const TiptapViewer = dynamic(
  () => import("@Commons/molecules/text-area/TiptapViewer"),
  {
    ssr: false,
  }
);

const PostDetail = ({ post }: { post: GetPostDetailResponseDto }) => {
  return (
    <article className="relative w-full overflow-hidden">
      <PostHead post={post} />
      <PostThumbnailImage
        sizes="1240px"
        fontSize={60}
        id={post.id}
        thumbnailUrl={post.thumbnailUrl}
        title={post.title}
      />

      <div className="mt-10 lg:grid lg:grid-flow-col lg:space-x-5 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <TiptapViewer content={JSON.parse(post.content)} />
        </article>
        <aside className="sticky md:top-10">
          <PostAuthorDetail username={post.user.username} />
        </aside>
      </div>
      <section className="mt-5">
        <PostLike postId={post.id} count={post.like} />
      </section>
    </article>
  );
};

export default PostDetail;
