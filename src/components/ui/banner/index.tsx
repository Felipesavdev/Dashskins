import './styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

function Banner() {
  const data = [
    { id: '1', Image: './src/assets/images/banners/m4a1s.jpg'},
    { id: '2', Image: './src/assets/images/banners/test.jpg' },
    { id: '3', Image: './src/assets/images/banners/usp.jpg'}, 
  ];

  return (
    <div className="banner-container">
      <Swiper slidesPerView={1} navigation>
        {data.map((item) => {
          console.log (item)
          return (
            <SwiperSlide key={item.id}>
              <img src={item.Image} alt="Slider" className="slide-item" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}

export default Banner;