
// Custom high-fidelity SVGs matching Airbnb
const SprayIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 text-gray-950" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 14h6v12a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V14z" />
    <path d="M14 9.5V14h4V9.5c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5z" />
    <path d="M15 5h2v3h-2z" />
    <path d="M13.5 5.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v1.5h3" />
    <path d="M9.5 8h-1.5" />
    <path d="M7 6.5l-1-.5" />
    <path d="M7.5 10l-1 .5" />
  </svg>
);

const AccuracyIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 text-gray-950" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="11" />
    <path d="M11.5 16l3 3 6-6" />
  </svg>
);

const KeyIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 text-gray-950" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="21" r="5" />
    <path d="M14.5 17.5L25 7M21.5 10.5l2 2M23.5 8.5l2 2" />
  </svg>
);

const SpeechBubbleIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 text-gray-950" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 8h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-5l-5 4v-4H8a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z" />
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 text-gray-950" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l7-4v20l-7 4V8z M12 4l8 4v20l-8-4V4z M20 8l7-4v20l-7 4V8z" />
  </svg>
);

const PriceTagIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 text-gray-950" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18l12-12h8v8l-12 12z" />
    <circle cx="21" cy="11" r="1.5" fill="currentColor" />
  </svg>
);

export default function RatingBreakdown() {
  const distribution = [
    { stars: 5, fill: 95 },
    { stars: 4, fill: 5 },
    { stars: 3, fill: 0 },
    { stars: 2, fill: 0 },
    { stars: 1, fill: 0 },
  ];

  const categories = [
    { label: "Cleanliness", value: "5.0", icon: <SprayIcon /> },
    { label: "Accuracy", value: "5.0", icon: <AccuracyIcon /> },
    { label: "Check-in", value: "5.0", icon: <KeyIcon /> },
    { label: "Communication", value: "5.0", icon: <SpeechBubbleIcon /> },
    { label: "Location", value: "4.8", icon: <MapIcon /> },
    { label: "Value", value: "4.8", icon: <PriceTagIcon /> },
  ];

  return (
    <div className="w-full border-y border-[#EBEBEB] my-8 py-3 select-none overflow-x-auto scrollbar-hide">
      <div className="flex items-stretch min-w-[800px] md:min-w-0 justify-between w-full">

        {/* Column 1: Overall rating bar list */}
        <div className="flex flex-col py-3 px-6 border-r border-[#EBEBEB] select-none w-full min-w-[140px] text-left">
          <span className="text-[12px] font-bold text-gray-950 mb-3">
            Overall rating
          </span>
          <div className="flex flex-col space-y-1.5 justify-center flex-grow">
            {distribution.map((item) => (
              <div key={item.stars} className="flex items-center space-x-2 text-[11px] text-gray-600 font-medium">
                <span className="w-2.5">{item.stars}</span>
                <div className="w-[85px] bg-[#EBEBEB] h-[3px] rounded-full overflow-hidden">
                  <div
                    className="bg-gray-950 h-full rounded-full"
                    style={{ width: `${item.fill}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columns 2-7: Subcategories */}
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between py-3 px-6 border-r border-[#EBEBEB] last:border-r-0 select-none w-full min-w-[110px] text-left"
          >
            {/* Label */}
            <span className="text-[12px] font-bold text-gray-950 leading-tight">
              {cat.label}
            </span>

            {/* Score */}
            <span className="text-[18px] md:text-[20px] font-extrabold text-gray-950 leading-none mt-2">
              {cat.value}
            </span>

            {/* Icon (bottom aligned) */}
            <div className="mt-3 text-gray-950">
              {cat.icon}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
