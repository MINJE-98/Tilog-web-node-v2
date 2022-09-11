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
        url: "https://og.tilog.link/%EC%98%A4%EB%8A%98%20%EB%B0%B0%EC%9A%B4%EA%B2%83%EC%9D%84%20%EA%B8%B0%EB%A1%9D%ED%95%98%EA%B3%A0,%20%EB%82%A8%EB%93%A4%EA%B3%BC%20%EA%B3%B5%EC%9C%A0%ED%95%B4%EB%B3%B4%EC%84%B8%EC%9A%94..png?md=1&fontSize=90px&seed=3729&images=https://static.tilog.link/tilog-logo-white.svg",
        width: 285,
        height: 167,
        alt: "TILog",
      },
    ],
  },
};
