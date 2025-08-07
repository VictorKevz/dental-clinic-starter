import { WorkingHours } from "../data/workingHours";
export const formatWorkingHours = (workingHour: WorkingHours): string => {
  if (workingHour.closed) {
    return "Closed";
  }

  if (workingHour.time) {
    return workingHour.time;
  }

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

export const isDayClosed = (workingHour: WorkingHours): boolean => {
  return workingHour.closed === true;
};
