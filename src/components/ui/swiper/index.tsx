import {forwardRef} from "react";
import cn from "clsx";
import SwiperCore, {A11y, Autoplay, Navigation, Pagination} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";

type TOptions = {
    modules?: any[];
    slidesPerView?: number;
    spaceBetween?: number;
    watchSlidesProgress?: boolean;
    autoHeight?: boolean;
    speed?: number;
    centeredSlides?: boolean;
    effect?:
        | "slide"
        | "fade"
        | "cube"
        | "coverflow"
        | "flip"
        | "creative"
        | "cards";
    navigation?:
        | boolean
        | {
              prevEl: string;
              nextEl: string;
          };
    pagination?:
        | boolean
        | {
              clickable: boolean;
          };
    loop?: boolean;
    autoplay?:
        | boolean
        | {
              delay?: number;
              disableOnInteraction?: boolean;
          };
    breakpoints?: {
        [x: number]: {
            [x: string]: number | string;
        };
    };
    onSlideChange?: (swiper: SwiperCore) => void;
    onSlideChangeTransitionStart?: (swiper: SwiperCore) => void;
    onSlideChangeTransitionEnd?: (swiper: SwiperCore) => void;
};

type TProps = {
    options?: TOptions;
    prevIcon?: string;
    nextIcon?: string;
    navStyle?: 1 | 2;
    navPosition?: "top" | "bottom";
    shadowSize?: "small" | "medium" | "large";
    dotStyle?: 1 | 2;
    dotPosition?: "top" | "bottom";
    children: React.ReactNode;
    className?: string;
    navClass?: string;
    onSlideChange?: (swiper: SwiperCore) => void;
    onSlideChangeTransitionStart?: (swiper: SwiperCore) => void;
    onSlideChangeTransitionEnd?: (swiper: SwiperCore) => void;
};

const SwiperSlider = forwardRef<HTMLDivElement, TProps>(
    (
        {
            options,
            prevIcon,
            nextIcon,
            navStyle,
            navPosition,
            shadowSize,
            dotStyle,
            dotPosition,
            children,
            className,
            navClass,
        },
        ref
    ) => {
        const modules = options?.modules !== undefined ? options.modules : [];
        const prevClass = `prev-${navClass || "swiper-nav"}`;
        const nextClass = `next-${navClass || "swiper-nav"}`;
        const sliderOptions: TOptions = {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            watchSlidesProgress: true,
            autoHeight: true,
            breakpoints: {},
            ...options,
            modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
            navigation: options?.navigation
                ? {
                      prevEl: `.${prevClass}`,
                      nextEl: `.${nextClass}`,
                  }
                : false,
            pagination: options?.pagination
                ? {
                      clickable: true,
                  }
                : false,
        };

        return (
            <div
                className={cn(
                    className,
                    "swiper-wrap tw-relative",
                    navStyle && `nav-style-${navStyle}`,
                    navPosition && `nav-position-${navPosition}`,
                    dotStyle && `dot-style-${dotStyle}`,
                    dotPosition && `dot-position-${dotPosition}`,
                    shadowSize && `shadow-size-${shadowSize}`
                )}
                ref={ref}
            >
                <Swiper {...sliderOptions}>{children}</Swiper>

                {sliderOptions?.navigation && (
                    <>
                        <button
                            type="button"
                            className={`swiper-btn swiper-btn-prev ${prevClass}`}
                        >
                            <i className={cn(prevIcon, "icon")} />
                        </button>
                        <button
                            type="button"
                            className={`swiper-btn swiper-btn-next ${nextClass}`}
                        >
                            <i className={cn(nextIcon, "icon")} />
                        </button>
                    </>
                )}
            </div>
        );
    }
);

export { SwiperSlide };

SwiperSlider.defaultProps = {
    prevIcon: "fas fa-angle-left",
    nextIcon: "fas fa-angle-right",
    navStyle: 1 as const,
    dotStyle: 1 as const,
};

export default SwiperSlider;
