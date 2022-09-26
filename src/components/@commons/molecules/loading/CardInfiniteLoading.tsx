/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

import { UseInfiniteQueryResult } from "react-query";

import Spinner from "@Commons/atom/Spinner";

import { GetPostsResponseDto } from "@til-log.lab/tilog-api";

interface CardInfiniteLoadingProps {
  cardList: UseInfiniteQueryResult<GetPostsResponseDto>;
}

const CardInfiniteLoading = ({
  cardList: { hasNextPage, isFetchingNextPage, fetchNextPage },
}: CardInfiniteLoadingProps) => {
  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);
  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        fetchNextPage();
      }
    });
  };
  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    if (boxRef.current) observerRef.current.observe(boxRef.current);
  }, [intersectionObserver]);

  if (!hasNextPage) return null;
  if (isFetchingNextPage)
    return (
      <div className="flex justify-center mt-5">
        <Spinner size="2xl" />
      </div>
    );
  return <div ref={boxRef} />;
};

export default CardInfiniteLoading;
