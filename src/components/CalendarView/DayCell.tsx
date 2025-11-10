import { isSameMonth, isToday, format } from "date-fns";
import clsx from "clsx";

export const DayCell = ({ day, currentDate }) => {
  const outsideMonth = !isSameMonth(day, currentDate);
  const today = isToday(day);

  return (
    <div
      className={clsx(
        "flex items-center justify-center aspect-square border rounded-xl select-none cursor-pointer transition",
        outsideMonth ? "bg-gray-50 text-gray-300" : "bg-white text-gray-800 hover:bg-blue-50",
        today && "bg-blue-500 text-white font-extrabold shadow-md"
      )}
      style={{ minHeight: 60 }}
      title={format(day, "yyyy-MM-dd")}
    >
      <span className="text-lg">{format(day, "d")}</span>
    </div>
  );
};
