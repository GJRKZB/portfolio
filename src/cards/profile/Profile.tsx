import styles from "./Profile.module.css";
import ProfilePicture from "/png/profile.png";
import { translations } from "../../translations/en-GB/en-GB";

const Profile: React.FC = () => {
  return (
    <div className={styles.profile__cards}>
      <div className={styles.profile__card}>
        <div className={styles.profile__card__content}>
          <div className={styles.profile__card__content__text}>
            <h3>{translations.profile.aboutMe}</h3>
            <p>{translations.profile.personalInterests}</p>
          </div>
          <div className={styles.profile__card__content__image}>
            <img src={ProfilePicture} alt="Profile Picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
