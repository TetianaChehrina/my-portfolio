"use client";

import Image from "next/image";
import Container from "./Container";
import styles from "./styles/about.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <div className={styles.about_container}>
          <div className={styles.image_block}>
            <Image
              src="/profile.png"
              width={400}
              height={500}
              alt="Picture profile"
            />
            <div className={styles.image_border}></div>
          </div>

          <div className={styles.text_block}>
            <h2 className={styles.title}>Hi, </h2>
            <h1 className={styles.heading}>I'm Tetiana Chehrina </h1>
            <p className={styles.description}>
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour.
            </p>
            <button className={styles.contact_button}>Contact Me</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
