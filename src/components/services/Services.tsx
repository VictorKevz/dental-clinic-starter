import { Star } from "@mui/icons-material";
import { servicesData } from "./servicesData";

export const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-4 py-16 flex items-center flex-col min-h-[calc(100dvh-20dvh)] relative overflow-hidden z-20"
    >
      <header className="w-full flex flex-col md:flex-row items-start md:items-center justify-between mb-8 z-20">
        <div>
          <span className="flex items-center text-base text-[var(--color-accent)] font-semibold uppercase">
            <Star className="text-[var(--color-warning)] scale-70" /> Committed
            to excellence
            <Star className="text-[var(--color-warning)] scale-70" />
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            Our Available Services
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] mt-2 max-w-2xl">
            Discover a range of professional dental services designed to keep
            your smile healthy and beautiful. Our experienced team is dedicated
            to providing personalized care for every patient.
          </p>
        </div>
        <a
          href="#"
          className="mt-4 md:mt-0 inline-block px-6 py-2 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-dark)] transition"
        >
          View All Services
        </a>
      </header>
      <div className=" w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto z-20">
        {servicesData.map((service) => (
          <article
            key={service.title}
            className="w-full relative rounded-xl bg-[var(--color-bg-secondary)] [box-shadow:var(--color-shadow)]"
          >
            <figure className="w-full h-[15rem] rounded-t-xl z-5">
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
              <p className="text-base text-[var(--color-text-secondary)] mt-1">
                {service.description}
              </p>
            </div>
            <span className="absolute top-3 right-4 w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center z-20">
              <img src={service.icon} alt="" className="w-8 h-auto" />
            </span>
          </article>
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 right-0 -z-10">
        <img
          src="/ui-deco.png"
          alt=""
          className=" h-auto w-[20rem] opacity-5 -rotate-15"
        />
      </div>
      <div className="max-w-screen-lg w-full relative flex items-center justify-between px-4 py-6 rounded-xl bg-[var(--color-bg-hover)] mt-8  z-20">
        <div>
          <h3 className="text-3xl text-[var(--color-text-primary)]">
            Get in touch today
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            We are more than happy to assist with all your
          </p>
        </div>
        <a
          href="#"
          className="mt-4 md:mt-0 inline-block px-6 py-2 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-dark)] transition"
        >
          View All Services
        </a>
        <div className="pointer-events-none absolute top-0 left-[50%] -z-10 overflow-hidden">
          <img
            src="/ui-deco.png"
            alt=""
            className=" h-auto w-[8rem] opacity-5 -rotate-15 object-cover"
          />
        </div>
      </div>
    </section>
  );
};
