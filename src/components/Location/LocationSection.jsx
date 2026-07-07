import LocationMap from './LocationMap';
import NeighbourhoodHighlights from './NeighbourhoodHighlights';

export default function LocationSection() {
  return (
    <section className="w-full flex flex-col pt-8 select-none text-left">
      {/* 1. Header Title & Subtitle */}
      <h2 className="text-[22px] font-bold text-gray-950 tracking-tight">
        Where you'll be
      </h2>
      <h3 className="text-[16px] font-medium text-gray-700 mt-1 mb-6">
        Candolim, Goa, India
      </h3>

      {/* 2. Map component */}
      <LocationMap />

      {/* 3. Sub-map caption */}
      <span className="text-[14px] text-gray-500 font-normal mt-4 block">
        Exact location will be provided after booking.
      </span>

      {/* 4. Neighbourhood description */}
      <NeighbourhoodHighlights />
    </section>
  );
}
