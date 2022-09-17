import { Category } from "@Api/interface/model";

export const searchSeo = (category: Category["categoryName"]) => {
  return {
    title: `${category} 검색`,
    description: `${category}에 대한 검색결과입니다.`,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "tilog.link",
      title: `${category} 검색`,
      site_name: "TILog",
      images: [
        {
          url: `https://og.tilog.link/${category}의 대한 검색결과입니다..png?md=1&fontSize=50px&seed=3105&images=https://static.tilog.link/${category}.svg`,
          width: 285,
          height: 167,
          alt: "TILog",
        },
      ],
    },
  };
};
