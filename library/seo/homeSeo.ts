import { DefaultSeoProps } from "next-seo";

export const homeSeo: DefaultSeoProps = {
  title: "Today I Learned Log",
  description: "오늘 배운것을 기록하고, 남들과 공유해보세요.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "tilog.link",
    title: "Today I Learned Log",
    site_name: "TILog",
    images: [
      {
        url: "../../public/asset/preThumbnail.png",
        width: 285,
        height: 167,
        alt: "TILog_thumbnailUrl",
      },
    ],
  },
};
