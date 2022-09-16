import { AxiosResponse } from "axios";
import { UseInfiniteQueryResult } from "react-query";

import Spinner from "@Commons/atom/loading/Spinner";

import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

interface CardLoadingProps {
  postList: UseInfiniteQueryResult<AxiosResponse<GetPostsResponseDto>>;
}

const CardLoading = ({
  postList: { hasNextPage, isFetchingNextPage, fetchNextPage },
}: CardLoadingProps) => {
  if (!hasNextPage) return null;
  if (isFetchingNextPage) return <Spinner size="5" />;
  return (
    <button type="button" onClick={() => fetchNextPage()}>
      더보기
    </button>
  );
};

export default CardLoading;
