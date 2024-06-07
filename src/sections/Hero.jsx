import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start pt-28 max-xl:padding-x w-full">
        <p className="text-lg font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:leading-[1.15] max-sm:text-[72px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-lg font-montserrat mt-6 mb-12 text-slate-gray max-sm:max-w-sm">
          Discover the stylish Nike arrivals, quality, comfort, and innovation
          for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap mt-20 w-full gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin font-bold text-4xl">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-hero bg-primary bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="big shoe image"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
