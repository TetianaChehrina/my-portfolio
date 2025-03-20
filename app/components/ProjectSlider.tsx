"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";
import { ProjectType } from "../../types/projects";
import styles from "./styles/projectSlider.module.css";

const ProjectSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true, type: "progressbar" }}
      navigation={true}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 1, spaceBetween: 15 },
        1024: { slidesPerView: 2, spaceBetween: 20 },
      }}
      className={styles.swiper}
    >
      {projects.map((project: ProjectType) => (
        <SwiperSlide key={project.id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
