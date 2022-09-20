import BlogPostList from "@Components/blog/list/BlogPostList";

import GetUserProfileResponse from "@Api/users/interface/getUserProfileResponse";

const BlogPostSection = ({
  userId,
}: {
  userId: GetUserProfileResponse["id"];
}) => {
  return (
    <div className="mt-10 md:mt-0">
      <BlogPostList userId={userId} />
    </div>
  );
};
export default BlogPostSection;
