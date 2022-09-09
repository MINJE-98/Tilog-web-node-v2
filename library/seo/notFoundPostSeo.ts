/* eslint-disable global-require */
import { DefaultSeoProps } from "next-seo";

export const notFoundPostSeo: DefaultSeoProps = {
  title: "페이지를 찾을 수 없습니다.",
  description: "페이지를 찾을 수 없습니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "public/asset/notFoundPage.png",
    title: "페이지를 찾을 수 없습니다.",
    site_name: "TILog",
  },
};
