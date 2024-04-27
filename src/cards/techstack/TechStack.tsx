import { useInView } from "react-intersection-observer";
import styles from "./TechStack.module.css";

type TechStackProps = {
  title: string;
  icons: { id: string; icon: string }[];
  description: string;
  specialization: { id: string; skill: string }[];
  index: number;
};

const TechStack: React.FC<TechStackProps> = ({
  title,
  icons,
  description,
  specialization,
  index,
}) => {
  const { ref: techStackRef, inView: isVisible } = useInView({
    triggerOnce: true,
  });

  const animationTechStackCards = isVisible
    ? index % 2 === 0
      ? "slideInLeft"
      : "slideInRight"
    : "";

  return (
    <div
      className={`${styles.tech__stack__card__container} ${styles[animationTechStackCards]}`}
      ref={techStackRef}
    >
      <div className={styles.tech__stack__content}>
        <h3>{title}</h3>
        <div className={styles.tech__stack__icon}>
          {icons.map((item) => (
            <i key={item.id}>
              <img src={item.icon} />
            </i>
          ))}
        </div>
      </div>
      <p>{description}</p>
      <div className={styles.tech__stack__specialization}>
        {specialization.map((item) => (
          <div key={item.id} className={styles.tech__stack__skills}>
            <h4>{item.skill}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
