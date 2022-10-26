import dynamic from "next/dynamic";

import { Category, Users } from "@Api/interface/model";

const BlogCategorySortButtonList = dynamic(
  () => import("@Models/blog/list/BlogCategorySortButtonList"),
  { ssr: false }
);
const BlogPostList = dynamic(() => import("@Models/blog/list/BlogPostList"), {
  ssr: false,
});

interface UserPostSectionProps {
  category: Category["categoryName"];
  userId: Users["id"];
}

const UserPostSection = ({ category, userId }: UserPostSectionProps) => {
  return (
    <section>
      <BlogCategorySortButtonList category={category} />
      <BlogPostList categoryName={category} userId={userId} />
    </section>
  );
};
export default UserPostSection;
