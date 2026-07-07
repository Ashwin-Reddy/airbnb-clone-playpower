/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { amenitiesData } from './amenitiesData';
import AmenityCategory from './AmenityCategory';

export default function AmenitiesModal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(isOpen);
  const [active, setActive] = useState(false);
  const modalRef = useRef(null);

  if (isOpen && !mounted) {
    setMounted(true);
  }

  // Manage animation lifecycle and body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setActive(true), 10);
      return () => {
        clearTimeout(timer);
      };
    } else {
      setActive(false);
      const timer = setTimeout(() => {
        setMounted(false);
        document.body.style.overflow = 'unset';
      }, 300); // matches transition duration
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  // Restore focus to triggering element on unmount/close
  useEffect(() => {
    if (isOpen) {
      const previouslyActive = document.activeElement;
      return () => {
        if (previouslyActive) previouslyActive.focus();
      };
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap implementation
  useEffect(() => {
    const handleTab = (e) => {
      if (e.key !== 'Tab' || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleTab);
    }
    return () => window.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Focus the close button on open
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const closeBtn = modalRef.current.querySelector('.close-modal-btn');
      if (closeBtn) closeBtn.focus();
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div 
      onClick={onClose}
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 select-none ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-[16px] max-w-[840px] w-full h-[90vh] max-h-[90vh] flex flex-col shadow-2xl overflow-hidden transition-all duration-300 ease-out transform ${
          active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Modal Sticky Header */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200">
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="close-modal-btn p-2 -ml-2 hover:bg-[#F7F7F7] rounded-full cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            <IoClose className="w-5 h-5 text-gray-900" />
          </button>
        </div>

        {/* Modal Scrollable Body with custom thin scrollbar */}
        <div className="flex-1 overflow-y-auto px-6 py-6 md:px-12 md:pb-12 custom-scrollbar">
          {/* Main Title inside scrollable area matching Airbnb */}
          <h3 className="text-[26px] font-semibold text-gray-950 leading-tight mb-8">
            What this place offers
          </h3>

          {/* Grouped Categories */}
          {amenitiesData.map((cat, catIdx) => (
            <AmenityCategory
              key={catIdx}
              category={cat.category}
              items={cat.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
