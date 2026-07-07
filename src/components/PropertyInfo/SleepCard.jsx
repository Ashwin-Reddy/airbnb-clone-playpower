
export default function SleepCard({ image, title, subtitle }) {
  return (
    <div className="border border-[#DDDDDD] rounded-[16px] p-4 w-full flex flex-col bg-white select-none cursor-pointer hover:shadow-sm transition-shadow duration-200">
      
      {/* Local Room Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[170px] object-cover rounded-[12px]"
        loading="lazy"
      />

      {/* Room Details */}
      <h4 className="font-semibold text-gray-900 text-[15px] mt-3 leading-tight">
        {title}
      </h4>
      <p className="text-gray-500 text-xs mt-1.5 font-normal leading-none">
        {subtitle}
      </p>

    </div>
  );
}
