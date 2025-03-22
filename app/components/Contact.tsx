import ContactForm from "./ContactForm";
import Container from "./Container";
import styles from "./styles/contact.module.css";

const Contact = () => {
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
      </Container>
    </section>
  );
};

export default Contact;
