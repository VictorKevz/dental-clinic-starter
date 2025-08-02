export const Card = () => {
  return (
    <div className="max-w-lg w-full min-h-52 bg-[var(--color-bg-secondary)] flex flex-col items-center justify-center gap-4 px-3 py-2.5 rounded-lg [box-shadow:var(--shadow-primary)]">
      <h1 className="text-4xl text-[var(--color-text-primary)]">
        Welcome to your project!
      </h1>
      <p className="text-base text-[var(--color-text-secondary)] mt-2">
        Kickstart your project with this customizable template.
      </p>
    </div>
  );
};
