import styles from "./Header.module.scss";
import logoIgnite from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header} hasBorder>
      <img src={logoIgnite} alt="Logo do Ignite" />
    </header>
  );
}
