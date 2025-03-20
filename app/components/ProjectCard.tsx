"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./styles/ProjectCard.module.css";
import { ProjectType } from "../../types/projects";

interface ProjectProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <Image
          src={project.image}
          alt={project.name}
          width={600}
          height={400}
          priority
          className={styles.project_image}
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.project_name}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.technologies}>
          {[
            ...project.technologies.frontend.core,
            ...(project.technologies.backend?.core || []),
          ].map((tech, index) => (
            <span key={index} className={styles.tech_item}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={project.webSite} target="_blank" className={styles.link}>
            <FaExternalLinkAlt /> Live Demo
          </a>
          {typeof project.projectRepository === "string" ? (
            <a
              href={project.projectRepository}
              target="_blank"
              className={styles.link}
            >
              <FaGithub /> GitHub
            </a>
          ) : (
            <>
              <a
                href={project.projectRepository.frontend}
                target="_blank"
                className={styles.link}
              >
                <FaGithub /> Frontend Repo
              </a>
              <a
                href={project.projectRepository.backend}
                target="_blank"
                className={styles.link}
              >
                <FaGithub /> Backend Repo
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
