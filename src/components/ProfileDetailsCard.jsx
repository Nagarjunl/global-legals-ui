import trophy from "../assets/tropy.png";
import PropTypes from 'prop-types';
import CircleImg from "../assets/circle.png";
import Phone from "../assets/image 24.png";
import profileImg from "../assets/avator.png";

// const baseUrl = import.meta.env.VITE_API_URL;
const baseUrl = "https://api.chitmanager.com/";

const ProfileCard = ({ data, hideSchedule }) => {
  return (
    <div>
      <div className=" rounded-l ">
        <div className="grid-cols-2 ">
          <div className="bg-white p-2 w-80 max-w-auto sm:w-full sm:p-4 h-auto sm:h-auto rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
            <div className="flex justify-center p-5">

              {
                data?.idProof ?
                  (<img className="w-auto h-[200px]" src={`${baseUrl}${data?.idProof}`} alt="frame" />)
                  :
                  (<img className="w-auto h-[200px]" src={profileImg} alt="frame" />)
              }
            </div>

            <div className="flex sm:flex-1 flex-col justify-center gap-2 p-1">
              <h1 className="text-lg sm:text-xl font-semibold  text-black">
                {data?.clientName}
              </h1>
              <div className=" flex  ">
                <div className=" flex  flex wrap gap-4 ">
                  <span className="inline-flex  rounded-full items-center  bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    {" Accepting Clients"}
                  </span>
                  {data?.topRated && (
                    <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                      <img src={trophy} alt="no image found" />
                      {data?.topRated}
                    </span>
                  )}
                </div>
              </div>
              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  py-2  text-sm font-medium ">
                  <img src={CircleImg}
                    alt="Phone"
                    className="pr-2 w-auto h-6 sm:w-auto"
                  />
                  {data?.type}
                  {/* <span className="text-blue-700 px-2">
                    {
                      data?.type === "Lawyers" ? data?.businessName - data?.practicingLaw :
                        data?.type === "Bail Bondsman" ? data?.licenseNumber :
                          data?.type === "Private Investigators" ? data?.licenseNumber : data?.licenseNumber
                    }
                  </span> */}
                </span>
              </div>
              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  py-1 text-sm font-medium ">
                  <img
                    src={Phone}
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
                  State : {data?.businessAddress}
                </span>
              </div>

              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  px-2 py-1 text-sm font-medium ">
                  {data?.selfIntro}
                </span>
              </div>
            </div>

            {!hideSchedule ?
              (<div className="mt-auto pb-5 ">
                <a
                  type="button"
                  className="rounded-md  w-full bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
                  href={`callto:${data?.contactNumber}`}
                >
                  Contact via Phone
                </a>

                <br />

                <a
                  type="button"
                  className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  href={`mailto:${data?.businessMail}`}
                >
                  Contact via Mail
                </a>
              </div>
              ) : ""
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  data: PropTypes.object,
  hideSchedule: PropTypes.bool,
}
