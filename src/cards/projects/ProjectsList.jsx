import Projects from "./Projects";
import data from "../../data/projects.json";
import styles from "./ProjectsList.module.css";

export default function ProjectsList({ setIsOpen }) {
  return (
    <div className={styles.projects__cards}>
      {data.projects.map((item) => (
        <Projects
          key={item.id}
          title={item.title}
          image={item.image}
          alt={item.alt}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
}
