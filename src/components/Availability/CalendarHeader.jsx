
export default function CalendarHeader({ nights, startDate, endDate }) {
  const formatDateRange = () => {
    if (!startDate) return 'Select your check-in date';
    if (!endDate) return 'Select your checkout date';
    
    const getMonthName = (date) => date.toLocaleString('en-US', { month: 'short' });
    
    return `${startDate.getDate()} ${getMonthName(startDate)} ${startDate.getFullYear()} – ${endDate.getDate()} ${getMonthName(endDate)} ${endDate.getFullYear()}`;
  };

  return (
    <div className="mb-6 select-none">
      <h3 className="text-[22px] font-semibold text-gray-900 leading-tight">
        {nights ? `${nights} nights in Candolim` : 'Select dates'}
      </h3>
      <p className="text-[14px] text-gray-500 font-normal mt-1">
        {formatDateRange()}
      </p>
    </div>
  );
}
