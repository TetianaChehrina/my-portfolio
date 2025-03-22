"use client";

import Container from "./Container";
import styles from "./styles/about.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <h1 className={styles.title_about} data-aos="fade-up">
          About <span>Me</span>
        </h1>
        <div className={styles.about_container} data-aos="fade-up">
          <div className={styles.video_block}>
            <video
              className={styles.video}
              src="/video/girl.mp4"
              width={400}
              height={500}
              autoPlay
              muted
              loop
              playsInline
              poster="/profile.png"
            />
            <div className={styles.image_border}></div>
          </div>

          <div className={styles.text_block}>
            <p className={styles.description}>
              <span>Who I am?</span> I'm a web developer who enjoys building
              interactive and responsive web applications.
            </p>
            <p className={styles.description}>
              I have hands-on experience with <strong>HTML</strong>,
              <strong>CSS</strong>, <strong>JavaScript</strong>,
              <strong>TypeScript</strong>, <strong>React</strong>,
              <strong>Next.js</strong>, <strong>Redux</strong>,
              <strong>RESTful APIs</strong>,<strong>Node.js</strong>,
              <strong>Express</strong>, <strong>MongoDB</strong>,
              <strong>Cloudinary</strong>, <strong>Postman</strong> and
              <strong>Git</strong>.
            </p>
            <p className={styles.description}>
              I value <strong>collaboration</strong>, clear communication, and
              love working in a team to bring creative ideas to life.
            </p>

            <a href="#contact" className={styles.contact_button}>
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
