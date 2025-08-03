import { Star } from "@mui/icons-material";
import patterRight from "../../assets/images/pattern-right.svg";
import { servicesData } from "./servicesData";
export const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-4 md:px-6 pt-24 pb-16 flex items-center flex-col relative overflow-hidden z-20"
    >
      <header className="w-full flex flex-col md:flex-row items-start justify-between mb-8 z-20">
        <div className="max-w-2xl">
          <span className="flex items-center text-base text-[var(--color-accent)] font-semibold uppercase">
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
          className="max-w-[15rem] w-full px-4 h-12 rounded-lg bg-[var(--color-primary)] text-[var(--color-text-on-primary)] font-medium hover:bg-[var(--color-accent)] hover:scale-90 hover:opacity-90"
        >
          View All Services
        </a>
      </header>
      <div className="w-full grid gap-6 md:grid-cols-2 2xl:grid-cols-4 mx-auto z-20 mt-10">
        {servicesData.map((service) => (
          <article
            key={service.title}
            className="w-full relative rounded-xl bg-[var(--color-bg-secondary)] [box-shadow:var(--shadow-primary)]"
          >
            <figure className="w-full h-[40vh] rounded-t-xl z-5">
              <img
                src={service.cover}
                alt={`Cover image of ${service.description}`}
                className="h-full w-full object-cover rounded-t-xl"
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
            <span className="absolute top-3 right-4 w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center z-20">
              <img src={service.icon} alt="" className="w-8 h-auto" />
            </span>
          </article>
        ))}
      </div>

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
