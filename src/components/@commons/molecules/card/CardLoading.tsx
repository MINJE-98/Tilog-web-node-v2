import { AxiosResponse } from "axios";
import { InfiniteQueryObserverResult } from "react-query";

import Spinner from "@Commons/atom/loading/Spinner";

import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

import { ExceptionInterface } from "@Api/exception/interface";

interface CardLoadingProps {
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<
      AxiosResponse<GetPostsResponseDto>,
      ExceptionInterface
    >
  >;
}

const CardLoading = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
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
