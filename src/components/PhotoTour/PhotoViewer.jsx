import { useEffect } from 'react';

const GridIcon = () => (
  <svg viewBox="0 0 32 32" className="w-4 h-4 text-gray-950 fill-current" stroke="currentColor" strokeWidth="0">
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="13" y="4" width="6" height="6" rx="1" />
    <rect x="22" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="13" width="6" height="6" rx="1" />
    <rect x="13" y="13" width="6" height="6" rx="1" />
    <rect x="22" y="13" width="6" height="6" rx="1" />
    <rect x="4" y="22" width="6" height="6" rx="1" />
    <rect x="13" y="22" width="6" height="6" rx="1" />
    <rect x="22" y="22" width="6" height="6" rx="1" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 32 32" className="w-4 h-4 text-gray-950 stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M28 4L4 28M4 4l24 24" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 32 32" className="w-4 h-4 text-gray-950 stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 28L8 16 20 4" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 32 32" className="w-4 h-4 text-gray-950 stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4l12 12-12 12" />
  </svg>
);

export default function PhotoViewer({ photos, currentIndex, onClose, onPrev, onNext }) {
  const currentPhoto = photos[currentIndex];
  const total = photos.length;

  // 1. Lock body scrolling on mount, restore on unmount
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, []);

  // 2. Setup Keyboard Event Listeners (ESC, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) onPrev();
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < total - 1) onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, total, onClose, onPrev, onNext]);

  if (!currentPhoto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col select-none w-full animate-fade-in">
      
      {/* HEADER */}
      <header className="h-[64px] border-b border-gray-200 flex items-center justify-between px-6 shrink-0 bg-white z-10 w-full">
        {/* Left Apps/Grid Icon - Closes the viewer */}
        <button 
          onClick={onClose}
          className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-150 focus:outline-none cursor-pointer"
          title="Grid view"
        >
          <GridIcon />
        </button>

        {/* Center Room Title */}
        <span className="text-[16px] font-semibold text-gray-900 tracking-tight">
          {currentPhoto.roomTitle}
        </span>

        {/* Right Info: Counter and Close */}
        <div className="flex items-center space-x-4">
          <span className="text-[14px] text-gray-950 font-normal">
            {currentIndex + 1} of {total}
          </span>
          
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-150 focus:outline-none cursor-pointer"
            title="Close"
          >
            <CloseIcon />
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT */}
      <main className="flex-grow relative flex items-center justify-center p-8 md:p-16 bg-white overflow-hidden">
        
        {/* Previous Button (Hidden/Disabled on first image) */}
        {currentIndex > 0 && (
          <button 
            onClick={onPrev}
            className="absolute left-6 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[#F7F7F7] active:scale-95 transition-all duration-200 focus:outline-none cursor-pointer z-20"
            title="Previous photo"
          >
            <ChevronLeft />
          </button>
        )}

        {/* Centered Image */}
        <div className="max-w-4xl max-h-[75vh] md:max-h-[80vh] flex items-center justify-center select-none z-10 animate-scale-up">
          <img 
            src={currentPhoto.src} 
            alt={`${currentPhoto.roomTitle} - ${currentIndex + 1}`}
            className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain rounded-sm pointer-events-none"
          />
        </div>

        {/* Next Button (Hidden/Disabled on last image) */}
        {currentIndex < total - 1 && (
          <button 
            onClick={onNext}
            className="absolute right-6 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:bg-[#F7F7F7] active:scale-95 transition-all duration-200 focus:outline-none cursor-pointer z-20"
            title="Next photo"
          >
            <ChevronRight />
          </button>
        )}

      </main>
    </div>
  );
}
