import laurelLeft from '../../assets/icons/laurel-left.png';
import laurelRight from '../../assets/icons/laurel-right.png';

export default function OverallRating() {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none mb-4">
      {/* 1. Laurel & Large Score Container */}
      <div className="flex items-center justify-center space-x-6">
        <img 
          src={laurelLeft} 
          alt="laurel-left" 
          className="w-[32px] h-[48px] md:w-[40px] md:h-[58px] object-contain select-none shrink-0"
        />
        <span className="text-[54px] md:text-[64px] font-extrabold text-gray-950 tracking-tighter leading-none">
          4.95
        </span>
        <img 
          src={laurelRight} 
          alt="laurel-right" 
          className="w-[32px] h-[48px] md:w-[40px] md:h-[58px] object-contain select-none shrink-0"
        />
      </div>

      {/* 2. Guest Favourite Title */}
      <h3 className="text-[18px] md:text-[20px] font-bold text-gray-950 mt-4 tracking-tight">
        Guest favourite
      </h3>

      {/* 3. Description */}
      <p className="text-[14px] text-gray-500 font-normal mt-1.5 leading-normal max-w-[460px] px-4">
        This home is a guest favourite based on ratings, reviews and reliability
      </p>

      {/* 4. Underlined link */}
      <button className="text-[14px] font-semibold text-gray-950 underline hover:text-black mt-2.5 cursor-pointer focus:outline-none">
        How reviews work
      </button>
    </div>
  );
}
