import { Container } from "postcss";
import React from "react";

function Appointments() {
  return (
    <>
      <div className="">
        <div className=" mt-10 flex justify-between items-center ">
        <h2 className=" px-0 text-semibold 28 text-black ">Appointments</h2>
          <select
            id="location"
            name="location"
            className="justify-end block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 me-72"
            defaultValue="Canada"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
        <div class=" max-w-sm flex min-w-full justify-start ">
        <div class=" max-w-sm rounded border mr-5">
          <div className="px-10 py-5">
            <p className=" max-w-2xl text-leading-6 text-gray-500">
              Client Name
            </p>
            <h5 className="mt-3 text-base text-16 text-black-900">
            Wangari Maathai            </h5>
            <p className="mt-3 max-w-2xl text-14 text-gray-500">Legal Matter</p>
            <h3 className="mt-3 text-base text-16 text-black-900">
            Criminal Law            </h3>
            <p className="mt-3 max-w-2xl text-14 text-gray-500">Phone number</p>
            <h3 className="mt-3 text-base text-16 text-black-900">
            +1 - 348-5829-590            </h3>
            <p className="mt-3 max-w-2xl text-14 text-gray-500">
              Appoinment Date & Time
            </p>
            <h3 className="mt-3 text-base text-16 text-black-900,mt-5">
              10’Apr 2023 / 12:00 PM{" "}
            </h3>
            <h3 className=" ml-20 px-0 py-5  text-blue-900">
              Reschedule Meeting{" "}
            </h3>
            <button
              type="button"
              className="rounded-md bg-indigo-500 ml-10  px-10 py-2 text-sm  text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Join via virtual meet
            </button>
          </div>
          </div>
          <br />
          {/*  */}
          <div class=" max-w-sm rounded  border">
          <div className="px-10 py-5">
            <p className=" max-w-2xl text-leading-6 text-gray-500">
              Client Name
            </p>
            <h5 className="mt-3 text-base text-16 text-black-900">
              Martin Luther king
            </h5>
            <p className="mt-3 max-w-2xl text-14 text-gray-500">Legal Matter</p>
            <h3 className="mt-3 text-base text-16 text-black-900">
              Corporate Law
            </h3>
            <p className="mt-3 max-w-2xl text-14 text-gray-500">Phone number</p>
            <h3 className="mt-3 text-base text-16 text-black-900">
              +1 - 385-3499-594
            </h3>
            <p className="mt-3 max-w-2xl text-14 text-gray-500">
              Appoinment Date & Time
            </p>
            <h3 className="mt-3 text-base text-16 text-black-900,mt-5">
              10’Apr 2023 / 12:00 PM{" "}
            </h3>
            <h3 className=" ml-20 px-0 py-5  text-blue-900">
              Reschedule Meeting{" "}
            </h3>
            <button
              type="button"
              className="rounded-md bg-indigo-500 ml-10  px-10 py-2 text-sm  text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Join via virtual meet
            </button>
          </div>
          </div>
          </div>
          </div>
        
      
    </>
  )
}

export default Appointments;
