import CalendarDay from './CalendarDay';

export default function CalendarGrid({ 
  year, 
  month, 
  startDate, 
  endDate, 
  onDayClick, 
  isUnavailable 
}) {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Generate date array
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  // Empty slots for alignment
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }
  // Days of the month
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(new Date(year, month, d));
  }

  const today = new Date();
  const isSameDate = (d1, d2) => {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  const checkIsInRange = (date) => {
    if (!startDate || !endDate || !date) return false;
    const dTime = date.getTime();
    const sTime = startDate.getTime();
    const eTime = endDate.getTime();
    return dTime >= sTime && dTime <= eTime;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Weekdays Row */}
      <div className="grid grid-cols-7 mb-1 text-center text-[12px] font-medium text-gray-500 select-none">
        {weekdays.map((w, idx) => (
          <div key={idx} className="aspect-square flex items-center justify-center w-full h-full">
            {w}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {days.map((day, idx) => {
          const isSelectedStart = isSameDate(day, startDate);
          const isSelectedEnd = isSameDate(day, endDate);
          const isInRange = checkIsInRange(day);
          const isDayToday = isSameDate(day, today);
          const isDisabled = day ? isUnavailable(day) : false;

          return (
            <CalendarDay
              key={idx}
              day={day}
              isToday={isDayToday}
              isDisabled={isDisabled}
              isSelectedStart={isSelectedStart}
              isSelectedEnd={isSelectedEnd}
              isInRange={isInRange}
              hasRange={!!(startDate && endDate)}
              onClick={onDayClick}
            />
          );
        })}
      </div>
    </div>
  );
}
