import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}
