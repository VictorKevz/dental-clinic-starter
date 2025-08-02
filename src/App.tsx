import { Navbar } from "./components/Header/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="w-full min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-start relative">
        <Navbar />
      </main>
    </ThemeProvider>
  );
}

export default App;
