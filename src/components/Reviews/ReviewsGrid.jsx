import ReviewCard from './ReviewCard';
import { reviewsData } from '../../data/reviews';

export default function ReviewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 w-full">
      {reviewsData.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
