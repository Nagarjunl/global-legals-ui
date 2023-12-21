/* eslint-disable react/prop-types */
import Phone from "../assets/image 24.png";
import CircleImg from "../assets/circle.png";
import PrimaryButton from "./PrimaryButton";

const LawyerCard = ({
  image,
  fName,
  cups,
  topRated,
  pratcingAt,
  designation,
  selfIntro,
}) => {
  return (
    <>
      <div className="grid-cols-3  flex-wrap border border-blue-Gray-200 mt-10 rounded-xl w-full">
        <div className="bg-white p-2 w-80 max-w-auto sm:w-full sm:p-4 sm:h-auto rounded-2xl flex flex-col sm:flex-row gap-5 select-none">
          <div className="p-5">
            <img src={image} alt="frame" />
          </div>
          {/*  */}
          <div className="flex sm:flex-1 flex-col justify-end gap-2 p-1">
            <h1 className="text-lg sm:text-xl font-semibold  text-black">
              {fName}
            </h1>
            <div className=" flex  flex wrap gap-4 ">
              <span className="inline-flex  rounded-full items-center  bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {" Accepting Clients"}
              </span>
              {topRated && (
                <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  <img src={cups} alt="no image found" />
                  {topRated}
                </span>
              )}
            </div>
            <div className=" flex text-lg text-gray-600 ">
              <span className="inline-flex  py-2  text-sm font-medium ">
                <img src={Phone} alt="Phone" className="w-10 px-2" />
                {" Practioning at "}
                <span className="text-blue-700 px-2">{pratcingAt}</span>
              </span>
            </div>
            <div className=" flex text-lg text-gray-600 ">
              <span className="inline-flex  py-1 text-sm font-medium ">
                <img
                  src={CircleImg}
                  alt="Phone"
                  className=" px-2 w-auto h-6   sm:w-auto"
                />
                {designation}
              </span>
            </div>
            <div className=" flex text-lg text-gray-600 ">
              <span className="inline-flex  px-2 py-1 text-sm font-medium ">
                {selfIntro}
              </span>
            </div>
            <div className=" flex text-lg text-gray-500 ">
              <span className="inline-flex  px-2 py-1 text-sm font-small ">
                {"Client / Peer Review"}
              </span>
            </div>
            <div className="text-lg px-2">{"4.2 / 5.0"}</div>
          </div>
          <div className="mt-auto pb-5 ">
            <button
              type="button"
              className="rounded-md  w-full bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
            >
              Call via Phone
            </button>
            <br />

            <PrimaryButton buttonText="Call via mail" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LawyerCard;
