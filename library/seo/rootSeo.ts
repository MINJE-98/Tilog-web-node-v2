import { HOME_INTRO } from "@Constants/text";

export const rootSeo = {
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
        url: "https://og.tilog.link/.png?md=1&fontSize=90px&seed=3729&images=https://static.tilog.link/tilog-logo-white.svg",
        width: 285,
        height: 167,
        alt: "TILog",
      },
    ],
  },
};
