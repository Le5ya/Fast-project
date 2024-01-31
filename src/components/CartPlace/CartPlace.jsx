import s from "./CartPlace.module.scss";

export const CartPlace = () => (
  <div className={s.place}>
    <h3 className={s.subtitle}>Oформление</h3>
    <div className={s.placeInfo}>
      <p>4 товара на сумму:</p>
      <p>20 000 Р</p>
    </div>
    <p className={s.placeDelivery}>Доставка 0 Р</p>
    <button className={s.placeBtn}>Оформить заказ</button>
  </div>
);
