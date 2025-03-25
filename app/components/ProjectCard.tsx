"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./styles/ProjectCard.module.css";
import { ProjectType } from "../../types/projects";
import TechTooltipByCategory from "./TechTooltipByCategory";

interface ProjectProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const { image, name, description, webSite, projectRepository, technologies } =
    project;

  const frontendCore = technologies.frontend?.core || [];
  const backendCore = technologies.backend?.core || [];

  const frontendExtras = {
    Libraries: technologies.frontend?.libraries || [],
    Tools: technologies.frontend?.tools || [],
    Utilities: technologies.frontend?.utilities || [],
  };

  const backendExtras = {
    Libraries: technologies.backend?.libraries || [],
    Tools: technologies.backend?.tools || [],
    Utilities: technologies.backend?.utilities || [],
    Security: technologies.backend?.security || [],
    Cloud: technologies.backend?.cloud || [],
  };

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

        <div className={styles.tech_group_wrapper}>
          <div className={styles.tech_group_title}>Frontend:</div>
          <div className={styles.tech_group}>
            {frontendCore.map((tech, idx) => (
              <TechTooltipByCategory
                key={tech + idx}
                label={tech}
                extras={frontendExtras}
              />
            ))}
          </div>

          {backendCore.length > 0 && (
            <>
              <div className={styles.tech_group_title}>Backend:</div>
              <div className={styles.tech_group}>
                {backendCore.map((tech, idx) => (
                  <TechTooltipByCategory
                    key={tech + idx}
                    label={tech}
                    extras={backendExtras}
                  />
                ))}
              </div>
            </>
          )}
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
