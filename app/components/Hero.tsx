"use client";

import Image from "next/image";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import Container from "./Container";
import styles from "./styles/hero.module.css";
import { FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero_section}>
      <Container>
        <div className={styles.hero_content}>
          <div className={styles.image_container}>
            <div className={styles.image_glow}>
              <Image
                src="/profile.png"
                width={200}
                height={200}
                alt="Tetiana Chehrina"
                className={styles.profile_image}
                priority
              />
            </div>
          </div>

          <div className={styles.text_content}>
            <h1 className={styles.hero_title}>
              Hi, I'm Tetiana <span className={styles.name}>Tetiana</span>
            </h1>
            <p className={styles.hero_text}>
              a Web Developer with experience in modern web technologies,
              focused on creating high-quality user interfaces.
            </p>

            <div className={styles.social_icons}>
              <a
                href="https://github.com/TetianaChehrina"
                target="_blank"
                className={styles.icon_link}
              >
                <FaGithub className={styles.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/tetiana-chehrina/"
                target="_blank"
                className={styles.icon_link}
              >
                <FaLinkedinIn className={styles.icon} />
              </a>
              <a
                href="https://t.me/Tetiana_Chehrina"
                target="_blank"
                className={styles.icon_link}
              >
                <FaTelegramPlane className={styles.icon} />
              </a>
            </div>

            <a href="#about" className={styles.more}>
              More About Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
