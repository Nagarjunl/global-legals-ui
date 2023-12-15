import { CiCircleRemove } from "react-icons/ci";
import Frame from "../assets/Frame 20.png";
import Cups from "../assets/cups.png";
import Remove from "../assets/remove.png";
import React from "react";
import Lawercard from "../components/Lawercard";
import profileimg from "../assets/frame22.png";
import profileimg2 from "../assets/profilefarame.png";
import { IoIosArrowForward } from "react-icons/io";
import ProfileCard from "../components/Profilecard";

function SearchProfile() {
  return (
    <>
      <div className=" border border-black ">
        <div className="  flex text-black-500 mt-10  font-Aspekta text-sm font-normal font-light leading-normal">
          <h1 className=" sm:text-lg">Home</h1>
          <IoIosArrowForward className="mt-2.5 ml-10 w-5" />
          <h1 className="ml-20  text-blue-600 sm:text-lg">Find a Lawyer</h1>
        </div>
        <div className="mt-10 flex flex-wrap">
          <select
            // id="location"
            // name="location"
            className=" px-20 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-black-900 ring-1 ring-inset ring-white-50 focus:ring-white-900 sm:text-md "
            defaultValue="Canada"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <select
            id="location"
            name="location"
            className=" px-20 ml-10 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-black-900 ring-1 ring-inset ring-white-300 focus:ring-2 focus:ring-black-600 sm:text-md sm:leading-6"
            defaultValue="Canada"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <select
            id="location"
            name="location"
            className=" px-20 ml-10 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-black-900 ring-1 ring-inset ring-white-300 focus:ring-2 focus:ring-black-600 sm:text-md sm:leading-6"
            defaultValue="Canada"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <select
            id="location"
            name="location"
            className=" px-20 ml-10 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-black-900 ring-1 ring-inset ring-white-300 focus:ring-2 focus:ring-black-900 sm:text-md sm:leading-4"
            defaultValue="Canada"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <select
            id="location"
            name="location"
            className=" px-20 ml-10 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10  ring-white-300 focus:ring-2 focus:ring-black-900 sm:text-sm sm:leading-4"
            defaultValue="Canada"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
        <div className=" flex flex- wrap mt-10 gap-10 align-text-center">
          <h2 className="mt-3 sm:text-lg"> Applied Filters</h2>
          {/* <div className=" flex flex item-start rounded-[100px] gap-4">
          <div className=" rounded-full text-[14px] bg-#F2F2F2-40 px-4  bg-gray-300   font-bold text-blue-600 ring-1 ring-inset ring-blue-600 ">
            Labour and Employment
            <button
              type="button"
              className=" h-10 w-10 rounded-full text-gray-600 justify-end "
            >
              <CiCircleRemove className="w-12 h-5"/>
            </button>
          </div>
          <div className="text-[14px] rounded-full bg-#f2f2f2-40 px-5 bg-gray-300 font-bold text-blue-600 ring-1 ring-inset ring-blue-600 ">
          Indiana, USA            <button
              
              className=" h-10 w-10 rounded-full text-gray-600 gap-2 "
            >
              <CiCircleRemove className="w-12 h-5"/>
            </button>
          </div>
        </div> */}
          <div class="flex justify-between items-center m-1 font-medium py-1 px-5 bg-gray rounded-full text-blue-600 bg-gray-100 border border-blue-700 ">
            <div class="sm:text-lg font-normal leading-none max-w-full ">
              Labour and Employment{" "}
            </div>
            <div class="flex flex-auto ">
              <div>
                <img src={Remove} alt="" className="px-4" />
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center m-1 text-[14px] font-medium py-1 px-2 bg-gray rounded-full text-blue-600 bg-gray-100 border border-blue-700 ">
            <div class="sm:text-lg font-normal leading-none max-w-full ">
              Indiana, USA
            </div>
            <div class="flex flex-auto ">
              <div>
                <img src={Remove} alt="" className="px-4" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-10"> */}
        <div className="w-[100%]  mt-10">
          <h2 className=" text-[30px]">
            There are 13 Attorneys in Indiana, USA
          </h2>
          </div>
        {/* </div> */}
        <div className="w-auto flex justify-center ">
          <Lawercard image={Frame} />
        </div>
        <div className="w-[100%] flex justify-center ">
          <Lawercard image={profileimg} />
        </div>
        <div className="w-[100%] flex justify-center ">
          <Lawercard image={profileimg2} />
        </div>
      </div>
    </>
  );
}

export default SearchProfile;
