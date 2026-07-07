import CouponCard from './CouponCard';
import BookingCard from './BookingCard';
import ReportListing from './ReportListing';

export default function RightSidebar({ startDate, endDate }) {
  return (
    <aside className="sticky top-[100px] self-start flex flex-col space-y-6 max-w-[410px] w-full">
      {/* 1. Coupon Card */}
      <CouponCard />

      {/* 2. Booking Card */}
      <BookingCard startDate={startDate} endDate={endDate} />

      {/* 3. Report Listing Link */}
      <ReportListing />
    </aside>
  );
}
