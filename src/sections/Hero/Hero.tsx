import { ArrowDownward } from "@mui/icons-material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[calc(100dvh-5.5rem)] flex flex-col items-center justify-center px-4 md:px-6 z-50"
    >
      <header className="text-center max-w-screen-md w-full">
        <h2 className="text-[var(--color-text-primary)] text-2xl sm:text-5xl">
          Modern Dental Care <br /> Delivered with a Smile.
        </h2>
        <p className="text-lg text-[var(--color-text-secondary)]">
          World-class dental services, accessible and affordable in Harare.
          Experience gentle care, advanced technology, and a welcoming team
          dedicated to your smile.
        </p>
      </header>
      <footer className="max-w-lg w-full flex flex-col justify-center sm:flex-row gap-3 mt-8">
        <a
          href=""
          className="h-12 w-full font-medium rounded-lg bg-[var(--color-primary)] text-[var(--color-text-on-primary)]"
        >
          Book Appointment
        </a>
        <a
          href=""
          className="h-12 w-full font-medium rounded-lg bg-[var(--color-bg)] text-[var(--color-text-primary)]"
        >
          View Our Services
        </a>
      </footer>
      <div className="pointer-events-none absolute inset-0 h-full w-full -z-10">
        <picture className="h-full w-full">
          <img
            src="/hero/mobile-bg.webp"
            alt="Victor Chatbot Background"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
      <div className="absolute w-full h-full bg-[var(--color-overlay)] -z-5 backdrop-blur-[.1rem] saturate-110"></div>

      <a
        href="#services"
        className="absolute w-16 h-16 bottom-6 flex items-center justify-center rounded-full bg-[var(--color-overlay)] shadow-lg"
      >
        <motion.span
          initial={{ translateY: -1 }}
          animate={{ translateY: 2 }}
          transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
          className=" flex items-center justify-center text-[var(--color-text-primary)]"
        >
          <ArrowDownward fontSize="large" />
        </motion.span>
      </a>
    </section>
  );
};

export default Hero;
