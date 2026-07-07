
const BalloonIcon = () => (
  <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] text-gray-950 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3a8 8 0 0 1 8 8c0 4-3.5 8-8 8s-8-4-8-8a8 8 0 0 1 8-8z" />
    <path d="M16 19l-1 2h2z" />
    <path d="M16 21c0 1.5-1.5 2.5-1.5 4" />
  </svg>
);

const SchoolIcon = () => (
  <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] text-gray-950 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4L3 10l13 6 13-6z" />
    <path d="M6 12v6a10 10 0 0 0 20 0v-6" />
    <path d="M25 10v9" />
  </svg>
);

export default function HostCard() {
  return (
    <div className="flex flex-col select-none text-left w-full max-w-[360px]">
      {/* 1. Host Card Container */}
      <div className="bg-white rounded-3xl p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] border border-gray-100 flex items-stretch justify-between mb-6 h-[256px]">
        
        {/* Left Column: Logo, Name, Subtitle */}
        <div className="flex flex-col justify-between flex-1">
          {/* Green Circle logo */}
          <div className="relative w-[104px] h-[104px] rounded-full bg-[#0F392B] flex flex-col items-center justify-center text-white px-2 py-3 select-none shrink-0 shadow-inner">
            <span className="text-[10px] font-extrabold tracking-widest leading-none">MIRASHYA</span>
            <span className="text-[8px] font-semibold tracking-wider mt-0.5 opacity-80 leading-none">HOMES</span>
            
            {/* Pink checkmark badge */}
            <div className="absolute bottom-1 right-0.5 w-6 h-6 rounded-full bg-[#E51D52] border-2 border-white flex items-center justify-center text-white shadow-sm">
              <svg viewBox="0 0 32 32" className="w-3 h-3 fill-current text-white font-bold">
                <path d="M11.5 19.5l-4.5-4.5 2-2 2.5 2.5 7.5-7.5 2 2z" />
              </svg>
            </div>
          </div>

          {/* Name and subtitle */}
          <div className="flex flex-col">
            <h2 className="text-[32px] font-bold text-gray-950 leading-[1.1] tracking-tight">
              Mirashya<br />Homes
            </h2>
            <span className="text-[14px] text-gray-500 mt-1 font-normal">
              Host
            </span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] bg-gray-200 self-stretch mx-4" />

        {/* Right Column: Stats List */}
        <div className="flex flex-col justify-center w-[110px] shrink-0">
          {/* Reviews */}
          <div className="flex flex-col">
            <span className="text-[20px] font-extrabold text-gray-950 leading-none">
              1,463
            </span>
            <span className="text-[11px] text-gray-500 mt-1 leading-none font-normal">
              Reviews
            </span>
          </div>
          
          <div className="border-b border-[#EBEBEB] my-3" />

          {/* Rating */}
          <div className="flex flex-col">
            <span className="text-[20px] font-extrabold text-gray-950 leading-none flex items-center">
              4.68<span className="text-[13px] ml-0.5 font-bold">★</span>
            </span>
            <span className="text-[11px] text-gray-500 mt-1 leading-none font-normal">
              Rating
            </span>
          </div>

          <div className="border-b border-[#EBEBEB] my-3" />

          {/* Years hosting */}
          <div className="flex flex-col">
            <span className="text-[20px] font-extrabold text-gray-950 leading-none">
              2
            </span>
            <span className="text-[11px] text-gray-500 mt-1 leading-none font-normal">
              Years hosting
            </span>
          </div>
        </div>

      </div>

      {/* 2. Personal Metadata items */}
      <div className="flex flex-col space-y-4 px-2 mt-2">
        <div className="flex items-center space-x-3.5">
          <BalloonIcon />
          <span className="text-[15px] text-gray-950 font-normal">
            Born in the 80s
          </span>
        </div>

        <div className="flex items-center space-x-3.5">
          <SchoolIcon />
          <span className="text-[15px] text-gray-950 font-normal">
            Where I went to school: NICMAR GOA
          </span>
        </div>
      </div>
    </div>
  );
}
