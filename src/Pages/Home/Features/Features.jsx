import expert from "../../../assets/icons/group.svg";
import TimelyDelivery from "../../../assets/icons/group2.svg";
import person from "../../../assets/icons/person.svg";
import Wrench from "../../../assets/icons/Wrench.svg";
import check from "../../../assets/icons/check.svg";
import Delivery from "../../../assets/icons/deliveryt.svg";
const Features = () => {
  return (
    <div className="my-16">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-[#FF3811]">Core Features</h3>
        <h1 className="text-4xl font-bold">Why Choose Us</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="lg:flex justify-between my-4">
        <div className="flex flex-col justify-center items-center border rounded-lg p-2 md:w-44 md:h-40 shadow-lg">
          <img src={expert} alt="" />
          <h3>Expert Team</h3>
        </div>
        <div className="flex flex-col justify-center items-center border rounded-lg p-2 md:w-44 md:h-40 bg-red-400 shadow-lg">
          <img src={TimelyDelivery} alt="" />
          <h3>Timely Delivery</h3>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg p-2 md:w-44 md:h-40 shadow-lg">
          <img src={person} alt="" />
          <h3>24/7 Support</h3>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg p-2 md:w-44 md:h-40 shadow-lg">
          <img src={Wrench} alt="" />
          <h3>Best Equipment</h3>
        </div>
        <div className="flex flex-col justify-center items-center border rounded-lg p-2 md:w-44 md:h-40 shadow-lg">
          <img src={check} alt="" />
          <h3>100% Guranty</h3>
        </div>

        <div className="flex flex-col justify-center items-center border rounded-lg p-2 md:w-44 md:h-40 shadow-lg">
          <img src={Delivery} alt="" />
          <h3>Timely Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
