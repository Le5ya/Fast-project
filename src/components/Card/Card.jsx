import "swiper/css";
import { Container } from "../../views/Container/Container.jsx";
import s from "./Card.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice.js";
import { Slider } from "../Slider/Slider.jsx";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton.jsx";

export const Card = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!data) return <div>Продукт не найден, найдёте позже</div>;

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>Кресло с подлокотниками</h2>

        <Slider data={data} />

        <div className={s.info}>
          <p className={s.price}>{"5000".toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. 84348945757</p>

          <div>
            <h3 className={s.characteristicsTitle}>Общие характеристики</h3>

            <table className={s.table}>
              <tbody>
                {data.characteristics.map((item, i) => (
                  <tr className={s.row} key={i}>
                    <td className={s.field}>{item[0]}</td>
                    <td className={s.value}>{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={s.btns}>
            <button className={s.btn}>В корзину</button>
            <FavoriteButton className={s.like} id={data.id} />
          </div>
        </div>
      </Container>
    </section>
  );
};
