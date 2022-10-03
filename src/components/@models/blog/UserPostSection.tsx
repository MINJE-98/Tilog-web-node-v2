import BlogCategorySortButtonList from "@Models/blog/list/BlogCategorySortButtonList";
import BlogPostList from "@Models/blog/list/BlogPostList";

import { Category, Users } from "@Api/interface/model";

interface UserPostSectionProps {
  category: Category["categoryName"];
  userId: Users["id"];
}

const UserPostSection = ({ category, userId }: UserPostSectionProps) => {
  return (
    <>
      <BlogCategorySortButtonList category={category} />
      <BlogPostList categoryName={category} userId={userId} />
    </>
  );
};
export default UserPostSection;
