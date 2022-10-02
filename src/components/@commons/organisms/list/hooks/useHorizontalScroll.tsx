import { RefObject, useRef } from "react";

import { useIntersectionObserver } from "usehooks-ts";

interface UseHorizontalScrollProps {
  firstRef: RefObject<HTMLDivElement>;
  lastRef: RefObject<HTMLDivElement>;
}

const useHorizontalScroll = ({
  firstRef,
  lastRef,
}: UseHorizontalScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstEntry = useIntersectionObserver(firstRef, { threshold: 1 });
  const lastEntry = useIntersectionObserver(lastRef, { threshold: 1 });

  const rightScroll = (scrollOffset: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft += scrollOffset;
  };
  const leftScroll = (scrollOffset: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft -= scrollOffset;
  };
  return { scrollRef, leftScroll, rightScroll, firstEntry, lastEntry };
};

export default useHorizontalScroll;
