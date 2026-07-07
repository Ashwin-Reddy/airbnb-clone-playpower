import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ScrollNavbar() {
  const [activeTab, setActiveTab] = useState('Photos');
  const tabs = ['Photos', 'Amenities', 'Reviews', 'Location'];

  // ScrollSpy logic to detect active section automatically
  useEffect(() => {
    const handleSpy = () => {
      const sectionIds = [
        { name: 'Photos', id: 'photos' },
        { name: 'Amenities', id: 'amenities' },
        { name: 'Reviews', id: 'reviews' },
        { name: 'Location', id: 'location' }
      ];

      let currentActive = 'Photos';
      // 120px offset to trigger slightly before the section reaches the top
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i].id);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            currentActive = sectionIds[i].name;
            break;
          }
        }
      }

      setActiveTab(currentActive);
    };

    window.addEventListener('scroll', handleSpy, { passive: true });
    handleSpy(); // Initial execution

    return () => {
      window.removeEventListener('scroll', handleSpy);
    };
  }, []);

  // Smooth scroll handler
  const handleTabClick = (tab) => {
    const sectionIds = {
      Photos: 'photos',
      Amenities: 'amenities',
      Reviews: 'reviews',
      Location: 'location'
    };
    const id = sectionIds[tab];
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80; // Offset by height of the sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveTab(tab);
    }
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm h-20 flex items-center select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 w-full flex items-center justify-between">
        
        {/* Left side: Tabs */}
        <nav className="flex items-center space-x-6 h-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`relative h-full flex items-center text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeTab === tab ? 'text-gray-950' : 'text-gray-500 hover:text-gray-950'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-950" />
              )}
            </button>
          ))}
        </nav>

        {/* Right side: Price, Rating, Reserve Button */}
        <div className="flex items-center space-x-6">
          <div className="text-right hidden sm:block">
            <div className="flex items-center space-x-1 justify-end">
              <span className="font-bold text-gray-900 text-[15px]">₹28,499</span>
              <span className="text-gray-500 text-[13px] font-normal ml-1">for 5 nights</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-500 justify-end mt-0.5">
              <FaStar className="text-gray-950" size={10} />
              <span className="font-semibold text-gray-800">4.95</span>
              <span className="text-gray-400">·</span>
              <span className="underline cursor-pointer">19 reviews</span>
            </div>
          </div>
          <button className="bg-[#E61E4D] hover:bg-[#DE1248] transition-colors text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-xs cursor-pointer">
            Reserve
          </button>
        </div>

      </div>
    </div>
  );
}
