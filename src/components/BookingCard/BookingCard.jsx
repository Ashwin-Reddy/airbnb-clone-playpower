import PriceHeader from './PriceHeader';
import DateSelector from './DateSelector';
import GuestSelector from './GuestSelector';
import ReserveButton from './ReserveButton';
import { bookingData } from './bookingData';

export default function BookingCard({ startDate, endDate }) {
  return (
    <div className="bg-white border border-[#DDDDDD] rounded-[24px] p-6 shadow-[rgba(0,0,0,0.12)_0px_6px_16px] w-full max-w-[410px] flex flex-col">
      {/* 1. Price Header */}
      <PriceHeader startDate={startDate} endDate={endDate} />

      {/* 2. Inputs Box (Date + Guest Selector) */}
      <div className="border border-[#B0B0B0] rounded-xl flex flex-col hover:border-gray-950 transition-colors duration-150 mb-4 overflow-hidden">
        <DateSelector startDate={startDate} endDate={endDate} />
        <GuestSelector />
      </div>

      {/* 3. Free Cancellation Banner */}
      <div className="bg-[#F7F7F7] border border-[#EBEBEB] rounded-xl py-3.5 px-4 text-center select-none text-[13px] text-gray-800 font-normal mb-4">
        <span>Free cancellation before </span>
        <span className="font-semibold">{bookingData.cancellationDate}</span>
      </div>

      {/* 4. Reserve Button */}
      <ReserveButton />

      {/* 5. Notice */}
      <p className="text-[14px] text-gray-500 font-normal text-center mt-3 select-none">
        You won't be charged yet.
      </p>
    </div>
  );
}
