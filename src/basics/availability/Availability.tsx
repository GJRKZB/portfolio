import styles from "./Availability.module.css";
import { translations } from "../../translations/en-GB/en-GB";

const Availability: React.FC = () => {
  return (
    <div className={styles.availability__container}>
      <i className={styles.availability__icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            d="M33 16.5C33 25.6127 25.6127 33 16.5 33C7.3873 33 0 25.6127 0 16.5C0 7.3873 7.3873 0 16.5 0C25.6127 0 33 7.3873 33 16.5Z"
            fill="#38CB89"
          />
        </svg>
      </i>
      <div className={styles.availability__text}>
        <h3 className={styles.availability__title}>
          {translations.availability.openToWork}
        </h3>
        <p className={styles.availability__subtitle}>
          {translations.availability.location}
        </p>
      </div>
    </div>
  );
};

export default Availability;
