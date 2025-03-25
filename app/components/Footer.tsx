"use client";

import { FaGithub, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import styles from "./styles/footer.module.css";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/tetiana-chehrina/"
            target="_blank"
            aria-label="LinkedIn"
            className={styles.icon_link}
          >
            <FaLinkedinIn className={styles.icon} />
          </a>
          <a
            href="https://github.com/TetianaChehrina"
            target="_blank"
            aria-label="GitHub"
            className={styles.icon_link}
          >
            <FaGithub className={styles.icon} />
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
            aria-label="Telegram"
            className={styles.icon_link}
          >
            <FaTelegramPlane className={styles.icon} />
          </a>
        </div>

        <ul className={styles.links}>
          <li>
            <a href="#">FAQ</a>
          </li>

          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <p className={styles.copy}>
          &copy; Tetiana Chehrina | All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
