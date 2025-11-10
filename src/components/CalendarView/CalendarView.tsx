import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";
import { useCalendar } from "../hooks/useCalendar";

export const CalendarView = () => {
  const { currentMonth, nextMonth, prevMonth, formattedMonth, monthDays } = useCalendar();

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <CalendarHeader
        monthLabel={formattedMonth}
        onPrev={prevMonth}
        onNext={nextMonth}
      />
      <CalendarGrid currentDate={currentMonth} days={monthDays()} />
    </div>
  );
};
