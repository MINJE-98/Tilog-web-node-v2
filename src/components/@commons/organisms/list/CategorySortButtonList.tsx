import { useRef } from "react";

import { useMediaQuery } from "react-responsive";

import ArrowButton from "@Commons/atom/buttons/ArrowButton";
import CategoryButton from "@Commons/molecules/buttons/category/CategoryButton";
import useHorizontalScroll from "@Commons/organisms/list/hooks/useHorizontalScroll";

import { GetCategoriesResponseDto } from "@til-log.lab/tilog-api";

import { Category } from "@Api/interface/model";

interface CategorySortButtonListProps {
  categoryList: GetCategoriesResponseDto;
  category: Category["categoryName"];
}

const CategorySortButtonList = ({
  categoryList,
  category,
}: CategorySortButtonListProps) => {
  const firstRef = useRef<HTMLDivElement>(null);
  const lastRef = useRef<HTMLDivElement>(null);
  const { scrollRef, leftScroll, rightScroll, firstEntry, lastEntry } =
    useHorizontalScroll({
      firstRef,
      lastRef,
    });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="relative">
      {!isTabletOrMobile && (
        <>
          <ArrowButton
            className="top-[2px]"
            isIntersecting={firstEntry?.isIntersecting}
            scroll={() => leftScroll(300)}
            arrow="left"
          />
          <ArrowButton
            className="right-0 top-[2px]"
            isIntersecting={lastEntry?.isIntersecting}
            scroll={() => rightScroll(300)}
            arrow="right"
          />
        </>
      )}
      <div
        ref={scrollRef}
        className="flex snap-x p-2 max-w-[1280px] scroll-px-4 mx-5 space-x-3 overflow-y-hidden scrollbar-hide scroll-smooth snap-center"
      >
        {categoryList.list.map(({ id, categoryName }, idx, originArr) => {
          const firstArr = idx === 0;
          const lastArr = idx === originArr.length - 1;
          return (
            <>
              {firstArr && (
                <div className="snap-start" ref={firstRef}>
                  <CategoryButton
                    key={id}
                    isSelected={category === categoryName}
                    categoryName={categoryName}
                  />
                </div>
              )}
              {lastArr && (
                <div className="snap-start" ref={lastRef}>
                  <CategoryButton
                    key={id}
                    isSelected={category === categoryName}
                    categoryName={categoryName}
                  />
                </div>
              )}
              {!firstArr && !lastArr && (
                <div className="snap-start">
                  <CategoryButton
                    key={id}
                    isSelected={category === categoryName}
                    categoryName={categoryName}
                  />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default CategorySortButtonList;
