import { useState } from "react";
import ToggleButton from "../ToggleButton";
import { Close, Menu } from "@mui/icons-material";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const navLinks = [
    { text: "Services", url: "#services" },
    { text: "Gallery", url: "#gallery" },
    { text: "Contact", url: "#contact" },
    { text: "Testimonials", url: "#testimonials" },
  ];
  return (
    <div className="w-full">
      <nav className="w-full flex items-center justify-between sticky top-0 h-[4.5rem] md:h-[5.5rem] bg-[var(--color-bg-secondary)] [box-shadow:var(--shadow-primary)] px-4 z-100">
        <div className="w-full flex items-center md:gap-6 relative">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-[var(--color-text-primary)] md:!hidden"
          >
            <span>
              {isMenuOpen ? (
                <Close fontSize="large" />
              ) : (
                <Menu fontSize="large" />
              )}
            </span>
          </button>
          <a href="#" className="flex items-center gap-1">
            <img src="/logo.png" alt="" className="w-8 sm:w-12 h-auto" />
            <h1 className="text-sm sm:text-2xl text-[var(--color-text-primary)]">
              ZimSmile
            </h1>
          </a>
          <ul
            className={`text-[var(--color-text-secondary)] ${
              isMenuOpen
                ? "flex flex-col gap-8 items-start absolute top-full mt-[2rem] left-0 md:relative"
                : "hidden md:flex items-center gap-4"
            }`}
          >
            {navLinks.map((link) => {
              return (
                <li key={link.text}>
                  <a
                    href={link.url}
                    rel="noopener noreferrer"
                    className="nav-link relative w-fit text-xl font-bold md:font-normal md:text-base hover:text-[var(--color-accent)]"
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center justify-end max-w-[15rem] w-full gap-3">
          <a
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8.5 md:h-12 max-w-[8rem] w-full bg-[var(--color-primary)] rounded-lg px-4 text-[var(--color-text-primary)] font-medium border border-transparent hover:border-[var(--color-primary)] hover:bg-transparent"
          >
            Book Now
          </a>
          <ToggleButton />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-[4.5rem] left-0 w-full h-screen bg-[#00aaff1d] backdrop-blur-[.4rem] z-10"></div>
      )}
    </div>
  );
};
