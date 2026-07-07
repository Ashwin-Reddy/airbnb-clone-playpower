import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ReviewCard({ review }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Character threshold for showing "Show more" link
  const isLong = review.review.length > 180;

  // Initials fallback background styling
  const getInitialsStyle = (name) => {
    const char = name.charAt(0).toUpperCase();
    if (char === 'A') return 'bg-[#F2D7D5] text-[#78281F]';
    if (char === 'V') return 'bg-[#E8DAEF] text-[#5B2C6F]';
    return 'bg-[#D5F5E3] text-[#1E8449]'; // Fallback green/mint for M/others
  };

  return (
    <div className="flex flex-col select-none text-left py-4 mb-4">
      {/* 1. Reviewer Header */}
      <div className="flex items-center space-x-3.5">
        {review.avatar ? (
          <img 
            src={review.avatar} 
            alt={review.name} 
            className="w-10 h-10 rounded-full object-cover bg-gray-100"
          />
        ) : (
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] ${getInitialsStyle(review.name)}`}>
            {review.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-[16px] font-semibold text-gray-950 leading-tight">
            {review.name}
          </span>
          <span className="text-[14px] text-gray-500 mt-0.5">
            {review.joinedYear}
          </span>
        </div>
      </div>

      {/* 2. Rating Stars & Date on the same line */}
      <div className="flex items-center space-x-1.5 text-[12px] mt-3 mb-2">
        <div className="flex space-x-0.5 text-gray-950">
          <FaStar className="w-2.5 h-2.5" />
          <FaStar className="w-2.5 h-2.5" />
          <FaStar className="w-2.5 h-2.5" />
          <FaStar className="w-2.5 h-2.5" />
          <FaStar className="w-2.5 h-2.5" />
        </div>
        <span className="text-gray-300 font-normal">·</span>
        <span className="text-gray-500 font-normal">{review.date}</span>
      </div>

      {/* 3. Review Text clamped to 4 lines */}
      <p 
        className={`text-[16px] text-gray-800 leading-[1.5] font-normal transition-all duration-300 ${
          isExpanded ? '' : 'line-clamp-4'
        }`}
      >
        {review.review}
      </p>

      {/* 4. Show More / Show Less Link */}
      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[14px] font-semibold text-gray-950 underline hover:text-black mt-2 cursor-pointer self-start focus:outline-none"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}
