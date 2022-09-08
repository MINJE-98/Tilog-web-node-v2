import { DefaultSeoProps } from "next-seo";

import GetUserProfileResponseTransFormSettingsDto from "@Api/users/interface/getUserProfileResponseTransFormSettingsDto";

export const userBlogDetailSeo = (
  userInfo: GetUserProfileResponseTransFormSettingsDto
): DefaultSeoProps => {
  return {
    title: !userInfo.settings.DISPLAY_NAME
      ? userInfo.name
      : userInfo.settings.DISPLAY_NAME,
    description: !userInfo.settings.INTRO_MSG
      ? ""
      : userInfo.settings.INTRO_MSG,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: !userInfo.avatar ? "" : userInfo.avatar,
      title: !userInfo.settings.DISPLAY_NAME
        ? userInfo.name
        : userInfo.settings.DISPLAY_NAME,
      site_name: "TILog",

      images: [
        {
          url: !userInfo.avatar ? "" : userInfo.avatar,
          width: 285,
          height: 167,
          alt: "TILog_User_Avatar",
        },
      ],
    },
  };
};
