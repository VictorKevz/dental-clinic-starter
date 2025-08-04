export const WorkingHours = () => {
  return (
    <article className="w-full col-span-2 lg:col-span-1 pb-6  bg-[var(--color-bg-hover)] rounded-xl [box-shadow:var(--shadow-primary)]">
      <header className="w-full  bg-[var(--color-bg-secondary)] px-4 lg:px-6 py-6 rounded-t-xl z-20 overflow-clip">
        <h3 className="text-2xl md:text-4xl">Working Hours</h3>
        <p className="text-base">
          We are open throughout the week with flexible hours to serve you
          better. Feel free to contact us for appointments or inquiries during
          our working hours.
        </p>
      </header>
      <ul className="w-full flex flex-col gap-3 divide-y divide-[#9999993e] px-4 lg:px-6 mt-6">
        {WorkingHoursData.map((item) => (
          <li
            key={item.day}
            className="w-full flex items-center justify-between gap-5 font-bold py-2 text-[var(--color-text-primary)]"
          >
            {item.day}
            <span
              className={` ${
                item.day === "Sunday"
                  ? "text-[var(--color-error)] font-medium uppercase"
                  : "text-[var(--color-info)] font-light"
              }`}
            >
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const WorkingHoursData = [
  { day: "Monday", time: "8:00 AM – 5:30 PM" },
  { day: "Tuesday", time: "8:00 AM – 5:30 PM" },
  { day: "Wednesday", time: "8:00 AM – 5:30 PM" },
  { day: "Thursday", time: "8:00 AM – 5:30 PM" },
  { day: "Friday", time: "8:00 AM – 5:30 PM" },
  { day: "Saturday", time: "8:00 AM – 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];
