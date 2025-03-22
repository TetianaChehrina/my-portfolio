"use client";

import Image from "next/image";
import { technologies } from "@/constants";
import { Technology } from "../../types/technologies";
import Container from "./Container";
import styles from "./styles/technologies.module.css";

const Technologies = () => {
  const midpoint = Math.ceil(technologies.length / 2);
  const topRow = technologies.slice(0, midpoint);
  const bottomRow = technologies.slice(midpoint);

  return (
    <section id="technologies" className={styles.section} data-aos="fade-up">
      <Container>
        <h2 className={styles.title}>Technologies I Use</h2>

        <div className={styles.slider}>
          <div className={`${styles.track} ${styles.left_to_right}`}>
            {topRow.map((tech: Technology) => (
              <div key={tech.name} className={styles.card}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className={styles.icon}
                    sizes="32px"
                  />
                </div>
                <span className={styles.name}>{tech.name}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.track} ${styles.right_to_left}`}>
            {bottomRow.map((tech: Technology) => (
              <div key={tech.name} className={styles.card}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className={styles.icon}
                    sizes="32px"
                  />
                </div>
                <span className={styles.name}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
