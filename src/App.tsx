import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <HeroSection />
        <Skills />
      </div>
    </ThemeProvider>
  );
};

export default App;
