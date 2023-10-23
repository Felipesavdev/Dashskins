import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

function Banner() {
  const data = [
    { 
      id: '1', 
      image: './src/assets/images/banners/m4a1s.jpg',
      name: 'm4a1s' 
    },
    { 
      id: '2', 
      image: './src/assets/images/banners/ak47.jpg',
      name: 'ak47'
    },
    { 
      id: '3', 
      image: './src/assets/images/banners/usp.jpg',
      name: 'usp'
    }, 
  ];

  return (
      <div className="banner-container">
        <Swiper slidesPerView={1} navigation>
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt={item.name} className="slide-item" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
  )};

export default Banner;