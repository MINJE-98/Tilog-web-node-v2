import dynamic from "next/dynamic";

import BlogCategorySortButtonList from "@Models/blog/list/BlogCategorySortButtonList";

import { Category, Users } from "@Api/interface/model";

const BlogPostList = dynamic(() => import("@Models/blog/list/BlogPostList"));

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
