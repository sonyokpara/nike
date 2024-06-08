import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex max-lg:flex-col justify-between items-center gap-10 max-container w-full"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize font-bold text-4xl max-lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          {" "}
          Our dedication to details and exellence ensures your satisfaction.{" "}
        </p>
        <div className="mt-10">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
