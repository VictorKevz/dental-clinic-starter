import { Card } from "./components/Card";
import ToggleButton from "./components/ToggleButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main className="w-full min-h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center gap-4 relative">
        <Card />
        <ToggleButton />
      </main>
    </ThemeProvider>
  );
}

export default App;
