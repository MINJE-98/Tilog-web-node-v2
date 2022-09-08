import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import api from "@Api";

import { GetCommentsResponseDto } from "@til-log.lab/tilog-api";

import { ExceptionInterface } from "@Api/exception/interface";

const useGetParentCommentQuery = (postId: string) => {
  return useQuery<
    AxiosResponse<GetCommentsResponseDto>,
    ExceptionInterface,
    AxiosResponse<GetCommentsResponseDto>
  >(
    ["comment", "parent", postId],
    () => api.commentService.getComments(postId),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retryOnMount: false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  );
};

export default useGetParentCommentQuery;
