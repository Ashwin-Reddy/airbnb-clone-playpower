import { 
  FiWifi, 
  FiTv, 
  FiMonitor, 
  FiSlash, 
  FiWind, 
  FiCoffee, 
  FiKey 
} from 'react-icons/fi';
import { 
  TbPool, 
  TbAirConditioning, 
  TbToolsKitchen2, 
  TbHanger, 
  TbBlender, 
  TbFireExtinguisher 
} from 'react-icons/tb';
import { 
  IoCarOutline, 
  IoWaterOutline 
} from 'react-icons/io5';
import { 
  MdOutlineCleaningServices, 
  MdOutlineIron, 
  MdOutlineKitchen, 
  MdOutlineMicrowave, 
  MdOutlineSoap, 
  MdOutlineTableBar, 
  MdOutlineOutdoorGrill 
} from 'react-icons/md';
import { 
  FaShower, 
  FaBaby, 
  FaHotTub 
} from 'react-icons/fa';
import { 
  LuWind, 
  LuShowerHead, 
  LuBedDouble, 
  LuBlinds, 
  LuArchive, 
  LuFlame, 
  LuPlus, 
  LuSnowflake, 
  LuUtensils, 
  LuUtensilsCrossed, 
  LuWine, 
  LuDoorOpen, 
  LuTrees, 
  LuDumbbell, 
  LuPawPrint, 
  LuCalendarDays 
} from 'react-icons/lu';

import React from 'react';

// Custom SVG Icons to perfectly match Airbnb style in a JS file
const ToasterIcon = (props) => React.createElement(
  'svg',
  { viewBox: '0 0 32 32', className: 'w-6 h-6 text-gray-900 fill-none stroke-current', strokeWidth: '2', ...props },
  React.createElement('path', { d: 'M6 12h20a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V14a2 2 0 0 1 2-2z' }),
  React.createElement('path', { d: 'M10 12V8h12v4' })
);

export const amenitiesData = [
  {
    category: "Bathroom",
    items: [
      { icon: LuWind, label: "Hairdryer" },
      { icon: MdOutlineCleaningServices, label: "Cleaning products" },
      { icon: FaShower, label: "Shampoo" },
      { icon: IoWaterOutline, label: "Hot water" },
      { icon: LuShowerHead, label: "Shower gel" },
      { icon: MdOutlineSoap, label: "Body soap" }
    ]
  },
  {
    category: "Bedroom and laundry",
    items: [
      { icon: MdOutlineCleaningServices, label: "Washing machine" },
      { icon: TbHanger, label: "Hangers" },
      { icon: LuBedDouble, label: "Bed linen" },
      { icon: LuBlinds, label: "Room-darkening blinds" },
      { icon: MdOutlineIron, label: "Iron" },
      { icon: LuArchive, label: "Clothes storage" },
      { icon: FaBaby, label: "Cot" },
      { icon: LuBedDouble, label: "Extra pillows and blankets" }
    ]
  },
  {
    category: "Entertainment",
    items: [
      { icon: FiTv, label: "TV" }
    ]
  },
  {
    category: "Family",
    items: [
      { icon: FaBaby, label: "Cot" }
    ]
  },
  {
    category: "Heating and cooling",
    items: [
      { icon: TbAirConditioning, label: "Air conditioning" },
      { icon: FiWind, label: "Ceiling fan" },
      { icon: LuFlame, label: "Heating" }
    ]
  },
  {
    category: "Home safety",
    items: [
      { icon: FiMonitor, label: "Exterior security cameras on property" },
      { icon: FiSlash, label: "Carbon monoxide alarm", notIncluded: true },
      { icon: FiSlash, label: "Smoke alarm", notIncluded: true },
      { icon: TbFireExtinguisher, label: "Fire extinguisher" },
      { icon: LuPlus, label: "First aid kit" }
    ]
  },
  {
    category: "Internet and office",
    items: [
      { icon: FiWifi, label: "Wifi" },
      { icon: FiMonitor, label: "Dedicated workspace" }
    ]
  },
  {
    category: "Kitchen and dining",
    items: [
      { icon: TbToolsKitchen2, label: "Kitchen" },
      { icon: MdOutlineKitchen, label: "Fridge" },
      { icon: LuSnowflake, label: "Freezer" },
      { icon: MdOutlineMicrowave, label: "Microwave" },
      { icon: LuUtensils, label: "Cooking basics" },
      { icon: LuUtensilsCrossed, label: "Crockery and cutlery" },
      { icon: FiCoffee, label: "Kettle" },
      { icon: FiCoffee, label: "Coffee" },
      { icon: LuWine, label: "Wine glasses" },
      { icon: ToasterIcon, label: "Toaster" },
      { icon: TbBlender, label: "Blender" },
      { icon: LuFlame, label: "Cooker" }
    ]
  },
  {
    category: "Location features",
    items: [
      { icon: LuDoorOpen, label: "Private entrance" }
    ]
  },
  {
    category: "Outdoor",
    items: [
      { icon: LuTrees, label: "Patio or balcony" },
      { icon: MdOutlineTableBar, label: "Outdoor dining area" },
      { icon: MdOutlineOutdoorGrill, label: "BBQ grill" }
    ]
  },
  {
    category: "Parking and facilities",
    items: [
      { icon: IoCarOutline, label: "Free parking on premises" },
      { icon: TbPool, label: "Pool" },
      { icon: FaHotTub, label: "Hot tub" },
      { icon: LuDumbbell, label: "Gym" }
    ]
  },
  {
    category: "Services",
    items: [
      { icon: LuPawPrint, label: "Pets allowed" },
      { icon: MdOutlineCleaningServices, label: "Cleaning available during stay" },
      { icon: LuCalendarDays, label: "Long-term stays allowed" },
      { icon: FiKey, label: "Self check-in" }
    ]
  }
];
