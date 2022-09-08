import PrimaryButton from "@Commons/atom/buttons/PrimaryButton";
import LinkTo from "@Commons/atom/LinkTo";
import { VIEW_BLOG } from "@Constants/button";

interface UserBlogButtonProps {
  userName: string;
}

const UserBlogLink = ({ userName }: UserBlogButtonProps) => {
  return (
    <LinkTo href={`/blog/${userName}`} className="text-neutral-50">
      <PrimaryButton>{`${userName}${VIEW_BLOG}`}</PrimaryButton>
    </LinkTo>
  );
};

export default UserBlogLink;
