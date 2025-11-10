import { DayCell } from "./DayCell";

export const CalendarGrid = ({ currentDate, days }) => (
  <div>
    <div className="grid grid-cols-7 text-center font-semibold text-gray-500 mb-2">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => (
        <DayCell key={day.toISOString()} day={day} currentDate={currentDate} />
      ))}
    </div>
  </div>
);
