import React from 'react';
import SwiperCore, { Autoplay, Grid, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book } from '../../components';
import { IBook } from '../../../typescript';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

const BestSeller: React.FunctionComponent<{ books: IBook[] }> = ({ books }) => {
  console.log(books);
  const year = new Date().getFullYear();
  SwiperCore.use([Autoplay, Grid, Navigation]);

  return (
    <div className="mt-10 px-4 xs:px-12 sm:20 md:px-[100px]">
      <h1 data-testid="best-seller-title" className="text-3xl sm:text-4xl font-medium">
        bestsellers
      </h1>
      <p className="text-base sm:text-lg font-thin">top selling books of {year}</p>

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
