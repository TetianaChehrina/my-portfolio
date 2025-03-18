import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <ContactForm />
    </>
  );
}
