import CalendarGrid from './CalendarGrid';

export default function CalendarMonth({ 
  year, 
  month, 
  startDate, 
  endDate, 
  onDayClick, 
  isUnavailable 
}) {
  const monthName = new Date(year, month, 1).toLocaleString('en-US', { month: 'long' });

  return (
    <div className="flex flex-col w-full select-none">
      {/* Month Title */}
      <h4 className="text-[16px] font-semibold text-gray-950 text-center mb-3">
        {monthName} {year}
      </h4>

      {/* Calendar Grid */}
      <CalendarGrid
        year={year}
        month={month}
        startDate={startDate}
        endDate={endDate}
        onDayClick={onDayClick}
        isUnavailable={isUnavailable}
      />
    </div>
  );
}
