import Projects from "./Projects";
import data from "../../data/projects.json";
import styles from "./ProjectsList.module.css";

type ProjectsListProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectsList: React.FC<ProjectsListProps> = ({ setIsOpen }) => {
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
};

export default ProjectsList;
