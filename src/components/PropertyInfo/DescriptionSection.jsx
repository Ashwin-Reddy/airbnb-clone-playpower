import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const description = "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa.";

const preview = description.slice(0, 240) + "...";

export default function DescriptionSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col select-none">

      {/* Translation Notice Banner */}
      <div className="bg-[#F7F7F7] p-3 rounded-xl flex items-start space-x-2.5 text-[14px] text-gray-800 leading-normal mb-3">
        {/* Translate Globe/Document Icon */}
        <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] mt-0.5 fill-current text-gray-900 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2zm1 21.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L14 19v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-4v-2h2c.55 0 1-.45 1-1V9h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        <span>
          Some info has been automatically translated.
          <button className="font-semibold underline cursor-pointer ml-1 text-gray-950">
            Show original
          </button>
        </span>
      </div>

      {/* Description Text */}
      <p className="text-[16px] text-gray-800 leading-7 font-normal">
        {isExpanded ? description : preview}
      </p>

      {/* Show more / less button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1 text-[16px] font-semibold text-gray-950 mt-2.5 hover:text-black cursor-pointer group w-fit"
      >
        <span className="underline decoration-[1.5px] underline-offset-2">
          {isExpanded ? "Show less" : "Show more"}
        </span>
        <FiChevronRight
          size={16}
          className={`mt-0.5 transition-transform duration-200 ${isExpanded ? "-rotate-90" : "rotate-90"
            }`}
        />
      </button>

    </div>
  );
}
