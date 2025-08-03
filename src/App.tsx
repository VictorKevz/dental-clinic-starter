import { Navbar } from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import { Services } from "./components/services/Services";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="w-full min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-start relative">
        <Navbar />
        <Hero />
        <Services />
      </main>
    </ThemeProvider>
  );
}

export default App;
