import styles from "./Navbar.module.css";
import LinkedIn from "/svg/linkedin.svg";
import { translations } from "../../translations/en-GB/en-GB";

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
          <a href="#full__stack">{translations.navigation.techStack}</a>
        </li>
        <li className={styles.nav__links__item}>
          <a href="#about">{translations.navigation.about}</a>
        </li>
        <li className={styles.nav__links__item}>
          <a href="#projects">{translations.navigation.projects}</a>
        </li>
        <li
          className={styles.nav__links__item}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {translations.navigation.contact}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
