import { Star } from "@mui/icons-material";
import patterRight from "../../assets/images/pattern-right.svg";
import { servicesData } from "../../data/servicesData";
import {
  FadeInUp,
  StaggeredContainer,
  StaggeredItem,
  ScaleIn,
} from "../../components/AnimationWrappers";
export const Services = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
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
      id="services"
      className="w-full px-4 md:px-6 pt-12 pb-16 flex items-center flex-col relative overflow-hidden z-20"
    >
      <FadeInUp className="w-full flex flex-col text-center items-center justify-between mb-8 z-20">
        <div className="max-w-2xl text-center">
          <span className="flex items-center justify-center text-base text-[var(--color-accent)] font-semibold uppercase">
            <Star className="text-[var(--color-warning)] scale-70" /> Committed
            to excellence
            <Star className="text-[var(--color-warning)] scale-70" />
          </span>
          <h2 className="text-3xl md:text-5xl">Our Available Services</h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mt-2 max-w-2xl">
            Discover a range of professional dental services designed to keep
            your smile healthy and beautiful. Our experienced team is dedicated
            to providing personalized care for every patient.
          </p>
        </div>
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
          className="max-w-[15rem] w-full mt-5 px-4 h-12 rounded-lg bg-[var(--color-primary)] text-[var(--color-text-on-primary)] font-medium hover:bg-[var(--color-accent)] hover:scale-90 hover:opacity-90 transition-all duration-300 flex items-center justify-center cursor-pointer"
        >
          View All Services
        </a>
      </FadeInUp>
      <StaggeredContainer
        className="w-full grid gap-6 md:grid-cols-2 2xl:grid-cols-4 mx-auto z-20 mt-8"
        staggerDelay={0.15}
      >
        {servicesData.map((service) => (
          <StaggeredItem key={service.title}>
            <article className="w-full relative rounded-xl bg-[var(--color-bg-secondary)] [box-shadow:var(--shadow-primary)] hover:[box-shadow:var(--shadow-hover)] transition-all duration-300 overflow-hidden">
              <figure className="w-full h-[40vh] rounded-t-xl z-5 overflow-hidden">
                <img
                  src={service.cover}
                  alt={`Cover image of ${service.description}`}
                  className="h-full w-full object-cover rounded-t-xl hover:scale-110 transition-transform duration-500 ease-out hover:cursor-pointer"
                />
              </figure>
              <div className="w-full p-4 py-6 relative">
                <h3 className="text-xl md:text-2xl text-[var(--color-text-primary)]">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  {service.description}
                </p>
              </div>
              <ScaleIn
                className="absolute top-3 right-4 w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center z-20"
                delay={0.3}
              >
                <img src={service.icon} alt="" className="w-8 h-auto" />
              </ScaleIn>
            </article>
          </StaggeredItem>
        ))}
      </StaggeredContainer>

      <figure className="pointer-events-none absolute left-0 top-0 -z-10 h-[30%] xl:h-full w-full">
        <img
          src={patterRight}
          alt=""
          className="object-cover h-full w-full dark:opacity-5 opacity-15 2xl:scale-150"
        />
      </figure>
    </section>
  );
};
