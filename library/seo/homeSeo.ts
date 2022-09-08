/* eslint-disable global-require */
import { DefaultSeoProps } from "next-seo";

import { HOME_INTRO } from "@Constants/text";

export const homeSeo: DefaultSeoProps = {
  title: HOME_INTRO.TITLE,
  description: HOME_INTRO.SUBTITLE,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "tilog.link",
    title: HOME_INTRO.TITLE,
    site_name: "TILog",
    images: [
      {
        url: require("../../public/asset/preThumbnail.png"),
        width: 285,
        height: 167,
        alt: "TILog_thumbnailUrl",
      },
    ],
  },
};
