/* eslint-disable react/prop-types */
import Phone from "../assets/image 24.png";
import CircleImg from "../assets/circle.png";
import PrimaryButton from "./PrimaryButton";
import profileImg from "../assets/avator.png";

const baseUrl = import.meta.env.VITE_API_URL;
// const baseUrl = "https://api.chitmanager.com/";

const LawyerCard = ({ data }) => {
  const idp = data?.idProof;
  const proof = idp.includes("https://");
  return (
    <>
      <div>
        <div className="flex-wrap  mt-10">
          <div className="bg-white p-2 border border-blue-Gray-200  sm:p-4 sm:h-auto rounded-xl flex flex-col sm:flex-row gap-5 select-none border border-gray-300 shadow-md">
            <div className="flex justify-center p-5">
              {
                data?.idProof ?
                  <>
                    {proof === true ?
                      <img className="w-auto h-[200px]" src={`${data?.idProof}`} alt="frame" />
                      :
                      <img className="w-auto h-[200px]" src={`${baseUrl}${data?.idProof}`} alt="frame" />
                    }
                  </>
                  :
                  <img className="w-auto h-[200px]" src={profileImg} alt="frame" />
              }
            </div>
            <div className="flex sm:flex-1 flex-col justify-center gap-2 p-1">
              <h1 className="text-left text-lg sm:text-xl font-semibold  text-black">
                {data?.clientName}
              </h1>
              <div className=" flex flex-wrap gap-4">
                <span className="inline-flex  rounded-full items-center  bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {" Accepting Clients"}
                </span>
                {/* {topRated && (
                  <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    <img src={cups} alt="no image found" />
                    {topRated}
                  </span>
                )} */}
              </div>
              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  py-2  text-sm font-medium ">
                  <img
                    src={CircleImg}
                    alt="Phone"
                    className="pr-2 w-auto h-6 sm:w-auto"
                  />
                  {data?.type}
                </span>
              </div>
              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  py-2  text-sm font-medium ">
                  <img src={Phone}
                    alt="Phone"
                    className="pr-2 w-auto h-6 sm:w-auto"
                  />
                  Contact Number : {data?.contactNumber}
                </span>
              </div>
              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  py-1 text-sm font-medium ">
                  <img
                    src={CircleImg}
                    alt="Phone"
                    className="pr-2 w-auto h-6 sm:w-auto"
                  />
                  Mail : {data?.businessMail}
                </span>
              </div>
              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  py-1 text-sm font-medium ">
                  <img
                    src={CircleImg}
                    alt="Phone"
                    className="pr-2 w-auto h-6 sm:w-auto"
                  />
                  State
                  <span className="text-blue-700 px-2">{data?.businessAddress}</span>
                </span>
              </div>
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
      </div>
    </>
  );
};

export default LawyerCard;
