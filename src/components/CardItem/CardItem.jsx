import s from "./CardItem.module.scss";
import cardPng from "./card.png";

export const CardItem = (item) => (
  <article className={s.card}>
    <a className="link" href="#">
      <img className={s.img} src={cardPng} alt="картинка товара" />
    </a>
    <div className={s.info}>
      <div className={s.title}>Кресло с подлокотниками</div>
      <span className={s.price}>5 000 ₽</span>
    </div>

    <button className={s.btn}>В корзину</button>
  </article>
);

