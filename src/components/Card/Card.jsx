import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import { Container } from "../../views/Container/Container.jsx";
import s from "./Card.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";


export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();
  console.log(productId);
  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>Кресло с подлокотниками</h2>
        <div className={s.picture}>
          <div className={s.sliderMain}>
            <Swiper
              modules={[Thumb]}
              thumbs={{ swiper: thumbsSwiper }}
              onSwipeer={setMainSwiper}
              spaceBetween={10}>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={s.sliderThumbnails}>
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
              watchSlidesProgress
              spaceBetween={14}>
              slidesPerView={4}
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./img/photo.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
            <button onClick={() => mainSwiper.slideNext()}>next</button>
            <button onClick={() => mainSwiper.slidePrev()}>prev</button>
          </div>
        </div>
        <div className={s.info}>
          <p className={s.price}>{"5000".toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. 84348945757</p>
        </div>
        <div className={caracteristic}>
          <h3>Общие характеристики</h3>
        </div>
      </Container>
    </section>
  );
};
