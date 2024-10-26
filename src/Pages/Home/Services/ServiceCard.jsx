import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl hover:w-80">
        <figure className="px-10 pt-10">
          <img src={img} alt="Serviec Img" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div>
            <p className="text-xl flex justify-between font-semibold text-[#FF3811]">
              Price: $ {price} <AiOutlineArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
ServiceCard.prototype = {
  service: PropTypes.string.isRequired,
};
