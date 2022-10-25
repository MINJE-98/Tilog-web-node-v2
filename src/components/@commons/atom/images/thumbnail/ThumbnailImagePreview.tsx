import Paragraph from "@Commons/atom/paragraph";
import { backgroundColor } from "@Utility/color";

import { GetPostsItem } from "@til-log.lab/tilog-api";

export interface ThumbnailImagePreviewProps {
  title: GetPostsItem["title"];
}

const ThumbnailImagePreview = ({ title }: ThumbnailImagePreviewProps) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor("0") }}
      className="flex items-center justify-center w-full h-full aspect-[2/1]"
    >
      <Paragraph
        fontSize="large"
        color="gray"
        tw="px-10 text-center "
        style={{
          color: "#fff",
        }}
      >
        {title}
      </Paragraph>
    </div>
  );
};

export default ThumbnailImagePreview;
