import usa from "../assets/USA.png";
import avatar1 from "../assets/Rectangle3.png";
import avatar2 from "../assets/Rectangle2.png";
import avatar3 from "../assets/Rectangle4.png";

const LeftsideBar = () => {
  return (
    <div>
      <h2 className="text-white pb-2 font-semibold text-3xl">
        Welcome to Globallegals
      </h2>
      <p className="text-white">
        Connecting you with the professionals you need, right in
        <br />
        <span> your neighborhood!</span>
      </p>
      <div className=" relative">
        <div className=" static">
          <img src={usa} />
        </div>

        <div className="static">
          <img className="absolute top-10 left-44" src={avatar1} alt="" />
          <img className="absolute bottom-24 left-10" src={avatar2} alt="" />
          <img className="absolute bottom-2 right-14" src={avatar3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftsideBar;
