import styles from "./Navbar.module.css";
import LinkedIn from "/svg/linkedin.svg";

export default function Navbar() {
  return (
    <nav className={styles.nav__container}>
      <div className={styles.icon__container}>
        <a
          href="https://www.linkedin.com/in/robinkonijnendijk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
      <ul className={styles.nav__links}>
        <li className={styles.nav__links__item}>Tech Stack</li>
        <li className={styles.nav__links__item}>About</li>
        <li className={styles.nav__links__item}>Projects</li>
        <li className={styles.nav__links__item}>Contact</li>
      </ul>
    </nav>
  );
}
