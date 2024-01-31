import { CartForm } from "../../components/CartForm/CartForm.jsx";
import { CartPlace } from "../../components/CartPlace/CartPlace.jsx";
import { CartProducts } from "../../components/CartProducts/CartProducts.jsx";
import { Container } from "../Container/Container.jsx";
import s from "./Cart.module.scss";

export const Cart = () => {
  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзина</h2>
        <CartProducts />
        <CartPlace />
        <CartForm />
      </Container>
    </section>
  );
};
