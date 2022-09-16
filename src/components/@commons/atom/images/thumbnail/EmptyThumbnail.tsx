import { backgroundColor, getBrightness } from "@Utility/color";

import { GetPostsItem } from "@til-log.lab/tilog-api";

export interface EmptyThumbNailProps {
  title: GetPostsItem["title"];
  color: string;
}

const EmptyThumbNail = ({ title, color }: EmptyThumbNailProps) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor(color) }}
      className="flex items-center justify-center w-full h-full aspect-[2/1]"
    >
      <span
        className="px-10 font-semibold text-center"
        style={{
          color: `${getBrightness(color) ? "#121212" : "#fff"}`,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default EmptyThumbNail;
