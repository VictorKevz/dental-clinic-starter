import { WorkingHours } from "../data/workingHours";

/**
 * Formats working hours data for display in the UI
 * @param workingHour - Working hour data from the centralized data source
 * @returns Formatted time string for display
 */
export const formatWorkingHours = (workingHour: WorkingHours): string => {
  // If the day is closed, return "Closed"
  if (workingHour.closed) {
    return "Closed";
  }

  // If we have the time string already formatted, use it
  if (workingHour.time) {
    return workingHour.time;
  }

  // Fallback: construct time string from startHour/endHour if needed
  if (
    workingHour.startHour !== undefined &&
    workingHour.endHour !== undefined
  ) {
    const startPeriod = workingHour.startHour >= 12 ? "PM" : "AM";
    const endPeriod = workingHour.endHour >= 12 ? "PM" : "AM";

    const startHour =
      workingHour.startHour > 12
        ? workingHour.startHour - 12
        : workingHour.startHour === 0
        ? 12
        : workingHour.startHour;
    const endHour =
      workingHour.endHour > 12
        ? workingHour.endHour - 12
        : workingHour.endHour === 0
        ? 12
        : workingHour.endHour;

    const endMinutes = workingHour.endMinute
      ? `:${workingHour.endMinute.toString().padStart(2, "0")}`
      : ":00";

    return `${startHour}:00 ${startPeriod} – ${endHour}${endMinutes} ${endPeriod}`;
  }

  return "Hours not available";
};

/**
 * Determines if a day should be styled as closed
 * @param workingHour - Working hour data
 * @returns boolean indicating if the day is closed
 */
export const isDayClosed = (workingHour: WorkingHours): boolean => {
  return workingHour.closed === true;
};
