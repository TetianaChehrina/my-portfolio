"use client";

import Image from "next/image";
import { FaGithub, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Container from "./Container";
import styles from "./styles/hero.module.css";

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
              Hi, I&apos;m Tetiana <span className={styles.name}>Chehrina</span>
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
                href="https://wa.me/+48536029950"
                target="_blank"
                aria-label="WhatsApp"
                className={styles.icon_link}
              >
                <FaWhatsapp className={styles.icon} />
              </a>
              <a
                href="https://t.me/Tetiana_Chehrina"
                target="_blank"
                className={styles.icon_link}
              >
                <FaTelegramPlane className={styles.icon} />
              </a>
            </div>

            <a href="#about" className={styles.more} data-aos="zoom-in">
              More About Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
