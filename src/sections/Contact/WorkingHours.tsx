import { Call, Email } from "@mui/icons-material";
import { WorkingHoursData } from "../../data/workingHours";
import { formatWorkingHours, isDayClosed } from "../../utils/timeFormatter";

export const WorkingHours = () => {
  return (
    <article className="w-full h-full flex flex-col justify-between gap-10 col-span-2 lg:col-span-1 pb-6  bg-[var(--color-bg-hover)] rounded-xl [box-shadow:var(--shadow-primary)]">
      <header className="w-full  bg-[var(--color-bg-secondary)] px-4 lg:px-6 py-6 rounded-t-xl z-20 overflow-clip">
        <h3 className="text-2xl md:text-3xl">Working Hours</h3>
        <p className="text-base pb-4">
          We are open throughout the week with flexible hours to serve you
          better. Feel free to contact us for appointments or inquiries during
          our working hours.
        </p>
        <div className="w-full flex flex-col md:flex-row lg:flex-col gap-2 py-4 border-t border-[var(--color-muted)]">
          <p className="w-full flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-[var(--color-bg-hover)] flex items-center justify-center [box-shadow:var(--shadow-color)]">
              <Call fontSize="small" className="text-[var(--color-info)]" />
            </span>
            +263 771 651 298
          </p>
          <p className="w-full flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-[var(--color-bg-hover)] flex items-center justify-center [box-shadow:var(--shadow-color)]">
              <Email fontSize="small" className="text-[var(--color-info)]" />
            </span>
            info@zimsmile.com
          </p>
        </div>
      </header>
      <ul className="w-full flex flex-col gap-3 divide-y divide-[#9999992e] px-4 lg:px-6">
        {WorkingHoursData.map((item) => (
          <li
            key={item.day}
            className="w-full flex items-center justify-between gap-5 font-bold py-2 text-[var(--color-text-primary)]"
          >
            {item.day}
            <span
              className={` ${
                isDayClosed(item)
                  ? "text-[var(--color-error)] font-medium uppercase"
                  : "text-[var(--color-info)] font-light"
              }`}
            >
              {formatWorkingHours(item)}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
