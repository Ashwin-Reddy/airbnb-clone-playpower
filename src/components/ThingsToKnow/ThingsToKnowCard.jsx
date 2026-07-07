
export default function ThingsToKnowCard({ icon, title, items }) {
  return (
    <div className="flex flex-col text-left select-none w-full">
      {/* 1. Icon */}
      <div className="text-gray-950">
        {icon}
      </div>

      {/* 2. Heading */}
      <h3 className="text-[16px] font-semibold text-gray-950 mb-3">
        {title}
      </h3>

      {/* 3. Items list */}
      <div className="flex flex-col space-y-2 text-[14px] text-gray-800 font-normal leading-relaxed mb-3 flex-grow">
        {items.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>

      {/* 4. Learn More Link */}
      <button className="text-[14px] font-semibold text-gray-950 underline hover:text-black self-start focus:outline-none cursor-pointer">
        Learn more
      </button>
    </div>
  );
}
