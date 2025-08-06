interface CTALinkProps {
  text: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
}

export const CTALink = ({
  variant,
  text,
  href,
  className = "",
  icon,
}: CTALinkProps) => {
  const baseClasses =
    "h-12 min-w-max w-full w-full gap-1 rounded-lg px-4 [box-shadow:var(--shadow-primary)] dark:hover:scale-95 hover:-translate-x-1 hover:text-[var(--color-text-on-primary)]";

  const variantClasses = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-text-on-primary)] hover:bg-[var(--color-accent)] hover:opacity-90",
    secondary:
      "bg-[var(--color-bg)] text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]",
  };
  return (
    <a
      rel="noopener noreferrer"
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon} {text}
    </a>
  );
};
