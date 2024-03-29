import s from "./SearchForm.module.scss";

export const SearchForm = () => (
  <form className={s.form}>
    <input
      className={s.input}
      type="search"
      name="search"
      placeholder="Ввeдите запрос"
    />
    <button className={s.button} type="submit">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.66659 13.9999C11.1644 13.9999 13.9999 11.1644 13.9999 7.66659C13.9999 4.16878 11.1644 1.33325 7.66659 1.33325C4.16878 1.33325 1.33325 4.16878 1.33325 7.66659C1.33325 11.1644 4.16878 13.9999 7.66659 13.9999Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6666 14.6666L13.3333 13.3333"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </form>
);
