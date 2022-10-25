import { DefaultSeoProps } from "next-seo";

import { GetPostDetailResponseDto } from "@til-log.lab/tilog-api";

export const postDetailSeo = (
  postDetail: GetPostDetailResponseDto
): DefaultSeoProps => {
  return {
    title: postDetail.title,
    description: !postDetail.subTitle ? "" : postDetail.subTitle,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "tilog.link",
      title: postDetail.title,
      site_name: "TILog",
      article: {
        publishedTime: postDetail.createdAt,
        modifiedTime: !postDetail.updatedAt ? "" : postDetail.updatedAt,
        authors: [postDetail.user.username],
        tags: [postDetail.category.name],
      },
      images: [
        {
          url: !postDetail.thumbnailUrl
            ? `https://og.tilog.link/${postDetail.title}.png?md=1&fontSize=80px&seed=${postDetail.id}`
            : postDetail.thumbnailUrl,
          width: 285,
          height: 167,
          alt: "TILog",
        },
      ],
    },
  };
};
