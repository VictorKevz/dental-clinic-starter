import { CalendarToday } from "@mui/icons-material";
import React, { forwardRef, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimeSelector } from "./TimeSelector";

interface DateTimeSelectorProps {
  selectedDate?: Date | null;
  selectedTime?: string;
  onDateChange?: (date: Date | null) => void;
  onTimeChange?: (timeValue: string) => void;
  label?: string;
}

// Custom input component with calendar icon
interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder }, ref) => (
    <div className="relative w-full">
      <input
        className="date-time-picker-input pr-12"
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

export const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({
  selectedDate,
  selectedTime = "",
  onDateChange,
  onTimeChange,
}) => {
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
          customInput={<CustomInput />}
          calendarClassName="date-time-picker-calendar"
          wrapperClassName="date-time-picker-wrapper"
        />
      </div>

      {/* Time Selector */}
      <TimeSelector
        selectedDate={internalDate}
        selectedTime={selectedTime}
        onChange={handleTimeChange}
      />
    </fieldset>
  );
};
