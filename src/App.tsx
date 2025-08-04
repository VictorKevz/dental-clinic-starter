import { Navbar } from "./sections/Header/Navbar";
import Hero from "./sections/Hero/Hero";
import { Services } from "./sections/Services/Services";
import { Stats } from "./components/Stats";
import { Testimonials } from "./sections/Testimonials/Testimonials";
import { ThemeProvider } from "./context/ThemeContext";
import { Gallery } from "./sections/Gallery/Gallery";
import { Contact } from "./sections/Contact/Contact";

function App() {
  return (
    <ThemeProvider>
      <main className="w-full min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-start relative">
        <Navbar />
        <Hero />
        <Services />
        <Stats />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
