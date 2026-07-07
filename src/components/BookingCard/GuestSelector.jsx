import { FiChevronDown } from 'react-icons/fi';
import { bookingData } from './bookingData';

export default function GuestSelector() {
  return (
    <div className="p-3 flex items-center justify-between cursor-pointer hover:bg-[#F7F7F7] transition-colors duration-150 select-none">
      <div className="flex flex-col justify-center">
        <span className="text-[9px] font-extrabold text-gray-950 uppercase tracking-wide">
          GUESTS
        </span>
        <span className="text-[14px] text-gray-800 font-normal mt-0.5">
          {bookingData.guests}
        </span>
      </div>
      <FiChevronDown size={22} className="text-gray-950 mr-1" />
    </div>
  );
}
