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
  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>Кресло с подлокотниками</h2>
        <div className={s.picture}>
          <div className={s.sliderMain}>
            <Swiper
              modules={[Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={setMainSwiper}
              spaceBetween={10}>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="кресло" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
            <div className={s.pagination}>
              <button onClick={() => mainSwiper.slideNext()}>next</button>
              <button onClick={() => mainSwiper.slidePrev()}>prev</button>
            </div>
          </div>
          <div className={s.sliderThumbnails}>
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
              watchSlidesProgress
              spaceBetween={14}
              slidesPerView={4}>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="Кресло" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/public/img/photo.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={s.info}>
          <p className={s.price}>{"5000".toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. 84348945757</p>
        </div>
        <div className={s.characteristic}>
          <h3>Общие характеристики</h3>
          <ul>
            <li className={s.item}>
              <p>Коллекция</p>
              <p>Мирсаж</p>
            </li>
            <li className={s.item}>
              <p>Производитель</p>
              <p>Россия</p>
            </li>
            <li className={s.item}>
              <p>Гарантия</p>
              <p>18 мес.</p>
            </li>
            <li className={s.item}>
              <p>Срок службы</p>
              <p>5 лет</p>
            </li>
            <li className={s.item}>
              <p>Цвет</p>
              <p>Желтый</p>
            </li>
            <li className={s.item}>
              <p>Макс. нагрузка</p>
              <p>130 кг</p>
            </li>
          </ul>
        </div>
        <div className={s.buttons}>
          <button className={s.btn}>В корзину</button>
          <button className={s.favorite} aria-label="Избранное">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};
