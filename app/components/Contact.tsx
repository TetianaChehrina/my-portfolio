"use client";
import { FaArrowUp } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Container from "./Container";
import styles from "./styles/contact.module.css";

const Contact = () => {
  const scrollToTop = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className={styles.contact_section}
      data-aos="zoom-in-up"
    >
      <Container>
        <h2 className={styles.title}>
          Contact me for <span>collaboration</span>
        </h2>
        <ContactForm />
        <button
          className={styles.scroll_to_top}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </Container>
    </section>
  );
};

export default Contact;
