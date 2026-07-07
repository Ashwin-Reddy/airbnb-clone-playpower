import { FaStar } from 'react-icons/fa';
import { bookingData } from './bookingData';

export default function PriceHeader({ startDate, endDate }) {
  const formattedPrice = `₹${bookingData.price.toLocaleString('en-IN')}`;

  const nights = startDate && endDate 
    ? Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) 
    : 0;

  return (
    <div className="flex items-baseline justify-between select-none mb-6">
      <div>
        <span className="text-[24px] font-semibold text-gray-900 underline decoration-[2px] underline-offset-4">
          {formattedPrice}
        </span>
        <span className="text-[15px] text-gray-500 font-normal ml-1">
          {nights > 0 ? `for ${nights} nights` : 'night'}
        </span>
      </div>
      <div className="flex items-center space-x-1 text-[13px] text-gray-800">
        <FaStar className="w-3 h-3 text-gray-950" />
        <span className="font-semibold text-gray-950">{bookingData.rating}</span>
        <span className="text-gray-400 font-normal">·</span>
        <span className="underline cursor-pointer font-semibold text-gray-500 hover:text-black">
          {bookingData.reviews} reviews
        </span>
      </div>
    </div>
  );
}
