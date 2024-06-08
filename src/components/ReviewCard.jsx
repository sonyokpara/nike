import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, feedback, customerName, rating }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer"
        className="object-cover w-[120px] h-[120px] rounded-full"
      />

      <p className="info-text mt-6 text-center max-w-sm">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
      </div>
      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
