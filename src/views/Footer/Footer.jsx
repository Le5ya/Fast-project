import { Logo } from "../../components/Logo/Logo.jsx";
import { Container } from "../Container/Container.jsx";
import s from "./Footer.module.scss";

import { Developers } from "../../components/Developers/Developers.jsx";
import { Contacts } from "../../components/Contacts/Contacts.jsx";

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.contacts}>
        <Contacts />
      </div>

      <div className={s.developers}>
        <Developers />
      </div>
      <div className={s.copyright}>© Koff, 2023 </div>
    </Container>
  </footer>
);
