import { FaStar } from 'react-icons/fa';

export default function GuestFavoriteCard() {
  return (
    <div className="w-full border border-gray-200 rounded-2xl p-5 flex items-center justify-between bg-white shadow-xs select-none">
      
      {/* Left Column: Laurel Badge & Description */}
      <div className="flex-1 pr-4">
        <div className="flex items-center space-x-1.5">
          {/* Left Laurel leaf */}
          <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 3.5c-.83 1.66-2 3.32-3.5 4.5a8.7 8.7 0 0 1-5.25 2c-.5 0-1 .5-1 1s.5 1 1 1c2.5 0 5-1 7-2.75 1.5-1.25 2.5-2.75 3.25-4.25A1 1 0 0 0 10.75 3.5zm-5 13c1.5 1.25 3 2.75 3.75 4.25.25.5.75.75 1.25.5s.75-.75.5-1.25c-.83-1.66-2-3.32-3.5-4.5a8.7 8.7 0 0 0-5.25-2c-.5 0-1 .5-1 1s.5 1 1 1c2.5 0 5 1 7 2.75z" />
          </svg>

          {/* Badge Text */}
          <div className="flex flex-col items-center">
            <span className="text-[15px] font-extrabold text-gray-950 tracking-tight leading-none uppercase">Guest</span>
            <span className="text-[15px] font-extrabold text-gray-950 tracking-tight leading-none uppercase">favourite</span>
          </div>

          {/* Right Laurel leaf (flipped) */}
          <svg viewBox="0 0 24 24" className="w-[30px] h-[30px] fill-current text-gray-900 scale-x-[-1]" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 3.5c-.83 1.66-2 3.32-3.5 4.5a8.7 8.7 0 0 1-5.25 2c-.5 0-1 .5-1 1s.5 1 1 1c2.5 0 5-1 7-2.75 1.5-1.25 2.5-2.75 3.25-4.25A1 1 0 0 0 10.75 3.5zm-5 13c1.5 1.25 3 2.75 3.75 4.25.25.5.75.75 1.25.5s.75-.75.5-1.25c-.83-1.66-2-3.32-3.5-4.5a8.7 8.7 0 0 0-5.25-2c-.5 0-1 .5-1 1s.5 1 1 1c2.5 0 5 1 7 2.75z" />
          </svg>
        </div>
        <p className="text-sm text-gray-500 mt-2 max-w-[280px] leading-tight">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>

      {/* Middle Column: Rating score */}
      <div className="flex flex-col items-center justify-center px-6 border-l border-gray-200 h-12">
        <span className="text-[22px] font-bold text-gray-900 tracking-tight leading-tight">4.95</span>
        <div className="flex space-x-0.5 mt-1 select-none">
          <FaStar className="text-gray-900" size={10} />
          <FaStar className="text-gray-900" size={10} />
          <FaStar className="text-gray-900" size={10} />
          <FaStar className="text-gray-900" size={10} />
          <FaStar className="text-gray-900" size={10} />
        </div>
      </div>

      {/* Right Column: Reviews count */}
      <div className="flex flex-col items-center justify-center pl-6 border-l border-gray-200 h-12">
        <span className="text-[22px] font-bold text-gray-900 tracking-tight leading-tight">19</span>
        <span className="text-xs text-gray-500 font-semibold mt-1">Reviews</span>
      </div>

    </div>
  );
}
