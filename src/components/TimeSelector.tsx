import {
  AccessTime,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import React, { useState } from "react";
import { WorkingHoursData } from "../data/workingHours";

interface TimeSelectorProps {
  selectedDate?: Date | null;
  selectedTime?: string;
  onChange?: (timeValue: string) => void;
  disabled?: boolean;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedDate,
  selectedTime = "",
  onChange,
  disabled = false,
}) => {
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  // Generate time slots for the selected date
  const getTimeSlots = (date: Date | null) => {
    if (!date) return [];

    const dayOfWeek = date.getDay();
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = dayNames[dayOfWeek];
    const workingDay = WorkingHoursData.find((day) => day.day === dayName);

    if (
      workingDay?.closed ||
      !workingDay?.startHour ||
      workingDay.endHour === undefined
    ) {
      return [];
    }

    const slots = [];
    const startMinutes = workingDay.startHour * 60;
    const endMinutes = workingDay.endHour * 60 + (workingDay.endMinute || 0);

    for (let minutes = startMinutes; minutes < endMinutes; minutes += 15) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const period = hours >= 12 ? "PM" : "AM";
      const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
      const timeString = `${displayHour}:${mins
        .toString()
        .padStart(2, "0")} ${period}`;
      slots.push({
        value: `${hours}:${mins.toString().padStart(2, "0")}`,
        display: timeString,
      });
    }

    return slots;
  };

  const timeSlots = getTimeSlots(selectedDate || null);
  const isDisabled = disabled || !selectedDate || timeSlots.length === 0;

  // Handle time selection
  const handleTimeSelect = (timeValue: string) => {
    setShowTimeDropdown(false);
    onChange?.(timeValue);
  };

  return (
    <div className="w-full relative">
      <button
        type="button"
        onClick={() => setShowTimeDropdown(!showTimeDropdown)}
        disabled={isDisabled}
        className="w-full h-12 flex items-center !justify-between px-4 md:px-2 font-medium border border-[var(--color-muted)] text-[var(--color-text-primary)] bg-[var(--color-bg-secondary)] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-[var(--color-accent)] transition-colors"
      >
        <span className="flex items-center gap-1">
          <AccessTime className="text-[var(--color-primary)]" />
          {selectedTime
            ? timeSlots.find((slot) => slot.value === selectedTime)?.display ||
              selectedTime
            : "Select Time"}
        </span>
        <span className="text-[var(--color-primary)]">
          {showTimeDropdown ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </span>
      </button>

      {/* Time Dropdown */}
      {showTimeDropdown && timeSlots.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-1 bg-[var(--color-bg-secondary)] border border-[var(--color-muted)] rounded-lg shadow-lg max-h-48 overflow-y-auto z-50">
          {timeSlots.map((slot) => (
            <li key={slot.value} className="w-full">
              <button
                onClick={() => handleTimeSelect(slot.value)}
                className="w-full px-4 py-2 text-left hover:bg-[var(--color-bg-hover)] text-[var(--color-text-primary)] transition-colors"
              >
                {slot.display}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
