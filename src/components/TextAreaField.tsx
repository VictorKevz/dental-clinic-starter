import { TextAreaChangeEvent, TextAreaFieldProps } from "../types/contact";

export const TextAreaField = ({ message, onChange }: TextAreaFieldProps) => {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor="message"
        className="text-[var(--color-text-primary)] ml-1 mb-1.5 font-medium"
      >
        Your Message
      </label>
      <textarea
        name="message"
        id="message"
        value={message.message}
        rows={4}
        placeholder="I would like to..."
        onChange={(e: TextAreaChangeEvent) => onChange(e)}
        className={`w-full border border-[var(--color-muted)] text-[var(--color-text-primary)] px-4 py-3 rounded-lg placeholder:text-[var(--color-text-secondary)] resize-none`}
      ></textarea>
    </div>
  );
};
