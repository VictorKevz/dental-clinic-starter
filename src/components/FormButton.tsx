import React from "react";

interface FormButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const FormButton = ({
  type,
  onClick,
  variant,
  children,
  className = "",
  icon,
}: FormButtonProps) => {
  const baseClasses =
    "h-12 min-w-max sm:max-w-[14rem] w-full gap-1 rounded-lg px-4";

  const variantClasses = {
    primary: "bg-[var(--color-primary)] text-[var(--color-text-on-primary)]",
    secondary:
      "bg-[var(--color-bg-hover)] text-[var(--color-text-primary)] [box-shadow:var(--shadow-primary)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon} {children}
    </button>
  );
};
