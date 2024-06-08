import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin font-bold text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto max-w-lg text-center mt-4">
        Hear genuine stories from our statisfied customers about their
        expectational experiences with us.
      </p>

      <div className="mt-12 flex max-lg:flex-col justify-evenly items-center gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            feedback={review.feedback}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
