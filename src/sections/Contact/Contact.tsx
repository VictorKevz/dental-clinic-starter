import { WorkingHours } from "./WorkingHours";
import patternRight from "../../assets/images/pattern-right.svg";
import { ContactPhone } from "@mui/icons-material";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full relative flex flex-col items-center justify-center px-4 md:px-6 pt-24 pb-16 z-20 overflow-hidden"
    >
      <header className="w-full flex flex-col items-center text-center">
        <span className="uppercase font-medium text-sm text-[var(--color-accent)] flex gap-1 items-center tracking-wide">
          <ContactPhone className="text-[var(--color-info)]" /> Our Clients
          Vouch for us
          <ContactPhone className="text-[var(--color-info)]" />
        </span>
        <h2 className="text-3xl md:text-5xl">Get In Touch Today</h2>
        <p className="text-base md:text-lg text-[var(--color-text-secondary)]">
          We'd love to hear from you! Reach out with your questions or feedback.
        </p>
      </header>
      <div className="max-w-screen-xl w-full grid lg:grid-cols-3 items-end justify-center gap-10 mt-10">
        <form className="w-full h-full col-span-2 bg-[var(--color-bg-hover)] rounded-xl min-h-[20vh] [box-shadow:var(--shadow-primary)]">
          My Form Here!
        </form>
        <WorkingHours />
      </div>
      <figure className="w-full pointer-events-none absolute right-0 top-0 -z-10 opacity-5">
        <img
          src={patternRight}
          alt=""
          className="h-full w-full object-cover scale-150 lg:scale-100"
        />
      </figure>
    </section>
  );
};
