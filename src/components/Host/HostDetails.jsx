
const ShieldIcon = () => (
  <svg viewBox="0 0 32 32" className="w-[18px] h-[18px] text-gray-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 2L3 7v10c0 5.5 3.5 10 13 13 9.5-3 13-7.5 13-13V7L16 2z" />
  </svg>
);

export default function HostDetails() {
  return (
    <div className="flex flex-col text-left select-none w-full">
      <h3 className="text-[16px] font-bold text-gray-950 mb-3 tracking-tight">
        Host details
      </h3>

      <div className="flex flex-col space-y-1.5 text-[14px] text-gray-800 font-normal mb-5 leading-none">
        <span>Response rate: 100%</span>
        <span>Responds within an hour</span>
      </div>

      <button 
        className="w-[136px] h-[48px] bg-[#F7F7F7] text-gray-950 font-bold border border-gray-950 rounded-xl hover:bg-gray-100 active:scale-[0.98] transition-all text-center text-[15px] cursor-pointer focus:outline-none mb-6"
      >
        Message host
      </button>

      {/* Safety Notice block (No top border/divider) */}
      <div className="flex items-start space-x-3 max-w-[340px]">
        <ShieldIcon />
        <span className="text-[12px] text-gray-500 leading-[1.4] font-normal">
          To help protect your payment, always use Airbnb to send money and communicate with hosts.
        </span>
      </div>
    </div>
  );
}
