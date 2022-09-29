import { useMediaQuery } from "react-responsive";
import { A11y, Autoplay, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SwipeCard from "@Commons/molecules/card/swipe/SwipeCard";
import SwipeMobileCard from "@Commons/molecules/card/swipe/SwipeMobileCard";
import withSuspenseAndErrorBoundary from "@HOCS/withSuspenseAndErrorBoundary";
import useGetMostPopularPostList from "@Queries/posts/useGetMostPopularPostList";

const MostPopularSwiper = () => {
  const popularPostList = useGetMostPopularPostList({
    dateScope: "All",
    sortScope: "likes",
    page: 0,
    maxContent: 6,
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="max-w-[310px] sm:max-w-[500px] md:max-w-[700px]">
      <Swiper
        modules={[Pagination, A11y, Autoplay, Parallax]}
        slidesPerView={1}
        spaceBetween={20}
        loopAdditionalSlides={1}
        style={{
          overflow: "visible",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          reverseDirection: false,
        }}
        loop
        speed={1000}
        loopedSlides={1}
        parallax
        pagination={{
          type: "fraction",
          renderFraction: (currentClass, totalClass) =>
            `<div class="tilog-pagination">
        <span class="${currentClass}"></span> / <span class="${totalClass}"></span>
        </div>`,
        }}
      >
        {popularPostList.data?.list.map((post) => (
          <SwiperSlide key={post.id}>
            {({ isActive }) =>
              isTabletOrMobile ? (
                <SwipeMobileCard isActive={isActive} post={post} />
              ) : (
                <SwipeCard isActive={isActive} post={post} />
              )
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default withSuspenseAndErrorBoundary(MostPopularSwiper);
