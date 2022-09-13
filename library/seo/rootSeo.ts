/* eslint-disable global-require */
import { DefaultSeoProps } from "next-seo";

import { HOME_INTRO } from "@Constants/text";

import { GetPostsCategoryItem } from "@til-log.lab/tilog-api";

export const rootSeo = (
  category: GetPostsCategoryItem["name"]
): DefaultSeoProps => {
  return {
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
          url:
            category === ""
              ? `https://og.tilog.link/.png?md=1&fontSize=90px&seed=3729&images=https://static.tilog.link/tilog-logo-white.svg`
              : `https://og.tilog.link/.png?md=1&fontSize=90px&seed=3729&images=https://static.tilog.link/tilog-logo-white.svg&images=https://static.tilog.link/${category}.svg`,
          width: 285,
          height: 167,
          alt: "TILog",
        },
      ],
    },
  };
};
