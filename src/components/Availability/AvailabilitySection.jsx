import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarNavigation from './CalendarNavigation';
import CalendarMonth from './CalendarMonth';
import { MdOutlineKeyboard } from 'react-icons/md';

export default function AvailabilitySection({ startDate, endDate, setStartDate, setEndDate }) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 9, 1)); // Default starts on Oct 2026

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDayClick = (day) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else {
      if (day < startDate) {
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    }
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  // Check if prev button should be shown (don't navigate into past months)
  const today = new Date();
  const showPrev = currentMonth.getFullYear() > today.getFullYear() || 
                   (currentMonth.getFullYear() === today.getFullYear() && currentMonth.getMonth() > today.getMonth());

  // Determine second month display parameters
  const nextMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);

  // Nights count
  const nights = startDate && endDate ? Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0;

  // Check if a date is disabled
  const isUnavailable = (day) => {
    const todayNormalized = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // Disable dates before today
    if (day < todayNormalized) return true;
    
    // Replicate November 2026 booked dates (Nov 22 to Nov 30)
    if (day.getFullYear() === 2026 && day.getMonth() === 10 && day.getDate() >= 22) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-full max-w-[660px] flex flex-col mt-4">
      {/* 1. Section Header */}
      <CalendarHeader nights={nights} startDate={startDate} endDate={endDate} />

      {/* 2. Relative Calendar Container (with Navigation & Months side-by-side) */}
      <div className="relative mt-2">
        {/* Month Navigation Chevrons overlay */}
        <CalendarNavigation 
          onPrev={handlePrevMonth} 
          onNext={handleNextMonth} 
          showPrev={showPrev} 
        />

        {/* Side-by-side or mobile single month viewports */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* Left Month */}
          <CalendarMonth 
            year={currentMonth.getFullYear()} 
            month={currentMonth.getMonth()} 
            startDate={startDate}
            endDate={endDate}
            onDayClick={handleDayClick}
            isUnavailable={isUnavailable}
          />

          {/* Right Month (Hidden on mobile/tablet) */}
          <div className="hidden md:block">
            <CalendarMonth 
              year={nextMonthDate.getFullYear()} 
              month={nextMonthDate.getMonth()} 
              startDate={startDate}
              endDate={endDate}
              onDayClick={handleDayClick}
              isUnavailable={isUnavailable}
            />
          </div>
        </div>
      </div>

      {/* 3. Bottom controls */}
      <div className="flex items-center justify-between mt-4 select-none">
        {/* Keyboard shortcut button */}
        <button className="p-1.5 border border-gray-300 hover:border-gray-800 hover:bg-[#F7F7F7] active:scale-[0.97] rounded-lg flex items-center justify-center cursor-pointer transition-all duration-150" title="Keyboard shortcuts">
          <MdOutlineKeyboard className="w-5 h-5 text-gray-900" />
        </button>

        {/* Clear dates link */}
        <button 
          onClick={handleClearDates}
          className="text-[14px] font-semibold text-gray-950 underline hover:text-black cursor-pointer transition-colors duration-150"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}
