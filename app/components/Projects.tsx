"use client";

import Container from "./Container";
import ProjectSlider from "./ProjectSlider";
import styles from "./styles/projects.module.css";

const Projects = () => {
  return (
    <section className={styles.project_section} id="projects">
      <Container>
        <h2 className={styles.title}>My Projects</h2>
        <ProjectSlider />
      </Container>
    </section>
  );
};

export default Projects;
