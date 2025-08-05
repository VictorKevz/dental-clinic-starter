import { InputChangeEvent, InputTextFieldProps } from "../types/contact";

export const InputTextField = ({
  field,
  onChange,
  errorMessage,
}: InputTextFieldProps) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor={field.id}
        className="text-[var(--color-text-primary)] ml-1 mb-1.5 font-medium"
      >
        {field.label}
      </label>
      <input
        type="text"
        id={field.id}
        name={field.name}
        value={field.value}
        placeholder={field.placeholder}
        onChange={(e: InputChangeEvent) => onChange(e)}
        className={`h-12 w-full border  text-[var(--color-text-primary)] px-4 rounded-lg placeholder:text-[var(--color-text-secondary)] ${
          errorMessage
            ? "border-[var(--color-error)]"
            : "border-[var(--color-muted)]"
        }`}
      />
      {errorMessage && (
        <span className="text-xs text-[var(--color-error)] pl-4 mt-1">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
