import { IoPricetag } from 'react-icons/io5';

export default function CouponCard() {
  return (
    <div className="bg-white border border-[#EBEBEB] rounded-[16px] p-4 flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.05)] w-full max-w-[410px] select-none">
      <div className="flex items-center space-x-4">
        {/* Green tilted coupon icon */}
        <div className="bg-[#E6F7F5] p-2.5 rounded-full flex items-center justify-center flex-shrink-0">
          <IoPricetag className="w-5 h-5 text-[#008489] transform -rotate-45" />
        </div>
        
        {/* Coupon texts */}
        <div className="flex flex-col text-[14px] text-gray-800 leading-tight">
          <span className="font-normal">Get 10% off your next stay.</span>
          <span className="underline cursor-pointer font-medium hover:text-black mt-0.5">
            Terms apply
          </span>
        </div>
      </div>

      {/* Claim button */}
      <button className="px-4 py-2.5 bg-[#F7F7F7] hover:bg-[#EBEBEB] text-gray-950 font-semibold text-[14px] rounded-lg transition-colors duration-150 cursor-pointer active:scale-[0.98]">
        Claim
      </button>
    </div>
  );
}
