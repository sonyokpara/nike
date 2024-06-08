import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="font-palanquin font-bold text-4xl lg:max-w-md leading-[68px]">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <div className="w-full flex items-center max-sm:flex-col lg:max-w-[40%] gap-5 sm:border sm:border-slate-gray rounded-full p-2.5">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
