import { ChevronLeft, ChevronRight } from "lucide-react";

export const CalendarHeader = ({ monthLabel, onPrev, onNext }) => (
  <div className="flex items-center justify-between mb-8">
    <button
      onClick={onPrev}
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition"
      aria-label="Previous month"
    >
      <ChevronLeft />
    </button>
    <h2 className="text-2xl font-bold text-gray-800">{monthLabel}</h2>
    <button
      onClick={onNext}
      className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition"
      aria-label="Next month"
    >
      <ChevronRight />
    </button>
  </div>
);
