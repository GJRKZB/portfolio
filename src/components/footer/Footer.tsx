import Button from "../../basics/button/Button";
import styles from "./Footer.module.css";
import LinkedIn from "/svg/linkedin.svg";
import { translations } from "../../translations/en-GB/en-GB";

type FooterProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer: React.FC<FooterProps> = ({ setIsOpen }) => {
  const btnStyle = {
    width: "286px",
    padding: "10px, 34px",
  };

  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__content}>
        <div className={styles.footer__text}>
          <h3>{translations.footer.cta}</h3>
        </div>
        <Button style={btnStyle} setIsOpen={setIsOpen}>
          {translations.footer.btn}
        </Button>
      </div>
      <div className={styles.footer__social}>
        <a
          href="https://www.linkedin.com/in/robinkonijnendijk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
      <p>{translations.footer.createdBy}</p>
    </div>
  );
};

export default Footer;
