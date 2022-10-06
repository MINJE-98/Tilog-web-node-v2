import { useRouter } from "next/router";

import { useQuery } from "react-query";

import api from "@Api";
import { postQueryKeys } from "@Utility/queryKey";

import { Posts } from "@Api/interface/model";

const useGetPostDetail = (postId: Posts["id"]) => {
  const router = useRouter();
  return useQuery(
    postQueryKeys.detailPostId(postId),
    () => api.postService.getPostDetail(postId),
    {
      enabled: !!postId,
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      useErrorBoundary: true,
      onError: () => {
        router.push("/404");
      },
    }
  );
};

export default useGetPostDetail;
