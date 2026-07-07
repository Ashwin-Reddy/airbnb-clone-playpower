
const ChevronLeft = () => (
  <svg viewBox="0 0 32 32" className="w-4 h-4 text-gray-950 stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 28L8 16 20 4" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] text-gray-950 stroke-current" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 12v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h4M16 2v16M21 7l-5-5-5 5" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] text-gray-950 stroke-current" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 28c7-4.73 14-10 14-17A6.83 6.83 0 0 0 23 4c-3.15 0-5.78 2.2-7 5-1.22-2.8-3.85-5-7-5A6.83 6.83 0 0 0 2 11c0 7 7 12.27 14 17z" />
  </svg>
);

export default function PhotoTourHeader() {
  const handleBack = () => {
    window.location.hash = '#/';
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-[64px] flex items-center justify-between px-6 select-none w-full">
      {/* Left Back Arrow */}
      <button 
        onClick={handleBack}
        className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-150 focus:outline-none cursor-pointer"
        title="Back"
      >
        <ChevronLeft />
      </button>

      {/* Center Title */}
      <span className="text-[16px] font-semibold text-gray-950">
        Photo tour
      </span>

      {/* Right Controls */}
      <div className="flex items-center space-x-2">
        <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-150 focus:outline-none cursor-pointer" title="Share">
          <ShareIcon />
        </button>
        <button className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-150 focus:outline-none cursor-pointer" title="Save">
          <HeartIcon />
        </button>
      </div>
    </header>
  );
}
