import AboutMe from "./components/AboutMe";
import ArchitecturePrinciples from "./components/ArchitecturalPrinciples";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <Skills />
      <ArchitecturePrinciples />
      <Projects />
      <AboutMe />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
