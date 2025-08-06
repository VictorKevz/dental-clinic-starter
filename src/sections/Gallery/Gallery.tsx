import { useEffect, useState, useRef, useCallback } from "react";
import { galleryData } from "../../data/galleryData";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { ControlButton } from "../../components/Buttons/ControlsButton";
import { PaginationDots } from "../../components/Buttons/PaginationDots";

export const Gallery = () => {
  const [currentindex, setCurrrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const totalData = galleryData.length;
  const nextSlide = useCallback(() => {
    setCurrrentIndex((prev) => (prev === totalData - 1 ? 0 : prev + 1));
  }, [totalData]);

  const prevSlide = () => {
    setCurrrentIndex((prev) => (prev === 0 ? totalData - 1 : prev - 1));
  };
  const updateSlides = (i: number) => {
    setCurrrentIndex(i);
  };
  const { image, title, description } = galleryData[currentindex];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let intervalId: ReturnType<typeof setInterval> | null = setInterval(
      nextSlide,
      2500
    );

    const pause = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const resume = () => {
      if (!intervalId) {
        intervalId = setInterval(nextSlide, 3200);
      }
    };

    node.addEventListener("mouseenter", pause);
    node.addEventListener("mouseleave", resume);

    return () => {
      if (intervalId) clearInterval(intervalId);
      node.removeEventListener("mouseenter", pause);
      node.removeEventListener("mouseleave", resume);
    };
  }, [nextSlide]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="w-full px-4 md:px-6 flex h-[calc(100dvh-5.5rem)] items-center justify-center relative z-20 cursor-pointer"
    >
      <header className="max-w-2xl text-center">
        <h2 className="text-4xl md:text-6xl !text-white">{title}</h2>
        <p className="text-base md:text-xl !text-white/95">{description}</p>
      </header>

      <div className="absolute left-4 bottom-2 sm:bottom-[50%]">
        <ControlButton onControl={prevSlide} Icon={ArrowBackIos} side="left" />
      </div>
      <div className="absolute bottom-2 sm:bottom-[50%] right-4">
        <ControlButton
          onControl={nextSlide}
          Icon={ArrowForwardIos}
          side="right"
        />
      </div>
      <div className="w-full grid md:grid-cols-2 mx-auto absolute bottom-2">
        <PaginationDots
          totalPages={totalData}
          onUpdatePage={updateSlides}
          currentPage={currentindex}
        />
      </div>

      <figure className="w-full h-full pointer-events-none absolute -z-10">
        <img
          src={image}
          alt={`Image showing: ${description}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="overlay"></div>
    </section>
  );
};
