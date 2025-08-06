import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

interface CounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const AnimatedCounter = ({
  value,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
}: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={className}>
      {prefix}
      <CountUp
        start={0}
        end={isInView ? value : 0}
        duration={duration}
        separator=","
        useEasing={true}
        preserveValue={false}
      />
      {suffix}
    </span>
  );
};
