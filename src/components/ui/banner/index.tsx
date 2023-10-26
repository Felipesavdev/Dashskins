import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
  const data = [
    { 
      image: './src/assets/images/banners/m4a1s.jpg',
      name: 'm4a1s' 
    },
    { 
      image: './src/assets/images/banners/ak47.jpg',
      name: 'ak47'
    },
    { 
      image: './src/assets/images/banners/usp.jpg',
      name: 'usp'
    }, 
  ];

  return (
    <div className="banner-container">
      <Swiper slidesPerView={1} navigation>
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={item.image} alt={item.name} className="slide-item" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}

export default Banner;