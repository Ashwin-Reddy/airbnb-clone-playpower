import OverallRating from './OverallRating';
import RatingBreakdown from './RatingBreakdown';
import ReviewChips from './ReviewChips';
import ReviewsGrid from './ReviewsGrid';
import ShowAllReviewsButton from './ShowAllReviewsButton';

export default function ReviewsSection() {
  return (
    <section className="w-full flex flex-col pt-8">
      {/* 1. Large Laurels Rating */}
      <OverallRating />

      {/* 2. Rating Breakdown Bar Rows */}
      <RatingBreakdown />

      {/* 3. Review Category Chips */}
      <ReviewChips />

      {/* 4. Review Cards Grid */}
      <ReviewsGrid />

      {/* 5. Show All Reviews Action Button */}
      <ShowAllReviewsButton />
    </section>
  );
}
