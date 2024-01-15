import s from "./CardItem.module.scss";
import cardPng from "./card.png";

export const CardItem = () => (
  <article className={s.card}>
    <img className={s.img} src={cardPng} alt="картинка товара" />
    <div className={s.info}>
      <div className={s.title}>Кресло с подлокотниками</div>
      <span className={s.price}>5 000 ₽</span>
    </div>
    <button className={s.btn}>В корзину</button>
  </article>
);

