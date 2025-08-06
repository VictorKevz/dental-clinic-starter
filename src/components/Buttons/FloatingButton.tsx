import { useState } from "react";
import { Close, List } from "@mui/icons-material";
import { ThemeButton } from "./ThemeButton";
import { ScrollButton } from "./ScrollButton";

export const FloatingButton = () => {
  const [showItems, setShowItems] = useState(false);
  const toggleItems = () => {
    setShowItems((prev) => !prev);
  };
  return (
    <div
      className={`fixed bottom-5 right-6 h-auto w-fit z-80 flex flex-col items-center ${
        showItems
          ? "bg-[var(--color-overlay)] backdrop-blur-[.2rem] rounded-full border border-[var(--color-accent)] px-4 pt-5 pb-2 [box-shadow:var(--shadow-color)]"
          : ""
      }`}
    >
      {showItems && (
        <div className="flex flex-col gap-4 mb-5">
          <ThemeButton />
          <ScrollButton />
        </div>
      )}
      <button
        type="button"
        onClick={toggleItems}
        className={` rounded-full [box-shadow:var(--shadow-color)] ${
          showItems
            ? "bg-[var(--color-error)] h-10 w-10 !text-[var(--color-text-on-primary)]"
            : "h-14 w-14 bg-[var(--color-overlay)] backdrop-blur-xl border border-[var(--color-accent)] text-[var(--color-text-primary)]"
        } `}
      >
        {showItems ? <Close /> : <List />}
      </button>
    </div>
  );
};
