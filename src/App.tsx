import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <HeroSection />
        <Skills />
        <Projects />
        <AboutMe />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
