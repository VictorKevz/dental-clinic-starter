import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { DropDownProps } from "../types/contact";
import { servicesData } from "../data/servicesData";

export const DropDown = ({ onSelect, selections }: DropDownProps) => {
  return (
    <ul className="w-full absolute top-full mt-2 bg-[var(--color-bg-hover)] rounded-lg px-4 py-5 [box-shadow:var(--shadow-primary)] z-50">
      {servicesData.map((service) => {
        const isSelected = selections.includes(service.title);
        return (
          <li
            key={service.id}
            className="w-full py-2 text-[var(--color-text-primary)]"
          >
            <button
              type="button"
              onClick={() => onSelect(service.title)}
              className="w-full !justify-between gap-4"
            >
              {service.title}
              <span className="text-[var(--color-accent)]">
                {isSelected ? <CheckBox /> : <CheckBoxOutlineBlank />}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
