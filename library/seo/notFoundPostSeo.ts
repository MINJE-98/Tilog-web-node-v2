/* eslint-disable global-require */
import { DefaultSeoProps } from "next-seo";

export const notFoundPostSeo: DefaultSeoProps = {
  title: "페이지를 찾을 수 없습니다.",
  description: "페이지를 찾을 수 없습니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://og.tilog.link/**페이지를%20찾을%20수%20없습니다.**.png?md=1&fontSize=100px&seed=4154",
    title: "페이지를 찾을 수 없습니다.",
    site_name: "TILog",
  },
};
