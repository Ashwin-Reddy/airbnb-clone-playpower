
export default function NearbyStayCard({ stay }) {
  return (
    <div className="group flex flex-col text-left select-none cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300 ease-out w-full">
      {/* 1. Image Container */}
      <div className="relative aspect-[1.1/1] rounded-xl overflow-hidden w-full bg-gray-100 mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <img 
          src={stay.image} 
          alt={stay.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* 2. Title (2-line clamp) */}
      <h4 className="text-[15px] font-semibold text-gray-950 leading-snug line-clamp-2 h-[42px] mb-1">
        {stay.title}
      </h4>

      {/* 3. Price & Rating Line */}
      <div className="flex items-center justify-between text-[14px]">
        <span className="font-bold text-gray-950">
          {stay.price}
        </span>
        <span className="flex items-center text-gray-900 font-semibold">
          <span className="text-[10px] mr-0.5 mt-0.5">★</span>
          {stay.rating}
        </span>
      </div>
    </div>
  );
}
