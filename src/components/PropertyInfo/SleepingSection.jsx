import SleepCard from './SleepCard';

import bedroomImage from '../../assets/images/sleep/1.jpeg';
import livingRoomImage from '../../assets/images/sleep/2.jpeg';

const sleepingAreas = [
  {
    image: bedroomImage,
    title: "Bedroom",
    subtitle: "1 double bed",
  },
  {
    image: livingRoomImage,
    title: "Living room",
    subtitle: "1 sofa",
  },
];

export default function SleepingSection() {
  return (
    <div className="flex flex-col py-1 select-none">
      {/* Section Header */}
      <h3 className="text-[22px] font-semibold text-gray-900 leading-tight mb-5">
        Where you'll sleep
      </h3>

      {/* Grid of sleeping locations (desktop two-column layout) */}
      <div className="grid grid-cols-2 gap-4 max-w-[540px] w-full">
        {sleepingAreas.map((area, index) => (
          <SleepCard
            key={index}
            image={area.image}
            title={area.title}
            subtitle={area.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
