import PropertySummary from './PropertySummary';
import GuestFavoriteCard from './GuestFavoriteCard';
import HostSection from './HostSection';
import FeatureHighlights from './FeatureHighlights';
import DescriptionSection from './DescriptionSection';
import SleepingSection from './SleepingSection';
import AmenitiesSection from './AmenitiesSection';
import AvailabilitySection from '../Availability/AvailabilitySection';

export default function PropertyInfo({ startDate, endDate, setStartDate, setEndDate }) {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Property Summary */}
      <PropertySummary />

      {/* 2. Guest Favorite Card with divider below */}
      <div className="border-b border-gray-200 pb-6">
        <GuestFavoriteCard />
      </div>

      {/* 3. Host Section with divider below */}
      <div className="border-b border-gray-200 py-6">
        <HostSection />
      </div>

      {/* 4. Feature Highlights with divider below */}
      <div className="border-b border-gray-200 py-6">
        <FeatureHighlights />
      </div>

      {/* 5. Description Section with divider below */}
      <div className="border-b border-gray-200 py-8">
        <DescriptionSection />
      </div>

      {/* 6. Sleeping Section with divider below */}
      <div className="border-b border-gray-200 py-8">
        <SleepingSection />
      </div>

      {/* 7. Amenities Section with divider below */}
      <div id="amenities" className="border-b border-gray-200 py-8">
        <AmenitiesSection />
      </div>

      {/* 8. Availability Calendar Section */}
      <div className="py-8">
        <AvailabilitySection 
          startDate={startDate} 
          endDate={endDate} 
          setStartDate={setStartDate} 
          setEndDate={setEndDate} 
        />
      </div>
    </div>
  );
}
