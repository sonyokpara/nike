const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] max-sm:min-w-[350px] w-full shadow-3xl px-10 py-16 rounded-[20px]">
      <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-bold font-palanquin leading-normal text-3xl">
        {label}
      </h3>
      <p className="text-lg mt-2 leading-normal font-montserrat break-words text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
