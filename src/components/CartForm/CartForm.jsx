import s from "./CartForm.module.scss";

export const CartForm = () => (
  <form className={s.form}>
    <h3 className={s.subtitle}>Данные для доставки</h3>
    <fielset className={s.fieldsetInput}>
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="Фамилия Имя Отчество"
      />
      <input
        className={s.input}
        type="text"
        name="phone"
        placeholder="Телефон"
      />
      <input
        className={s.input}
        type="email"
        name="email"
        placeholder="E-mail"
      />
      <input
        className={s.input}
        type="text"
        name="adress"
        placeholder="Адрес доставки"
      />
      <textarea
        className={s.textarea}
        name="сomments"
        placeholder="Комментарии к заказу"></textarea>
    </fielset>
    <fielset className={s.fieldsetRadio}>
      <legend className={s.legend}>Доставка</legend>
      <label className={s.radio}>
        <input
          className={s.radioInput}
          type="radio"
          name="deliveryType"
          value="delivery"
        />
        Доставка
      </label>
      <label className={s.radio} htmlFor="">
        <input
          className={s.radioInput}
          type="radio"
          name="deliveryType"
          value="pickup"
        />
        Самовывоз
      </label>
    </fielset>
    <fielset className={s.fieldsetRadio}>
      <legend className={s.legend}>Оплата</legend>
      <label className={s.radio}>
        <input
          className={s.radioInput}
          type="radio"
          name="paymentType"
          value="card"
        />
        Картой при получении
      </label>
      <label className={s.radio} htmlFor="">
        <input
          className={s.radioInput}
          type="radio"
          name="paymentType"
          value="cash"
        />
        Наличными при получении
      </label>
    </fielset>
  </form>
);
