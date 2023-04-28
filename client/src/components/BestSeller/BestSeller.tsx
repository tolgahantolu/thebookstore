import React from 'react';
import SwiperCore, { Autoplay, Grid, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book, SectionHeader } from '@/components';
import { IBook } from '../../../typescript';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

const BestSeller: React.FunctionComponent<{ books: IBook[] }> = ({ books }) => {
  const year = new Date().getFullYear();
  SwiperCore.use([Autoplay, Grid, Navigation]);

  return (
    <div className="mt-10 px-4 xs:px-12 sm:px-20 md:px-[100px]">
      <SectionHeader
        dataTestID="best-seller-title"
        title="bestsellers"
        subTitle="top selling books of"
        additionalInfo={year}
      />

      <Swiper
        className="mt-6"
        grid={{ rows: 1, fill: 'row' }}
        spaceBetween={15}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1 },
          440: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
        allowSlidePrev={true}
        allowSlideNext={true}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        modules={[Grid, Autoplay, Navigation]}
      >
        {books.map((book: IBook) => (
          <SwiperSlide key={book.id}>
            <Book {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSeller;
