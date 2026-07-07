
export default function DateSelector({ startDate, endDate }) {
  const formatDateShort = (d) => {
    if (!d) return 'Add date';
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="grid grid-cols-2 border-b border-[#B0B0B0] select-none">
      {/* Check-In */}
      <div className="flex flex-col p-3 border-r border-[#B0B0B0] cursor-pointer hover:bg-[#F7F7F7] transition-colors duration-150">
        <span className="text-[9px] font-extrabold text-gray-950 uppercase tracking-wide">
          CHECK-IN
        </span>
        <span className="text-[14px] text-gray-800 font-normal mt-0.5">
          {formatDateShort(startDate)}
        </span>
      </div>

      {/* Checkout */}
      <div className="flex flex-col p-3 cursor-pointer hover:bg-[#F7F7F7] transition-colors duration-150">
        <span className="text-[9px] font-extrabold text-gray-950 uppercase tracking-wide">
          CHECKOUT
        </span>
        <span className="text-[14px] text-gray-800 font-normal mt-0.5">
          {formatDateShort(endDate)}
        </span>
      </div>
    </div>
  );
}
