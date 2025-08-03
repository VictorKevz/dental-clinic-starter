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
    <div className="w-full sticky top-0 z-100">
      <nav className="w-full flex items-center justify-between relative h-[4.5rem] md:h-[5.5rem] bg-[var(--color-bg-secondary)] [box-shadow:var(--shadow-primary)] px-4 md:px-6 z-100">
        <div className="w-full flex items-center gap-8">
          <div className="flex items-center gap-1">
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
            <a href="#" className="gap-1">
              <img src="/logo.png" alt="" className="w-8 md:w-10 h-auto" />
              <h1 className="text-lg text-[var(--color-text-primary)] uppercase mt-1">
                PearlDent
              </h1>
            </a>
          </div>
          <ul
            className={`text-[var(--color-text-secondary)] ${
              isMenuOpen
                ? "w-full bg-[var(--color-bg-secondary)] px-4 py-6 flex flex-col gap-8 items-center absolute top-full mt-2 left-0 md:relative"
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
            <li className="w-full">
              <a
                href="#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="md:!hidden h-8.5 md:h-12  w-full bg-[var(--color-primary)] rounded-lg px-4 text-[var(--color-text-primary)] font-medium border border-transparent hover:border-[var(--color-primary)] hover:bg-transparent"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-end max-w-[15rem] w-full gap-3">
          <a
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="!hidden md:!flex h-8.5 w-fit md:h-12 md:max-w-[12rem] md:w-full bg-[var(--color-primary)] rounded-lg px-4 text-[var(--color-text-on-primary)] font-medium border border-transparent hover:border-[var(--color-primary)] hover:bg-transparent"
          >
            Book Appointment
          </a>
          <ToggleButton />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[var(--color-overlay)] backdrop-blur-[.3rem] z-60"></div>
      )}
    </div>
  );
};
