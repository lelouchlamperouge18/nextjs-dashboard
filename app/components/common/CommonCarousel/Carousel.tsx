'use client';
import { ReactNode } from 'react';
import Carousel, { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type CommonCarouselProps = {
  children?: ReactNode;
  className?: string;
  carouselProps?: Partial<CarouselProps>;
};

const CommonCarousel = ({
  children,
  carouselProps,
  className,
}: CommonCarouselProps) => {
  return (
    <div
      className={`c__custom-multiple-carousel h-96 w-full px-28 ${className}`}
    >
      <Carousel
        ssr
        responsive={responsive}
        showDots={true}
        slidesToSlide={1}
        draggable={false}
        customDot={<CustomDot />}
        renderDotsOutside
        {...carouselProps}
      >
        {children}
      </Carousel>
    </div>
  );
};

const CustomDot = ({ active, index, carouselState }: any) => {
  const { currentSlide, totalItems } = carouselState;
  const totalDots = Math.ceil(totalItems - 2);

  // Calculate the range of indexes for the dots
  let start = Math.max(0, currentSlide - 2);
  let end = Math.min(totalItems - 2, currentSlide + 2);

  if (currentSlide === 1 || currentSlide === totalDots - 2) {
    start = Math.max(0, currentSlide - 3);
    end = Math.min(totalItems - 3, currentSlide + 3);
  }
  if (currentSlide === 0) {
    start = Math.max(0, currentSlide - 4);
    if (totalDots === 5) {
      end = 5;
    } else {
      end = Math.min(totalItems - 4, currentSlide + 4);
    }
  }
  if (currentSlide === totalDots - 1) {
    start = Math.max(0, currentSlide - 4);
    end = Math.min(totalItems - 1, currentSlide + 1);
  }

  // Only show dots within the range
  if (index < start || index > end) {
    return null;
  }

  return (
    <li
      style={{
        border: '1px solid black',
        background: active ? 'black' : '',
        height: active ? '10px' : '9px',
        width: active ? '10px' : '9px',
        borderRadius: '500px',
        cursor: 'pointer',
      }}
    ></li>
  );
};

export default CommonCarousel;
