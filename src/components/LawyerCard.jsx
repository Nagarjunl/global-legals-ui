import React from "react";
import Phone from "../assets/image 24.png";
import CircleImg from "../assets/circle.png";

const LawyerCard = ({
  image,
  fName,
  Cups,
  topRated,
  pratcingAt,
  designation,
  selfIntro,
}) => {
  return (
    <>
      <div className="grid-cols-2 border border-blueGray-200 mt-10 rounded-xl w-full">
        <div class="bg-white p-2 w-80 max-w-auto sm:w-full sm:p-4 h-auto sm:h-auto rounded-2xl flex flex-col sm:flex-row gap-5 select-none">
          <div className="p-5">
            <img src={image} alt="frame" />
          </div>
          {/*  */}
          <div class="flex sm:flex-1 flex-col justify-end gap-2 p-1">
            <h1 class="text-lg sm:text-xl font-semibold  text-black">
              {fName}
            </h1>
            <div className=" flex gap-4 ">
              <span className="inline-flex  rounded-xl items-center  bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {" Accepting Clients"}
              </span>
              {topRated && (
                <span className="inline-flex items-center rounded-xl bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  <img src={Cups} alt="" />
                  {topRated}
                </span>
              )}
            </div>
            <div class=" flex text-lg text-gray-600 ">
              <span className="inline-flex  py-1 text-sm font-medium ">
                <img src={Phone} alt="Phone" className="w-auto px-2" />
                {" Practioning at "}
                <span className="text-blue-700 px-2">{pratcingAt}</span>
              </span>
            </div>
            <div class=" flex text-lg text-gray-600 ">
              <span className="inline-flex  py-1 text-sm font-medium ">
                <img
                  src={CircleImg}
                  alt="Phone"
                  className=" px-2 w-10 h-6   sm:w-auto"
                />
                {designation}
              </span>
            </div>
            <div class=" flex text-lg text-gray-600 ">
              <span className="inline-flex  px-2 py-1 text-sm font-medium ">
                {selfIntro}
              </span>
            </div>
            <div class=" flex text-lg text-gray-500 ">
              <span className="inline-flex  px-2 py-1 text-sm font-small ">
                {"Client / Peer Review"}
              </span>
            </div>
            <div className="text-lg px-2">{"4.2 / 5.0"}</div>
            {/*  */}
          </div>
          <div className="item-center mt-20 ml-10">
            <div className="item-center">
              <button
                class="middle none center mr-3 rounded-lg border border-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-dark="true"
              >
                Call via Phone
              </button>
              <br />
              <button
                class="middle  mt-3 none center  mr-3 rounded-lg bg-blue-500 py-3 px-8 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Call via mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawyerCard;
