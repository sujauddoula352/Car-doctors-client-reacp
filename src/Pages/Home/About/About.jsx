import person from "../../../assets/images/about_us/person.jpg";
import part from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero my-5">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-xl shadow-blue-500"
          />
          <img
            src={part}
            className="w-1/2 absolute  border-[10px] right-5 top-1/2 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-xl font-bold text-[#FF3811]">About us</h1>
          <h3 className="py-6 font-bold text-5xl">
            We are qualified <br />& of experience <br /> in this field
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-[#FF3811]/65 ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
