import patternRight from "../assets/images/pattern-left.svg";
import { AnimatedCounter } from "./AnimatedCounter";

export const Stats = () => {
  return (
    <article className="w-full min-h-[40dvh] 2xl:min-h-[30dvh] relative flex items-center justify-center px-6 py-8  bg-[var(--color-primary)] z-20 overflow-hidden">
      <ul className="max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-5">
        {statsData.map((item, index) => (
          <li key={item.number} className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl !text-[var(--color-text-on-primary)]">
              <AnimatedCounter
                value={item.number}
                suffix="+"
                duration={2 + index * 0.5}
                className="font-bold"
              />
            </h3>
            <p className="text-base md:text-lg !text-[var(--color-text-on-primary)] opacity-80 -mt-1">
              {item.caption}
            </p>
          </li>
        ))}
      </ul>
      <figure className="pointer-events-none absolute right-0 -z-10 h-full w-full  opacity-4.5">
        <img
          src={patternRight}
          alt=""
          className="h-full w-full object-cover scale-150 md:scale-105"
        />
      </figure>
    </article>
  );
};

const statsData = [
  { number: 150, caption: "Procedures Done" },
  { number: 20, caption: "Years Experience" },
  { number: 5, caption: "Dental Experts" },
  { number: 1000, caption: "Smiles Created" },
];
