import s from "./Developers.module.scss";

export const Developers = () => (
  <ul className={s.developers}>
    <li className={s.item}>
      Designer:{" "}
      <a
        className={s.link}
        href="https://t.me/Marshmallow"
        target="blank"
        rel="noreferrer">
        Anastasia Illina
      </a>
    </li>
    <li className="{s.item}">
      Develiper:&nbsp;
      <a
        className={s.link}
        href="https://t.me/Chokopi"
        target="blank"
        rel="noreferrer">
        Liliya Tolstykh
      </a>
    </li>
  </ul>
);
