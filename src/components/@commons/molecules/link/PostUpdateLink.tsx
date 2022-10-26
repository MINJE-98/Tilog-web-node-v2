import LinkTo from "@Commons/atom/LinkTo";
import Paragraph from "@Commons/atom/paragraph";
import { EDIT } from "@Constants/button";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

interface PostUpdateLinkProps {
  postId: GetPostDetailResponseDto["id"];
}

const PostUpdateLink = ({ postId }: PostUpdateLinkProps) => {
  return (
    <LinkTo
      href={{
        pathname: "/editor",
        query: { postId },
      }}
    >
      <Paragraph
        fontSize="small"
        color="gray"
        tw="hover:text-neutral-600 hover:underline"
      >
        {EDIT}
      </Paragraph>
    </LinkTo>
  );
};
export default PostUpdateLink;
