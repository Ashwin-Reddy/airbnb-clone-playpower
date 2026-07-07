import { useState } from 'react';
import { FiWifi, FiTv, FiVideo, FiMonitor, FiSlash } from 'react-icons/fi';
import { TbPool, TbAirConditioning, TbToolsKitchen2 } from 'react-icons/tb';
import { IoCarOutline } from 'react-icons/io5';
import AmenityItem from './AmenityItem';
import AmenitiesModal from '../Amenities/AmenitiesModal';
import { amenitiesData } from '../Amenities/amenitiesData';

const amenities = [
  {
    icon: TbToolsKitchen2,
    label: "Kitchen",
  },
  {
    icon: FiWifi,
    label: "Wifi",
  },
  {
    icon: FiMonitor,
    label: "Dedicated workspace",
  },
  {
    icon: IoCarOutline,
    label: "Free parking on premises",
  },
  {
    icon: TbPool,
    label: "Pool",
  },
  {
    icon: FiTv,
    label: "TV",
  },
  {
    icon: TbAirConditioning,
    label: "Air conditioning",
  },
  {
    icon: FiVideo,
    label: "Exterior security cameras on property",
  },
  {
    icon: FiSlash,
    label: "Smoke alarm",
    notIncluded: true,
  },
  {
    icon: FiSlash,
    label: "Carbon monoxide alarm",
    notIncluded: true,
  },
];

export default function AmenitiesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamically calculate the total count of all amenities
  const totalCount = amenitiesData.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="flex flex-col select-none">
      {/* Title */}
      <h3 className="text-[22px] font-semibold text-gray-900 leading-tight mb-6">
        What this place offers
      </h3>

      {/* Two column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 max-w-[650px] w-full">
        {amenities.map((amenity, index) => (
          <AmenityItem
            key={index}
            icon={amenity.icon}
            label={amenity.label}
            notIncluded={amenity.notIncluded}
          />
        ))}
      </div>

      {/* Show All Button */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mt-8 px-6 py-3 border border-gray-900 rounded-xl font-semibold text-gray-950 bg-white hover:bg-gray-50 transition-colors duration-150 cursor-pointer w-fit text-[16px]"
      >
        Show all {totalCount} amenities
      </button>

      {/* Amenities Modal */}
      <AmenitiesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
