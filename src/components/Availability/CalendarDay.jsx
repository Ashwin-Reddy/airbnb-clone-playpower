
export default function CalendarDay({ 
  day, 
  isToday, 
  isDisabled, 
  isSelectedStart, 
  isSelectedEnd, 
  isInRange, 
  hasRange,
  onClick 
}) {
  if (!day) {
    return <div className="aspect-square" />; // Empty slot
  }

  // Determine track highlight background classes for range visual connection
  let rangeBgClass = "";
  if (hasRange && isInRange) {
    if (isSelectedStart) {
      rangeBgClass = "absolute top-0 right-0 bottom-0 left-1/2 bg-[#F7F7F7] z-0";
    } else if (isSelectedEnd) {
      rangeBgClass = "absolute top-0 left-0 bottom-0 right-1/2 bg-[#F7F7F7] z-0";
    } else {
      rangeBgClass = "absolute inset-0 bg-[#F7F7F7] z-0";
    }
  }

  // Determine button state classes
  let btnClass;
  if (isDisabled) {
    btnClass = "text-gray-300 line-through font-light opacity-30 pointer-events-none";
  } else if (isSelectedStart || isSelectedEnd) {
    btnClass = "bg-[#222222] text-white hover:bg-[#222222] transition-all duration-100 ease-in-out";
  } else if (isToday) {
    btnClass = "border border-gray-950 font-normal hover:bg-gray-100 transition-all duration-100 ease-in-out";
  } else {
    btnClass = "hover:bg-[#F7F7F7] hover:text-black font-semibold text-gray-900 transition-all duration-100 ease-in-out";
  }

  return (
    <div className="aspect-square flex items-center justify-center relative w-full h-full select-none">
      {/* Selected range background track */}
      {rangeBgClass && <div className={rangeBgClass} />}

      {/* Date button */}
      <button
        onClick={() => !isDisabled && onClick(day)}
        disabled={isDisabled}
        className={`w-9 h-9 md:w-[38px] md:h-[38px] rounded-full relative z-10 flex items-center justify-center text-[14px] ${btnClass} cursor-pointer focus:outline-none`}
      >
        {day.getDate()}
      </button>
    </div>
  );
}
