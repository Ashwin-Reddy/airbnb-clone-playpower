import { useState } from 'react';
import NearbyStayCard from './NearbyStayCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import s1 from '../../assets/images/more-stays/s1.jpeg';
import s2 from '../../assets/images/more-stays/s2.jpeg';
import s3 from '../../assets/images/more-stays/s3.jpeg';
import s4 from '../../assets/images/more-stays/s4.jpeg';
import s5 from '../../assets/images/more-stays/s5.jpeg';

export default function NearbyStaysSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const staysPage1 = [
    { id: 1, title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91", image: s1 },
    { id: 2, title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95", image: s2 },
    { id: 3, title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94", image: s3 },
    { id: 4, title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96", image: s4 },
    { id: 5, title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95", image: s5 },
  ];

  // For page 2, we just shift the elements slightly to simulate page turning
  const staysPage2 = [
    { id: 3, title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94", image: s3 },
    { id: 4, title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96", image: s4 },
    { id: 5, title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95", image: s5 },
    { id: 1, title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91", image: s1 },
    { id: 2, title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95", image: s2 },
  ];

  const currentStays = currentPage === 1 ? staysPage1 : staysPage2;

  const handleNext = () => {
    if (currentPage < 2) setCurrentPage(2);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(1);
  };

  return (
    <section className="w-full flex flex-col pt-8 select-none text-left mb-16">
      {/* Header controls bar */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-bold text-gray-950 tracking-tight">
          More stays nearby
        </h2>

        {/* Carousel controls */}
        <div className="flex items-center space-x-3 text-[14px] text-gray-950 font-normal">
          <span>{currentPage} / 2</span>
          
          <div className="flex space-x-2">
            {/* Prev button */}
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-[#F7F7F7] active:scale-95 transition-all focus:outline-none cursor-pointer ${
                currentPage === 1 ? 'opacity-40 cursor-not-allowed hover:bg-white' : ''
              }`}
            >
              <FiChevronLeft size={18} />
            </button>

            {/* Next button */}
            <button 
              onClick={handleNext}
              disabled={currentPage === 2}
              className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-[#F7F7F7] active:scale-95 transition-all focus:outline-none cursor-pointer ${
                currentPage === 2 ? 'opacity-40 cursor-not-allowed hover:bg-white' : ''
              }`}
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Stays Grid - Scrollable on mobile, 5 cols on desktop */}
      <div className="w-full overflow-x-auto scrollbar-hide py-1">
        <div className="grid grid-cols-5 gap-5 min-w-[960px] md:min-w-0 w-full">
          {currentStays.map((stay) => (
            <NearbyStayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </div>
    </section>
  );
}
