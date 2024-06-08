const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 rounded-full font-montserrat leading-normal text-white text-lg py-3 px-7 bg-coral-red border border-coral-red">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="right arrow icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
