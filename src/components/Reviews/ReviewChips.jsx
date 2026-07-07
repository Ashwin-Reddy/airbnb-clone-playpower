import { FiSliders } from 'react-icons/fi';

export default function ReviewChips() {
  const chips = [
    { icon: "🛏", label: "Comfort", count: 6 },
    { icon: "🟢", label: "Accuracy", count: 5 },
    { icon: "🛁", label: "Hot tub", count: 5 },
    { icon: "🛋", label: "Condition", count: 4 },
    { icon: "🎁", label: "Hospitality", count: 8 },
    { icon: "🧼", label: "Cleanliness", count: 4 },
    { icon: "🏠", label: "Amenities", count: 2 },
  ];

  return (
    <div className="w-full flex items-center justify-between mb-6 select-none">
      {/* Scrollable Pills row */}
      <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide py-1 flex-grow">
        {chips.map((chip, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-1.5 px-4 py-2 border border-[#DDDDDD] rounded-full bg-white text-[14px] text-gray-950 font-semibold cursor-pointer hover:border-gray-950 transition-colors duration-150 whitespace-nowrap"
          >
            <span className="text-[15px]">{chip.icon}</span>
            <span>{chip.label}</span>
            <span className="text-[12px] font-normal text-gray-500 pl-0.5">{chip.count}</span>
          </div>
        ))}
      </div>

      {/* Filter Button */}
      <button 
        className="flex items-center justify-center p-3 border border-[#DDDDDD] rounded-full bg-white text-gray-950 hover:border-gray-950 hover:bg-[#F7F7F7] active:scale-[0.96] transition-all duration-150 cursor-pointer ml-3 focus:outline-none shrink-0"
        title="Filter reviews"
      >
        <FiSliders size={16} />
      </button>
    </div>
  );
}
