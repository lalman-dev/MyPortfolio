import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
};

export default App;
