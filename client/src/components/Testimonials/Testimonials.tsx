import React from 'react';
import Image from 'next/image';
import { ITestimonials } from '../../../typescript';
import SwiperCore, { Autoplay, Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionHeader } from '@/components';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const TestimonialDetails = (testimonial: ITestimonials) => (
  <>
    <Image
      fill
      sizes="(max-width: 768px) 50px, 75px"
      alt={testimonial.customerName}
      src={testimonial.customerImage}
      className="self-start static w-auto h-auto object-cover object-top rounded-full"
    />
    <div className="flex flex-col justify-start gap-4 text-theme-gray">
      <p className="text-base sm:text-lg md:text-xl">{testimonial.customerComment}</p>
      <h3 className="uppercase font-thin text-xs xs:text-sm">{testimonial.customerName}</h3>
    </div>
  </>
);

const Testimonials: React.FunctionComponent<{ testimonials: ITestimonials[] }> = ({
  testimonials,
}) => {
  SwiperCore.use([Autoplay, Grid, Pagination]);

  return (
    <div className="mt-20 px-4 xs:px-12 sm:px-20 md:px-[100px]">
      <SectionHeader
        dataTestID="whatPeopleSay"
        title="what people say?"
        subTitle="customer reviews"
        additionalInfo={''}
      />

      <Swiper
        className="mt-6"
        grid={{ rows: 1, fill: 'row' }}
        slidesPerView={1}
        allowSlidePrev={true}
        allowSlideNext={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        modules={[Grid, Autoplay, Pagination]}
      >
        {testimonials.map((testimonial: ITestimonials) => (
          <SwiperSlide key={testimonial.id} className="flex gap-4 w-full">
            <TestimonialDetails {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
