import { Goods } from "../../components/Goods/Goods.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice.js";
import { fetchGoods } from "../../store/goods/goods.slice.js";
import { Catalog } from "../../components/Catalog/Catalog.jsx";
export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);
  const {
    data: dataGoods,
    //loading: loadingGoods,
    //error: errorGoods,
  } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  if (loadingCategories) return <div>Загрузка...</div>;
  if (errorCategories) return <div>Ошибка: {errorCategories}</div>;

  //if (loadingGoods) return <div>Загрузка...</div>;
  //if (errorGoods) return <div>Ошибка: {errorGoods}</div>;

  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods data={dataGoods} />
    </main>
  );
};
