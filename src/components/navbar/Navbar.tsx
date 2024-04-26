import styles from "./Navbar.module.css";
import LinkedIn from "/svg/linkedin.svg";

type NavbarProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ setIsOpen }) => {
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
        <li className={styles.nav__links__item}>
          <a href="#full__stack">Tech Stack</a>
        </li>
        <li className={styles.nav__links__item}>
          <a href="#about">About</a>
        </li>
        <li className={styles.nav__links__item}>
          <a href="#projects">Projects</a>
        </li>
        <li
          className={styles.nav__links__item}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
