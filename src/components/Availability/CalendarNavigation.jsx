import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function CalendarNavigation({ onPrev, onNext, showPrev }) {
  return (
    <div className="flex items-center justify-between w-full select-none pointer-events-none absolute top-[-4px] left-0 right-0 z-10">
      {/* Previous month button */}
      <button
        onClick={onPrev}
        disabled={!showPrev}
        className="pointer-events-auto w-8 h-8 rounded-full border-0 bg-transparent hover:bg-[#F7F7F7] text-gray-900 flex items-center justify-center transition-colors duration-100 cursor-pointer disabled:opacity-0 disabled:cursor-default active:scale-[0.95]"
        aria-label="Previous month"
      >
        <FiChevronLeft size={20} className="text-gray-900" />
      </button>

      {/* Next month button */}
      <button
        onClick={onNext}
        className="pointer-events-auto w-8 h-8 rounded-full border-0 bg-transparent hover:bg-[#F7F7F7] text-gray-900 flex items-center justify-center transition-colors duration-100 cursor-pointer active:scale-[0.95]"
        aria-label="Next month"
      >
        <FiChevronRight size={20} className="text-gray-900" />
      </button>
    </div>
  );
}
