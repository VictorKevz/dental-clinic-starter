import { useEffect, useState, useRef, useCallback } from "react";
import { galleryData } from "../../data/galleryData";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { ControlButton } from "../../components/Buttons/ControlsButton";
import { PaginationDots } from "../../components/Buttons/PaginationDots";
import { motion, AnimatePresence } from "framer-motion";
import { SlideVariants, TextFadeVariants } from "../../variants";

export const Gallery = () => {
  const [currentindex, setCurrrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);

  const totalData = galleryData.length;
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrrentIndex((prev) => (prev === totalData - 1 ? 0 : prev + 1));
  }, [totalData]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrrentIndex((prev) => (prev === 0 ? totalData - 1 : prev - 1));
  };

  const updateSlides = (i: number) => {
    setDirection(i > currentindex ? 1 : -1);
    setCurrrentIndex(i);
  };
  const { image, mobileImage, title, description } = galleryData[currentindex];

  const swipeConfidenceThreshold = 5000; // Reduced threshold for easier swipes
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    let intervalId: ReturnType<typeof setInterval> | null = setInterval(
      nextSlide,
      4000
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
      className="w-full px-4 md:px-6 flex h-[calc(100dvh-5.5rem)] items-center justify-center relative z-20 cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.header
          key={currentindex + "text"}
          custom={direction}
          variants={TextFadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="max-w-2xl text-center z-10 relative"
        >
          <h2 className="text-4xl md:text-6xl !text-white">{title}</h2>
          <p className="text-base md:text-xl !text-white/95">{description}</p>
        </motion.header>
      </AnimatePresence>

      <div className="absolute left-4 bottom-2 sm:bottom-[50%] z-20">
        <ControlButton onControl={prevSlide} Icon={ArrowBackIos} side="left" />
      </div>
      <div className="absolute bottom-2 sm:bottom-[50%] right-4 z-20">
        <ControlButton
          onControl={nextSlide}
          Icon={ArrowForwardIos}
          side="right"
        />
      </div>
      <div className="w-full grid md:grid-cols-2 mx-auto absolute bottom-2 z-20">
        <PaginationDots
          totalPages={totalData}
          onUpdatePage={updateSlides}
          currentPage={currentindex}
        />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.figure
          key={currentindex}
          custom={direction}
          variants={SlideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              nextSlide();
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide();
            }
          }}
          className="w-full h-full absolute -z-10"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={image} />
            <img
              src={mobileImage}
              alt={`Image showing: ${description}`}
              className="w-full h-full object-cover"
            />
          </picture>
        </motion.figure>
      </AnimatePresence>

      <div className="overlay"></div>
    </section>
  );
};
