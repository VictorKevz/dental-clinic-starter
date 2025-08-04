import { useEffect, useState } from "react";
import { testimonials } from "./testimonialData";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Reviews,
  Star,
} from "@mui/icons-material";
import { ControlButton } from "../../components/ControlsButton";
import { PaginationDots } from "../../components/PaginationDots";

export const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const pageSize = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / pageSize);

  const currentTestimonials = testimonials.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  const updatePage = (i: number) => {
    setCurrentPage(i);
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  return (
    <section
      id="testimonials"
      className="py-16 px-4 md:px-6 w-full flex flex-col items-center bg-[var(--color-bg-secondary)]"
    >
      <header className="flex flex-col items-center text-center max-w-2xl">
        <span className="uppercase font-medium text-lg text-[var(--color-accent)] flex gap-1 items-center">
          <Reviews /> Our Clients Vouch for us
          <Reviews />
        </span>
        <h2 className="text-3xl md:text-5xl">What Our Clients Say</h2>
        <p className="text-base md:text-lg text-[var(--color-text-secondary)]">
          Don't just take our word for it—see what our clients have to say about
          their experiences with us. Your satisfaction is our top priority, and
          your feedback inspires us to keep improving.
        </p>
      </header>
      <div className="max-w-screen-xl w-full flex flex-col items-center justify-center relative mt-6">
        <div className="w-full flex gap-4 justify-end">
          <ControlButton onControl={prevPage} Icon={ArrowBackIos} side="left" />
          <ControlButton
            onControl={nextPage}
            Icon={ArrowForwardIos}
            side="right"
          />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-8 relative mt-6">
          {currentTestimonials.map((card) => {
            return (
              <article
                key={card.name}
                className="w-full bg-[var(--color-bg-hover)] rounded-xl [box-shadow:var(--shadow-primary)]"
              >
                <header className="w-full flex items-center justify-between gap-5 bg-[var(--color-bg)] rounded-t-xl px-4 py-6">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={card.avatar}
                      className="w-14 h-14 rounded-full border border-[var(--color-warning)]"
                      alt={`Profile picture of ${card.name}`}
                    />
                    <h3 className="flex flex-col gap-1 text-lg sm:text-xl">
                      {card.name}
                      <span className="text-sm text-[var(--color-warning)]">
                        {card.title}
                      </span>
                    </h3>
                  </div>
                  <ul className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <li key={i} className="text-[var(--color-warning)]">
                        <Star fontSize="small" />
                      </li>
                    ))}
                  </ul>
                </header>
                <footer className="w-full rounded-b-xl px-4 py-6">
                  <p className="text-base text-[var(--color-text-primary)]">
                    {card.quote}
                  </p>
                </footer>
              </article>
            );
          })}
          <PaginationDots
            totalPages={totalPages}
            onUpdatePage={updatePage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
};
