import { useState } from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, format } from "date-fns";

export const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => setCurrentMonth((prev) => addMonths(prev, 1));
  const prevMonth = () => setCurrentMonth((prev) => subMonths(prev, 1));

  const monthDays = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 0 });
    const endDate = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 0 });
    const days = [];
    let date = startDate;

    while (date <= endDate) {
      days.push(date);
      date = addDays(date, 1);
    }
    return days;
  };

  return { 
    currentMonth, 
    nextMonth, 
    prevMonth, 
    monthDays, 
    formattedMonth: format(currentMonth, "MMMM yyyy") 
  };
};
