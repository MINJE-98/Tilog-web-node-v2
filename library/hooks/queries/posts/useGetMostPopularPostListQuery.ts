import { useQuery } from "react-query";

import api from "@Api";
import useSearchCategory from "@Queries/categories/useSearchCategory";

import GetPostRequestDto from "@Api/post/interface/getPostRequestDto";

interface GetMostPopularPostListQueryInterface {
  dateScope: GetPostRequestDto["dateScope"];
  sortScope: GetPostRequestDto["sortScope"];
  page: GetPostRequestDto["page"];
  maxContent: GetPostRequestDto["maxContent"];
  userId?: GetPostRequestDto["userId"];
  categoryName?: string;
}

const useGetMostPopularPostListQuery = ({
  categoryName,
  dateScope,
  sortScope,
  maxContent,
  page,
}: GetMostPopularPostListQueryInterface) => {
  const searchCategory = useSearchCategory();
  const data = searchCategory(categoryName);
  const categoryId = data?.length === 1 ? data[0].id : 0;

  return useQuery(
    ["mostPopularPostList", dateScope, sortScope, categoryName],
    ({ pageParam = page }) => {
      return api.postService.getPosts(
        dateScope,
        sortScope,
        pageParam,
        maxContent,
        undefined,
        categoryId
      );
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: 1000 * 60,
    }
  );
};

export default useGetMostPopularPostListQuery;
