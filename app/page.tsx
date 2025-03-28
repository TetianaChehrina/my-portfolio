import About from "./components/About";
import Contact from "./components/Contact";

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
      <Contact />
    </>
  );
}
