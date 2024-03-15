import PropTypes from 'prop-types';
import profileImg from "../assets/avator.png";

// const baseUrl = import.meta.env.VITE_API_URL;
const baseUrl = "https://api.chitmanager.com/";

const ProfileCard = ({ data, hideSchedule }) => {

  return (
    <div className="rounded-l mt-3 mb-6 ">
      <div className="bg-white p-2 w-full max-w-auto sm:w-full sm:p-4 h-auto sm:h-auto rounded-2xl shadow-lg select-none border border-gray-300">

        <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex items-center justify-center">
            {
              data?.idProof ?
                <>
                  {data?.idProof.includes("https://") ?
                    <img className="w-auto h-[200px]" src={`${data?.idProof}`} alt="frame" />
                    :
                    <img className="w-auto h-[200px]" src={`${baseUrl}${data?.idProof}`} alt="frame" />
                  }
                </>
                :
                <img className="w-auto h-[200px]" src={profileImg} alt="frame" />
            }
          </div>

          <div className="sm:col-span-2">
            <div className="grid xs:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">

              <div>
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Name
                </h5>
                <div className="mt-1">
                  {data?.clientName}
                </div>
              </div>

              <div>
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Contact Number
                </h5>
                <div className="mt-1">
                  {data?.contactNumber}
                </div>
              </div>

              <div>
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Email
                </h5>
                <div className="mt-1">
                  {data?.businessMail}
                </div>
              </div>

              <div>
                <h5 className="font-normal leading-[17.16px] text-[12px]">
                  Address
                </h5>
                <div className="mt-1">
                  {data?.businessAddress}
                </div>
              </div>

              {data?.practicingLaw !== "null" &&
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Name of practicing law firm
                  </h5>
                  <div className="mt-1">
                    {data?.practicingLaw}
                  </div>
                </div>
              }

              {data?.legalSpecialization !== "null" &&
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Legal Specialization
                  </h5>

                  <div className="mt-1">
                    {data?.legalSpecialization}
                  </div>
                </div>
              }

              {data?.experience !== "null" &&
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Years of Experience
                  </h5>

                  <div className="mt-1">
                    {data?.experience}
                  </div>
                </div>
              }

              {data?.languages !== "null" &&
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Languages Spoken
                  </h5>

                  <div className="mt-1">
                    {data?.languages}
                  </div>
                </div>
              }

              {data?.companyWebsite !== "null" &&
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Company website
                  </h5>
                  <div className="mt-2">
                    {data?.companyWebsite}
                  </div>
                </div>
              }

              {data?.coverageArea !== "null" &&
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                    Coverage Areas
                  </h5>
                  <div className="mt-2">
                    {data?.coverageArea}
                  </div>
                </div>
              }

            </div>

            {!hideSchedule ?

              (
                <>
                  <div className="flex-1 border-t border-gray-300 mt-7"></div>

                  <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 justify-items-end">
                    <div className="mt-3 pb-5 w-full ">
                      <a
                        type="button"
                        className="mr-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
                        href={`callto:${data?.contactNumber}`}
                      >
                        Contact via Phone
                      </a>

                      <a
                        type="button"
                        className=" rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        href={`mailto:${data?.businessMail}`}
                      >
                        Contact via Mail
                      </a>
                    </div>

                  </div>
                </>
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
