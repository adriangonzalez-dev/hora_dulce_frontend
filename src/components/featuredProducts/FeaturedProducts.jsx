import React from 'react'
import { CardFeatured } from './CardFeatured'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useProducts } from '../../hooks';

export const FeaturedProducts = () => {
  const {products} = useProducts()
  return (
    <div className='w-full'>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          460: {
            width: 460,
            slidesPerView: 4,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 6,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 7,
          },
          // when window width is >= 1024px
          1024: {
            width: 1024,
            slidesPerView: 8,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full h-fit p-2 overflow-hidden"
      >
        {
          products.data.map((product) => {
            if(product.outstanding)return <SwiperSlide><CardFeatured image={product.image}/></SwiperSlide>
          })
        }
      </Swiper>
    </div>
  )
}
