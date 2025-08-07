import { ArrowDownward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { CTALink } from "../../components/CTALink";
import {
  StaggeredContainer,
  StaggeredItem,
} from "../../components/AnimationWrappers";

const Hero = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string = "#services"
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = 60;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-[calc(100dvh-5.5rem)] flex flex-col items-center justify-center px-4 md:px-6 z-20"
    >
      <StaggeredContainer className="text-center max-w-screen-md w-full z-20">
        <StaggeredItem>
          <header className="text-center max-w-screen-md w-full">
            <h2 className="!text-[var(--color-text-on-primary)] text-3xl sm:text-5xl">
              Modern Dental Care <br /> Delivered with a Smile.
            </h2>
          </header>
        </StaggeredItem>

        <StaggeredItem>
          <p className="text-lg !text-[var(--color-text-on-primary)] opacity-90 mt-4">
            World-class dental services, accessible and affordable in Harare.
            Experience gentle care, advanced technology, and a welcoming team
            dedicated to your smile.
          </p>
        </StaggeredItem>
      </StaggeredContainer>

      <StaggeredContainer className="max-w-lg w-full flex flex-col items-center justify-center sm:flex-row gap-3 mt-8 z-20">
        <StaggeredItem className="max-w-[16rem] w-full">
          <CTALink
            text="Book Appointment"
            href="#contact"
            variant="primary"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          />
        </StaggeredItem>

        <StaggeredItem className="max-w-[16rem] w-full">
          <CTALink
            text="View Our Services"
            href="#services"
            variant="secondary"
            onClick={(e) => handleSmoothScroll(e, "#services")}
          />
        </StaggeredItem>
      </StaggeredContainer>
      <div className="pointer-events-none absolute inset-0 h-full w-full -z-10">
        <picture className="h-full w-full">
          <source
            media="(min-width: 550px)"
            srcSet="/hero/desktop-hero-bg.webp"
          />

          <img
            src="/hero/mobile-hero-bg.webp"
            alt="Smiling African dentist with a child on the dental chair"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      <motion.a
        href="#services"
        onClick={handleSmoothScroll}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        className="absolute w-16 h-16 bottom-6 flex items-center justify-center rounded-full bg-[var(--color-overlay)] shadow-lg cursor-pointer hover:bg-opacity-80 transition-all duration-300"
      >
        <motion.span
          initial={{ translateY: -1 }}
          animate={{ translateY: 2 }}
          transition={{ repeat: Infinity, duration: 0.7, ease: "easeInOut" }}
          className=" flex items-center justify-center text-[var(--color-text-primary)]"
        >
          <ArrowDownward fontSize="large" />
        </motion.span>
      </motion.a>
      <div className="overlay"></div>
    </section>
  );
};

export default Hero;
