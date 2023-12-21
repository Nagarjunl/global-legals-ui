import LawyerCard from "../components/LawyerCard";
import profileImg2 from "../assets/Frame22.svg";
import profileImg from "../assets/Frame20.svg";
import cupImage from "../assets/image25.svg";
import Select from "../components/Select";
import Home from "../components/Home";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const badgeData = [
  {
    badge: "Labour and Employment",
  },
  {
    badge: "India, USA",
  },
];
console.log(badgeData);
function SearchProfile() {
  return (
    <div className="container-md mx-20 my-auto">
      <div>
        <div>
          <Home />
        </div>
        <div className="mt-10 flex flex-wrap gap-5">
          <div>
            <Select fName={"Areas of Practice"} />
          </div>
          <div>
            <Select fName={"Locations"} />
          </div>
          <div>
            <Select fName={"Features"} />
          </div>
          <div>
            <Select fName={"Peer/Client Reviews"} />
          </div>
          <div>
            <Select fName={"Law School"} />
          </div>
        </div>
        <div className=" flex flex-wrap mt-4 gap-4 align-text-center">
          <h2 className=" sm:text-lg"> Applied Filters</h2>
          {badgeData.map((badges, index) => (
            <span
              className="inline-flex items-center gap-x-0.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-blue-600  ring-gray-500/10"
              key={index}
            >
              {badges.badge}
              <button
                type="button"
                className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20"
              >
                <span className="sr-only">Remove</span>
                <svg
                  viewBox="0 0 14 14"
                  className="h-4 w-4.5 stroke-gray-600/50 group-hover:stroke-gray-600/75"
                >
                  <IoIosCloseCircleOutline className="text-gray-500" />
                </svg>
                <span className="absolute -inset-1" />
              </button>
            </span>
          ))}
        </div>
        <div className="w-full  mt-10">
          <h2 className=" text-[30px]">
            There are 13 Attorneys in Indiana, USA
          </h2>
        </div>
        <div>
          <Link to="/profiledetails">
            <LawyerCard
              image={profileImg}
              fName="Bill Thompson Moreira "
              cups={cupImage}
              topRated="Top Rated  Attorney"
              selfIntro="Myseld Bill thompson, served as a trusted adviser, valued legal representative and respected legal counsel... "
              pratcingAt="Densborn Blachly LLP"
              designation="Indiana USA Labor and Employment Attorney"
            />
          </Link>
        </div>
        <div>
          <Link to="/profiledetails">
            <LawyerCard
              image={profileImg2}
              cups={cupImage}
              fName="Skyler Walter White"
              pratcingAt="Harmony Legal Associates"
              designation="Personal Injury Attorney and Estate agency Attorney"
              selfIntro="With Attorney, tirelessly championing the rights of those who have suffered harm due to the negligence of others"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchProfile;
