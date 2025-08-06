import { useState } from "react";
// import ToggleButton from "../../components/ToggleButton";
import { Close, Menu } from "@mui/icons-material";
import { CTALink } from "../../components/CTALink";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const navLinks = [
    { text: "Home", url: "#" },
    { text: "Services", url: "#services" },
    { text: "Contact", url: "#contact" },
    { text: "Testimonials", url: "#testimonials" },
  ];
  return (
    <div className="w-full sticky top-0 z-100">
      <nav className="w-full flex items-center justify-between relative h-[4.5rem] md:h-[5.5rem] bg-[var(--color-bg-secondary)] [box-shadow:var(--shadow-primary)] px-4 md:px-6 z-100">
        <div className="flex items-center gap-1">
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
              ? "w-full bg-[var(--color-bg-secondary)] px-4 py-6 flex flex-col gap-8 items-center absolute top-full mt-2 left-0 lg:relative"
              : "hidden lg:flex items-center gap-4"
          }`}
        >
          {navLinks.map((link) => {
            return (
              <li key={link.text}>
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  className="nav-link relative w-fit text-xl !font-normal md:text-base hover:text-[var(--color-accent)]"
                >
                  {link.text}
                </a>
              </li>
            );
          })}
          <li className="w-full">
            <CTALink
              text="Book Appointment"
              href="#contact"
              variant="primary"
              className="lg:!hidden"
            />
          </li>
        </ul>
        <div className="flex items-center justify-end max-w-[15rem] w-full gap-3">
          <CTALink
            text="Book Appointment"
            href="#contact"
            variant="primary"
            className="!hidden lg:!flex h-8.5 w-fit lg:h-12 lg:max-w-[12rem] lg:w-full"
          />

          {/* <ToggleButton /> */}
          <button
            type="button"
            onClick={toggleMenu}
            className="text-[var(--color-text-primary)] lg:!hidden"
          >
            <span>
              {isMenuOpen ? (
                <Close fontSize="large" />
              ) : (
                <Menu fontSize="large" />
              )}
            </span>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[var(--color-overlay)] backdrop-blur-[.3rem] z-60"></div>
      )}
    </div>
  );
};
