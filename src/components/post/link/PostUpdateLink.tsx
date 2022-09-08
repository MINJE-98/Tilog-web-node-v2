import LinkTo from "@Commons/atom/LinkTo";
import { EDIT } from "@Constants/button";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostUpdateLinkProps {
  postId: GetPostDetailResponseDto["id"];
}

const PostUpdateLink = ({ postId }: PostUpdateLinkProps) => {
  return (
    <LinkTo
      href={{
        pathname: "/writer",
        query: { postId },
      }}
      className="text-sm text-neutral-400 hover:text-neutral-500 h-fit"
    >
      {EDIT}
    </LinkTo>
  );
};
export default PostUpdateLink;
