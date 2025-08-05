// Working hours data for the dental clinic
export interface WorkingHours {
  day: string;
  time: string;
  startHour?: number;
  endHour?: number;
  endMinute?: number;
  closed?: boolean;
}

export const WorkingHoursData: WorkingHours[] = [
  {
    day: "Monday",
    time: "8:00 AM – 5:30 PM",
    startHour: 8, // 8:00 AM
    endHour: 17, // 5:00 PM
    endMinute: 30, // 5:30 PM
  },
  {
    day: "Tuesday",
    time: "8:00 AM – 5:30 PM",
    startHour: 8, // 8:00 AM
    endHour: 17, // 5:00 PM
    endMinute: 30, // 5:30 PM
  },
  {
    day: "Wednesday",
    time: "8:00 AM – 5:30 PM",
    startHour: 8, // 8:00 AM
    endHour: 17, // 5:00 PM
    endMinute: 30, // 5:30 PM
  },
  {
    day: "Thursday",
    time: "8:00 AM – 5:30 PM",
    startHour: 8, // 8:00 AM
    endHour: 17, // 5:00 PM
    endMinute: 30, // 5:30 PM
  },
  {
    day: "Friday",
    time: "8:00 AM – 5:30 PM",
    startHour: 8, // 8:00 AM
    endHour: 17, // 5:00 PM
    endMinute: 30, // 5:30 PM
  },
  {
    day: "Saturday",
    time: "8:00 AM – 1:00 PM",
    startHour: 8, // 8:00 AM
    endHour: 13, // 1:00 PM
    endMinute: 0, // Exactly 1:00 PM
  },
  {
    day: "Sunday",
    time: "Closed",
    closed: true, // No appointments on Sunday
  },
];
