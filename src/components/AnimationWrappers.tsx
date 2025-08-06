import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface AnimationWrapperProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

// Generic scroll-triggered animation wrapper
export const ScrollAnimationWrapper = ({
  children,
  variants,
  className = "",
  delay = 0,
  once = true,
}: AnimationWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
};

// Fade in from bottom wrapper
export const FadeInUp = ({
  children,
  className = "",
  delay = 0,
}: Omit<AnimationWrapperProps, "variants">) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Simple fade in wrapper
export const FadeIn = ({
  children,
  className = "",
  delay = 0,
}: Omit<AnimationWrapperProps, "variants">) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scale in wrapper
export const ScaleIn = ({
  children,
  className = "",
  delay = 0,
}: Omit<AnimationWrapperProps, "variants">) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered children wrapper
export const StaggeredContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual staggered item (to be used inside StaggeredContainer)
export const StaggeredItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

// Conditional animation wrapper that respects accessibility
export const AccessibleAnimation = ({
  children,
  variants,
  className = "",
  fallbackClassName = "",
}: {
  children: ReactNode;
  variants: Variants;
  className?: string;
  fallbackClassName?: string;
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (prefersReducedMotion) {
    return (
      <div className={`${className} ${fallbackClassName}`}>{children}</div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
