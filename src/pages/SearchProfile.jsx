import { CiCircleRemove } from "react-icons/ci";
// import Frame from "../assets/Frame 20.png";
// import Cups from "../assets/cups.png";
import React from "react";
import Lawercard from "../components/Lawercard";



function SearchProfile() {
  return (<>    <div>
      <div className="flex text-black-500 mt-10  font-Aspekta text-sm font-normal font-light leading-normal">
        <h1 className="text-[14px]">Home</h1>
        <h1 className="ml-40 text-[14px] text-blue-600">Find a Lawyer</h1>
      </div>
      <div className="mt-10 ml-0 flex flex-wrap">
        <select
          id="location"
          name="location"
          className=" px-20 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <select
          id="location"
          name="location"
          className=" px-20 ml-10 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <select
          id="location"
          name="location"
          className=" px-20 ml-10 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <select
          id="location"
          name="location"
          className=" px-20 ml-10 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <select
          id="location"
          name="location"
          className=" px-20 ml-10 mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
      <div className="flex flex-  wrap mt-10 gap-10">
        <h2 className="mt-3"> Applied Filters</h2>
        <div className=" flex  items-center rounded-[100px] gap-4">
          <div className=" rounded-full bg-gray-50 px-5 bg-gray-300   font-bold text-blue-600 ring-1 ring-inset ring-blue-600 ">
            Labour and Employment
            <button
              type="button"
              className=" h-10 w-10 rounded-full text-gray-600 justify-end "
            >
              <CiCircleRemove />
            </button>
          </div>
          <div className=" rounded-full bg-gray-50 px-5 bg-gray-300 font-bold text-blue-600 ring-1 ring-inset ring-blue-600 ">
            Labour and Employment
            <button
              type="button"
              className=" h-10 w-10 rounded-full text-gray-600 gap-2 "
            >
              <CiCircleRemove />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className=" text-[30px]">There are 13 Attorneys in Indiana, USA</h2>
      </div>
 
    </div>
    <Lawercard/>


 
    </>

  );
}

export default SearchProfile;
