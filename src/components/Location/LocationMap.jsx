
export default function LocationMap() {
  return (
    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-gray-200 select-none bg-[#AADCFF]">
      {/* 1. Land Area (Right Side Coastline) */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[72%] bg-[#E6F0E6] -skew-x-[20deg] origin-top-right border-l-4 border-white/40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      {/* 2. Highlight Zones (Forest/Park circles on the land) */}
      <div className="absolute left-[34%] top-[34%] w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#CBE4CD] opacity-80" />
      <div className="absolute left-[58%] top-[42%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#CBE4CD] opacity-80" />

      {/* 3. Center Airbnb Home Marker */}
      <div className="absolute left-[49%] top-[46%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-[#222222] border-4 border-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-center">
          {/* Simple house SVG */}
          <svg viewBox="0 0 32 32" className="w-5 h-5 text-white fill-current">
            <path d="M16 3L2 15h4v14h7v-8h6v8h7V15h4z" />
          </svg>
        </div>
      </div>

      {/* 4. Search Control Badge (Top-Left) */}
      <button 
        className="absolute left-4 top-4 w-9 h-9 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-200/50 flex items-center justify-center text-gray-800 hover:scale-105 active:scale-95 transition-all duration-100 focus:outline-none"
        title="Search this area"
      >
        <svg viewBox="0 0 32 32" className="w-4 h-4 text-gray-800 fill-none stroke-current" strokeWidth="2.5">
          <circle cx="14" cy="14" r="9" />
          <path d="M20.5 20.5L28 28" />
        </svg>
      </button>

      {/* 5. Zoom Stack (Top-Right) */}
      <div className="absolute right-4 top-4 w-9 h-[74px] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-200/50 flex flex-col overflow-hidden text-gray-500 font-normal">
        <button className="flex-1 flex items-center justify-center border-b border-gray-100 hover:bg-gray-50 active:bg-gray-100 text-[18px] font-light leading-none focus:outline-none">
          +
        </button>
        <button className="flex-1 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 text-[18px] font-light leading-none focus:outline-none">
          −
        </button>
      </div>
    </div>
  );
}
