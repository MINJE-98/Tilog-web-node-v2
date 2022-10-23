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
      <span
        className="px-10 font-semibold text-center md:text-xl"
        style={{
          color: "#fff",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default ThumbnailImagePreview;
