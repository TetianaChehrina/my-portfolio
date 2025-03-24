"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./styles/ProjectCard.module.css";
import { ProjectType } from "../../types/projects";

interface ProjectProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const { image, name, description, webSite, projectRepository, technologies } =
    project;

  const techList = [
    ...technologies.frontend.core,
    ...(technologies.backend?.core || []),
  ];

  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <Image
          src={image}
          alt={name}
          width={800}
          height={400}
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        {description && <p className={styles.description}>{description}</p>}

        <div className={styles.tech}>
          {techList.map((tech, idx) => (
            <span key={idx} className={styles.tech_item}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={webSite} target="_blank" className={styles.link}>
            <FaExternalLinkAlt /> Live Demo
          </a>

          {typeof projectRepository === "string" ? (
            <a href={projectRepository} target="_blank" className={styles.link}>
              <FaGithub /> GitHub
            </a>
          ) : (
            <>
              <a
                href={projectRepository.frontend}
                target="_blank"
                className={styles.link}
              >
                <FaGithub /> Frontend
              </a>
              <a
                href={projectRepository.backend}
                target="_blank"
                className={styles.link}
              >
                <FaGithub /> Backend
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
