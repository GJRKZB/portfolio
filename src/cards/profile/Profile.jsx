import styles from "./Profile.module.css";
import ProfilePicture from "/png/profile.png";

export default function Profile() {
  return (
    <div className={styles.profile__cards}>
      <div className={styles.profile__card}>
        <div className={styles.profile__card__content}>
          <div className={styles.profile__card__content__text}>
            <h3>About me</h3>
            <p>
              Welcome to my world beyond coding! I'm passionate about the thrill
              of football and the adventures of travel, each offering unique
              experiences and lessons. In the gym, I find a balance of strength
              and discipline. Off the field, I lose myself in the immersive
              worlds of books and the captivating stories of cinema, each
              enriching my life with diverse perspectives and creativity. These
              interests shape my approach to life, combining energy,
              exploration, and a love for storytelling.
            </p>
          </div>
          <div className={styles.profile__card__content__image}>
            <img src={ProfilePicture} alt="Profile Picture" />
          </div>
        </div>
      </div>
    </div>
  );
}
