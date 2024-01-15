import s from "./CardItem.module.scss";

export const CardItem = () => {
  return (
    <article
      className={s.card}
      onClick={() => {
        setCount((prevCount) => prevCount + 1);
      }}>
      диван
    </article>
  );
};
