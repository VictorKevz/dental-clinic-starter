type PaginationDotsProps = {
  totalPages: number;
  onUpdatePage: (i: number) => void;
  currentPage: number;
};

export const PaginationDots = ({
  totalPages,
  onUpdatePage,
  currentPage,
}: PaginationDotsProps) => {
  return (
    <ul className="w-full flex items-center gap-1 justify-center md:col-span-2">
      {Array.from({ length: totalPages }, (_, i) => {
        const isCurrent = currentPage === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => onUpdatePage(i)}
              className={`h-2 w-2 rounded-full ${
                isCurrent
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-muted)]"
              }`}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};
