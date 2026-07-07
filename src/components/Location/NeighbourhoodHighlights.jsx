import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

export default function NeighbourhoodHighlights() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col text-left mt-6 select-none">
      <h4 className="text-[16px] font-semibold text-gray-950 mb-2">
        Neighbourhood highlights
      </h4>
      
      <p className="text-[16px] text-gray-800 leading-[1.5] font-normal">
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés and popular attractions.
      </p>

      {/* Expandable Paragraph container with transitions */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[16px] text-gray-800 leading-[1.5] font-normal">
          The neighbourhood is vibrant yet peaceful. Candolim beach is just a short walk away, offering water sports, shacks, and beautiful sunsets. You will find some of Goa's best restaurants, bars, and boutique stores within a 5-minute radius. Despite being close to the action, the property is situated in a quiet lane surrounded by lush greenery, giving you the best of both worlds.
        </p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[16px] font-semibold text-gray-950 underline hover:text-black mt-3 cursor-pointer self-start flex items-center space-x-1 focus:outline-none"
      >
        <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        <FiChevronRight 
          size={16} 
          className={`mt-0.5 transition-transform duration-200 ${
            isExpanded ? 'rotate-90' : 'rotate-0'
          }`} 
        />
      </button>
    </div>
  );
}
