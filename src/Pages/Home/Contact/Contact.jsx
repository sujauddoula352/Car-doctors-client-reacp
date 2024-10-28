import calender from "../../../assets/icons/calender.png";
import phone from "../../../assets/icons/phone.png";
import location from "../../../assets/icons/location.png";
const Contact = () => {
  return (
    <div className="md:flex justify-between items-center h-[260px] bg-black text-white rounded-lg p-4">
      <div className="flex gap-2">
        <div className=" flex justify-center items-center">
          <img src={calender} alt="" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">We are open monday-friday</h3>
          <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
        </div>
      </div>
      <div className="flex gap-2 lg:py-0 py-6">
        <div className=" flex justify-center items-center">
          <img src={phone} alt="" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Have a question?</h3>
          <h2 className="text-2xl font-bold">+2546 251 2658</h2>
        </div>
      </div>
      <div className="flex gap-2">
        <div className=" flex justify-center items-center">
          <img src={location} alt="" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Need a repair? our address</h3>
          <h2 className="text-2xl font-bold">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
