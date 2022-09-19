import { GetPostsItem } from "@til-log.lab/tilog-api";

export interface EmptyThumbNailProps {
  title: GetPostsItem["title"];
  backgroundColor: string;
  getBrightness: string;
  fontSize?: "base" | "lg" | "xl" | "2xl";
}

const EmptyThumbNail = ({
  title,
  backgroundColor,
  getBrightness,
  fontSize = "base",
}: EmptyThumbNailProps) => {
  return (
    <div
      style={{ backgroundColor }}
      className="flex items-center justify-center w-full h-full aspect-[2/1]"
    >
      <span
        className={`px-10 font-semibold text-center md:text-${fontSize}`}
        style={{
          color: getBrightness,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default EmptyThumbNail;
