import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

const ToggleButton = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      type="button"
      className="min-w-8.5 min-h-8.5 md:h-12 md:min-w-12  rounded-full bg-[var(--color-bg)] [box-shadow:var(--shadow-primary)] text-[var(--color-text-secondary)] border border-[var(--color-primary)]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <DarkMode /> : <LightMode />}
    </button>
  );
};

export default ToggleButton;
