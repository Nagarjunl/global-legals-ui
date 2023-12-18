import Frame from "../assets/Frame 20.png";
import Remove from "../assets/remove.png";
import React from "react";
import LawyerCard from "../components/LawyerCard";
import profileImg from "../assets/frame22.png";
import profileImg2 from "../assets/profilefarame.png";
import cupImage from "../assets/image 25.svg";
import Select from "../components/Select";
import Home from "../components/Home";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function SearchProfile() {
  return (
    <div className="container-md mx-20 my-auto">
      <div>
        <div>
          <Home />
        </div>

        <div className="mt-10 flex flex-wrap gap-5">
          <div>
            <Select />{" "}
          </div>
          <div>
            <Select />{" "}
          </div>
          <div>
            {" "}
            <Select />{" "}
          </div>
          <div>
            <Select />{" "}
          </div>
          <div>
            {" "}
            <Select />{" "}
          </div>
        </div>

        {/*  */}
        <div className=" flex flex- wrap mt-10 gap-10 align-text-center">
          <h2 className="mt-3 sm:text-lg"> Applied Filters</h2>

          <div class=" flex-wrap flex justify-between items-center m-1 font-medium py-1 px-5 bg-gray-100 rounded-full text-blue-500 bg-gray-100 border border-blue-200 ">
            {/* <div class="sm:text-lg font-normal leading-none max-w-full ">
              Labour and Employment{" "}
            </div> */}
             <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium text-blue-600  ring-gray-500/10">
             Labour and Employment{" "}

      </span>
            <div class="flex flex-auto ">
              <div>
                <IoIosCloseCircleOutline  className="ml-4 w-5 h-5 text-gray-700"/>
              </div>
            </div>
          </div>
          <div class=" flex-wrap flex justify-between items-center m-1 text-[14px] font-medium py-1 px-2 bg-gray -100 rounded-full text-blue-500 bg-gray-100 border border-blue-200 ">
            {/* <div class="sm:text-lg font-normal leading-none max-w-full ">
              Indiana, USA
            </div> */}
             <span className="inline-flex items-center rounded-md  px-2 py-1 text-sm font-medium text-blue-600  ring-gray-500/10">
             Indiana, USA

      </span>
            <div class="flex flex-auto ">
              <div>
                <IoIosCloseCircleOutline className="ml-4 h-5 w-5 text-gray-700"/>

              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%]  mt-10">
          <h2 className=" text-[30px]">
            There are 13 Attorneys in Indiana, USA
          </h2>
        </div>
        <div className="w-auto flex justify-center ">
          <Link to="/professionalDetails">  <LawyerCard
            image={Frame}
            fName="Bill Thompson Moreira "
            Cups={cupImage}
            topRated="Top Rated  Attorney"
            selfIntro="Myseld Bill thompson, served as a trusted adviser, valued legal representative and respected legal counsel..."
            pratcingAt="Densborn Blachly LLP"
            designation="Indiana USA Labor and Employment Attorney"
          /></Link>
        
        </div>
        <div className="w-[100%] flex justify-center ">
          <LawyerCard
            image={profileImg}
            fName="Skyler Walter White"
            pratcingAt="Harmony Legal Associates"
            designation="Personal Injury Attorney and Estate agency Attorney"
            selfIntro="With a steadfast commitment to justice, Terry John Paul excels as a Personal Injury Attorney, tirelessly championing the rights of those who have suffered harm due to the negligence of others"
          />
        </div>
        <div className="w-[100%] flex justify-center ">
          <LawyerCard
            image={profileImg2}
            fName="Terry John Paul"
            pratcingAt="Apex Legal Solutions"
            designation="Criminal Defense Attorney"
            selfIntro="With a strong background in Criminal Attorney, Terry John Paul brings a wealth of expertise to each case, providing strategic counsel and tireless representation."
          />
        </div>
      </div>
    </div>
  );
}

export default SearchProfile;