import { CalendarToday } from "@mui/icons-material";
import { forwardRef, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimeSelector } from "./TimeSelector";

interface DateTimeSelectorProps {
  selectedDate?: Date | null;
  selectedTime?: string;
  onDateChange?: (date: Date | null) => void;
  onTimeChange?: (timeValue: string) => void;
  label?: string;
  dateError?: string;
  timeError?: string;
}

// Custom input component with calendar icon
interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
  hasError?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder, hasError }, ref) => (
    <div className="relative w-full">
      <input
        className={`date-time-picker-input pr-12 ${
          hasError ? "border-[var(--color-error)]" : ""
        }`}
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder={placeholder}
        readOnly
      />
      <button
        type="button"
        onClick={onClick}
        className="absolute right-4 md:right-2 top-1/2 transform -translate-y-1/2 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
      >
        <CalendarToday />
      </button>
    </div>
  )
);

CustomInput.displayName = "CustomInput";

export const DateTimeSelector = ({
  selectedDate,
  selectedTime = "",
  onDateChange,
  onTimeChange,
  dateError,
  timeError,
}: DateTimeSelectorProps) => {
  const [internalDate, setInternalDate] = useState<Date | null>(
    selectedDate || null
  );

  // Update internal date when prop changes
  useEffect(() => {
    setInternalDate(selectedDate || null);
  }, [selectedDate]);

  // Handle date change
  const handleDateChange = (date: Date | null) => {
    setInternalDate(date);
    onDateChange?.(date);
  };

  // Handle time change
  const handleTimeChange = (timeValue: string) => {
    onTimeChange?.(timeValue);
  };

  // Filter dates to exclude Sundays
  const filterDates = (date: Date) => {
    return date.getDay() !== 0; // Exclude Sundays
  };

  return (
    <fieldset className="w-full grid md:grid-cols-2 gap-4">
      {/* Date Picker */}
      <div className="w-full z-50">
        <DatePicker
          selected={internalDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          placeholderText="Select Date"
          minDate={new Date()}
          filterDate={filterDates}
          customInput={<CustomInput hasError={!!dateError} />}
          calendarClassName="date-time-picker-calendar"
          wrapperClassName="date-time-picker-wrapper"
        />
        {dateError && (
          <span className="text-xs text-[var(--color-error)] pl-4 mt-1 block">
            {dateError}
          </span>
        )}
      </div>

      {/* Time Selector */}
      <TimeSelector
        selectedDate={internalDate}
        selectedTime={selectedTime}
        onChange={handleTimeChange}
        errorMessage={timeError}
      />
    </fieldset>
  );
};
