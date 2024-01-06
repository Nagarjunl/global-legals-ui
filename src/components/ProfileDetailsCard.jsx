import trophy from "../assets/tropy.png";
import telephone from "../assets/telephone.png";
import circle from "../assets/circle.png";
import PrimaryButton from "./PrimaryButton";
import PropTypes from 'prop-types';

import profileImg from "../assets/avator.png";

const baseUrl = import.meta.env.VITE_API_URL;

const ProfileCard = ({ data, hideSchedule }) => {
  return (
    <div>
      <div className=" rounded-l ">
        <div className="grid-cols-2 ">
          <div className="bg-white p-2 w-80 max-w-auto sm:w-full sm:p-4 h-auto sm:h-auto rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
            {/* <img src={profileimg} alt="frame" /> */}
            {
              data?.idProof ?
                (<img className="max-w-[150px]" src={`${baseUrl}${data?.idProof}`} alt="frame" />)
                :
                (<img className="max-w-[150px]" src={profileImg} alt="frame" />)
            }

            <div className="flex sm:flex-1 flex-col justify-end gap-2 p-1">
              <h1 className="text-lg sm:text-xl font-semibold  text-black">
                {data?.clientName}
              </h1>
              <div className=" flex  ">
                <span className="inline-flex items-center rounded-xl bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  <img src={trophy} alt="" className="sm:w-auto" />
                  Top Rated Attorney
                </span>
              </div>
              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  py-1 text-sm font-medium ">
                  <img src={telephone} alt="Phone" className="w-auto px-2" />
                  {" Practioning at "}
                  <a href="#" className="text-blue-700 px-2">
                    {data?.email}
                  </a>
                </span>
              </div>
              <div className=" flex text-lg text-gray-600 ">
                <span className="inline-flex  py-1 text-sm font-medium ">
                  <img
                    src={circle}
                    alt="Phone"
                    className=" px-2 w-10 h-6   sm:w-auto"
                  />
                  Indiana USA Labor and Employment Attorney
                </span>
              </div>

              <div className="  inline-block text-lg text-black ">
                <h3 className="inline-flex px-1 py-1 text-sm font-small ">
                  Client / Peer Review
                </h3>
                <div className="text-lg px-1">4.2 / 5.0</div>
              </div>
            </div>

            {!hideSchedule ?
              (<div className="mt-auto pb-5 ">
                <a
                  type="button"
                  className="rounded-md  w-full bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
                  href="callto:+04166783"
                >
                  Contact via Phone
                </a>

                <br />

                <a
                  type="button"
                  className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  href="mailto:global-legals@gmal.com"
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
