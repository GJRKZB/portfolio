import TechStack from "./TechStack";
import data from "../../data/tech-stack.json";
import styles from "./TechStackList.module.css";

const TechStackList: React.FC = () => {
  const technologies = [
    ...data.frontend,
    ...data.backend,
    ...data.database,
    ...data.design,
  ];

  return (
    <div className={styles.tech__stack__cards}>
      {technologies.map((item, index) => (
        <TechStack
          key={item.title}
          title={item.title}
          icons={item.icons}
          description={item.description}
          specialization={item.specialization}
          index={index}
        />
      ))}
    </div>
  );
};

export default TechStackList;
