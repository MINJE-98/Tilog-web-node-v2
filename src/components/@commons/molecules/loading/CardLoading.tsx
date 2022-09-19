import { AxiosResponse } from "axios";
import { UseInfiniteQueryResult } from "react-query";

import Spinner from "@Commons/atom/Spinner";

import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

interface CardLoadingProps {
  cardList: UseInfiniteQueryResult<AxiosResponse<GetPostsResponseDto>>;
}

const CardLoading = ({
  cardList: { hasNextPage, isFetchingNextPage, fetchNextPage },
}: CardLoadingProps) => {
  if (!hasNextPage) return null;
  if (isFetchingNextPage) return <Spinner />;
  return (
    <button type="button" onClick={() => fetchNextPage()}>
      더보기
    </button>
  );
};

export default CardLoading;
