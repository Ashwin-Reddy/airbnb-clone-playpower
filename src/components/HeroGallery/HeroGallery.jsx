import { FiGrid } from 'react-icons/fi';

import hero1 from '../../assets/images/hero/1.jpeg';
import hero2 from '../../assets/images/hero/2.jpeg';
import hero3 from '../../assets/images/hero/3.jpeg';
import hero4 from '../../assets/images/hero/4.jpeg';
import hero5 from '../../assets/images/hero/5.jpeg';

export default function HeroGallery() {
  // Correct ordering matching the screenshot visual flow
  const images = [hero1, hero2, hero4, hero3, hero5];

  const handleImageClick = () => {
    window.location.hash = '#/photo-tour';
  };

  const handleShowAllClick = (e) => {
    e.stopPropagation();
    window.location.hash = '#/photo-tour';
  };

  return (
    <section className="relative w-full h-[520px] grid grid-cols-[3fr_2fr] gap-[2px] select-none bg-white">
      
      {/* Left side: Large primary image (rounded-l-xl) */}
      <div 
        onClick={handleImageClick}
        className="relative w-full h-full overflow-hidden rounded-l-xl cursor-pointer group bg-gray-200"
      >
        <img
          src={images[0]}
          alt="Spacious luxury apartment balcony terrace featuring contemporary outdoor wicker seating and a sunken hot tub jacuzzi, looking out towards the cityscape"
          loading="eager"
          className="w-full h-full object-cover transition-all duration-200 ease-in-out group-hover:brightness-90 rounded-l-xl"
        />
      </div>

      {/* Right side: 2x2 grid of smaller images */}
      <div className="grid grid-cols-2 grid-rows-2 gap-[2px] h-full">
        {/* Top-left image of right column: Patio lounge seating (no rounding) */}
        <div
          onClick={handleImageClick}
          className="relative w-full h-full overflow-hidden cursor-pointer group bg-gray-200"
        >
          <img
            src={images[1]}
            alt="Comfortable outdoor rattan sofas and armchairs arranged around a glass coffee table under warm lighting"
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-200 ease-in-out group-hover:brightness-90"
          />
        </div>

        {/* Top-right image of right column: Jacuzzi deck (rounded-tr-xl) */}
        <div
          onClick={handleImageClick}
          className="relative w-full h-full overflow-hidden rounded-tr-xl cursor-pointer group bg-gray-200"
        >
          <img
            src={images[2]}
            alt="Premium wooden decking surrounding a clean white hot tub jacuzzi set against a grey tiled wall"
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-200 ease-in-out group-hover:brightness-90 rounded-tr-xl"
          />
        </div>

        {/* Bottom-left image of right column: Bedroom (no rounding) */}
        <div
          onClick={handleImageClick}
          className="relative w-full h-full overflow-hidden cursor-pointer group bg-gray-200"
        >
          <img
            src={images[3]}
            alt="Modern villa bedroom featuring a cozy double bed with white linens, wooden floors, wardrobe, and a arched full-length mirror"
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-200 ease-in-out group-hover:brightness-90"
          />
        </div>

        {/* Bottom-right image of right column: Building exterior (rounded-br-xl) */}
        <div
          onClick={handleImageClick}
          className="relative w-full h-full overflow-hidden rounded-br-xl cursor-pointer group bg-gray-200"
        >
          <img
            src={images[4]}
            alt="High-angle view of a modern multi-story apartment complex building structure under a sunny sky"
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-200 ease-in-out group-hover:brightness-90 rounded-br-xl"
          />
        </div>
      </div>

      {/* Show all photos button (anchored to bottom-right of the gallery container) */}
      <button
        onClick={handleShowAllClick}
        className="absolute bottom-5 right-5 bg-white border border-gray-900 rounded-lg px-4 py-2 flex items-center space-x-2 text-sm font-semibold text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.05)] hover:bg-gray-50 transition-colors cursor-pointer select-none z-10"
      >
        <FiGrid size={16} />
        <span>Show all photos</span>
      </button>

    </section>
  );
}
