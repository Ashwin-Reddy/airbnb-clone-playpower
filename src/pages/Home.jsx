import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ListingHeader from '../components/ListingHeader/ListingHeader';
import HeroGallery from '../components/HeroGallery/HeroGallery';
import PropertyInfo from '../components/PropertyInfo/PropertyInfo';
import RightSidebar from '../components/BookingCard/RightSidebar';
import ReviewsSection from '../components/Reviews/ReviewsSection';
import LocationSection from '../components/Location/LocationSection';
import MeetHostSection from '../components/Host/MeetHostSection';
import ThingsToKnowSection from '../components/ThingsToKnow/ThingsToKnowSection';
import NearbyStaysSection from '../components/NearbyStays/NearbyStaysSection';

export default function Home() {
  const [startDate, setStartDate] = useState(new Date(2026, 9, 18)); // Default: 18 Oct 2026
  const [endDate, setEndDate] = useState(new Date(2026, 9, 23)); // Default: 23 Oct 2026

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 w-full flex-grow py-6 space-y-6">
        
        {/* 2. Listing Header */}
        <ListingHeader />

        {/* 3. Hero Gallery */}
        <div id="photos">
          <HeroGallery />
        </div>

        {/* 4. Main Content Section (Two-Column Layout) */}
        <main className="grid grid-cols-[2fr_1fr] gap-12 items-start">
          {/* Left Column: Property Information */}
          <PropertyInfo 
            startDate={startDate} 
            endDate={endDate} 
            setStartDate={setStartDate} 
            setEndDate={setEndDate} 
          />

          {/* Right Column: Sticky Sidebar */}
          <RightSidebar 
            startDate={startDate} 
            endDate={endDate} 
          />
        </main>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-12" />

        {/* 5. Guest Reviews Section */}
        <div id="reviews">
          <ReviewsSection />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-12" />

        {/* 6. Where You'll Be Section */}
        <div id="location">
          <LocationSection />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-12" />

        {/* 7. Meet Your Host Section */}
        <MeetHostSection />

        {/* Divider */}
        <div className="border-t border-gray-200 pt-12" />

        {/* 8. Things To Know Section */}
        <ThingsToKnowSection />

        {/* Divider */}
        <div className="border-t border-gray-200 pt-12" />

        {/* 9. More Stays Nearby Section */}
        <NearbyStaysSection />
      </div>
    </div>
  );
}
