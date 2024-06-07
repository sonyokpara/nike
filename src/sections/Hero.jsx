import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start pt-28 max-xl:padding-x w-full">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span> Shoes
        </h1>
        <p>
          Discover the stylish Nike arrivals, quality, comfort, and innovation
          for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap mt-20 w-full gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
