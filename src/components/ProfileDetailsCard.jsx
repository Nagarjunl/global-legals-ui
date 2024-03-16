import PropTypes from 'prop-types';
import profileImg from "../assets/avator.png";
import { FaPhoneSquareAlt, FaEnvelope, FaMapMarkerAlt, FaBlackTie } from "react-icons/fa";
import { BAIL_BONDSMAN, LAWYERS, PRIVATE_INVESTIGATORS, SECURITY } from '../constants/constants';

// const baseUrl = import.meta.env.VITE_API_URL;
const baseUrl = "https://api.chitmanager.com/";

const ProfileCard = ({ data, hideSchedule }) => {

  return (
    <div className="rounded-l mt-3 mb-6 ">
      <div className="p-2 w-full max-w-auto sm:w-full sm:p-4 h-auto sm:h-auto bg-gray-100">

        <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            {/* <div className='pb-3'>
              <h3 className="font-medium leading-[34.32px] text-[24px] uppercase">
                {data?.clientName}
              </h3>
              <h3 className="font-light leading-[34.32px] text-[20px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit">
                {data?.type}
              </h3>
            </div> */}

            <div className="flex items-start justify-start">
              {
                data?.idProof ?
                  <>
                    {data?.idProof.includes("https://") ?
                      <img className="w-10/12" src={`${data?.idProof}`} alt="frame" />
                      :
                      <img className="w-10/12" src={`${baseUrl}${data?.idProof}`} alt="frame" />
                    }
                  </>
                  :
                  <img className="w-10/12" src={profileImg} alt="frame" />
              }
            </div>
          </div>

          <div className="sm:col-span-2">

            <div className='mb-6'>
              <h3 className="font-light leading-[34.32px] text-[20px] uppercase">
                {data?.type}
              </h3>
              <h3 className="font-medium leading-[34.32px] text-[24px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit">
                {data?.clientName}
              </h3>
            </div>

            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
              <div className='flex items-center justify-start'>
                <div className='pr-4'>
                  <FaPhoneSquareAlt className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h5 className="font-normal text-[12px]">
                    Contact Number
                  </h5>
                  <div>
                    {data?.contactNumber}
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start'>
                <div className='pr-4'>
                  <FaEnvelope className="w-7 h-7 text-gray-400" />
                </div>
                <div>
                  <h5 className="font-normal text-[12px]">
                    Email
                  </h5>
                  <div className="mt-1">
                    {data?.businessMail}
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start'>
                <div className='pr-4'>
                  <FaMapMarkerAlt className="w-7 h-7 text-gray-400" />
                </div>
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Address
                  </h5>
                  <div className="mt-1">
                    {data?.businessAddress}
                  </div>
                </div>
              </div>

              {data?.type === BAIL_BONDSMAN &&
                <div className='flex items-center justify-start'>
                  <div className='pr-4'>
                    <FaBlackTie className="w-7 h-7 text-gray-400" />
                  </div>
                  <div>
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                      Full Legal Business Name
                    </h5>
                    <div className="mt-1">
                      {data?.ownerAgentInformation}
                    </div>
                  </div>
                </div>
              }
            </div>


            {data?.type === LAWYERS &&
              <>
                <div className="flex-1 border-t border-gray-300 my-7"></div>

                <h3 className="font-medium leading-[34.32px] text-[24px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit mb-4">
                  Professional Details
                </h3>

                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                  {data?.experience !== "null" && data?.experience !== "" && data?.experience !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Years of Experience
                      </h5>

                      <div className="mt-1">
                        {data?.experience}
                      </div>
                    </div>
                  }

                  {data?.practicingLaw !== "null" && data?.practicingLaw !== "" && data?.practicingLaw !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Name of practicing law firm
                      </h5>
                      <div className="mt-1">
                        {data?.practicingLaw}
                      </div>
                    </div>
                  }

                  {data?.companyWebsite !== "null" && data?.companyWebsite !== "" && data?.companyWebsite !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Company website
                      </h5>
                      <div className="mt-2">
                        {data?.companyWebsite}
                      </div>
                    </div>
                  }

                  {data?.legalSpecialization !== "null" && data?.legalSpecialization !== "" && data?.legalSpecialization !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Legal Specialization
                      </h5>

                      <div className="mt-1">
                        {data?.legalSpecialization}
                      </div>
                    </div>
                  }


                  {data?.lawField !== "null" && data?.lawField !== "" && data?.lawField !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Law Field Specialized in
                      </h5>

                      <div className="mt-1">
                        {data?.lawField}
                      </div>
                    </div>
                  }

                </div>
              </>
            }

            {data?.type !== LAWYERS &&
              <>
                <div className="flex-1 border-t border-gray-300 my-7"></div>

                <h3 className="font-medium leading-[34.32px] text-[24px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit mb-4">
                  Service Details
                </h3>

                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                  {data?.experience !== "null" && data?.experience !== "" && data?.experience !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Years of Experience
                      </h5>

                      <div className="mt-1">
                        {data?.experience}
                      </div>
                    </div>
                  }

                  {data?.feeStructure !== "null" && data?.feeStructure !== "" && data?.feeStructure !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Fee Structure
                      </h5>

                      <div className="mt-1">
                        {data?.feeStructure}
                      </div>
                    </div>
                  }

                  {data?.typesOfBonds !== "null" && data?.typesOfBonds !== "" && data?.typesOfBonds !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Types of bonds served
                      </h5>

                      <div className="flex flex-wrap gap-4 mt-2">
                        {
                          data?.typesOfBonds.split(",")
                            .map((item) => (
                              <>
                                <span className="inline-flex  rounded-full items-center  bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                  {item}
                                </span>
                              </>
                            ))
                        }
                      </div>

                    </div>
                  }

                  {data?.tsso !== "null" && data?.tsso !== "" && data?.tsso !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Types of services offered
                      </h5>

                      <div className="flex flex-wrap gap-4 mt-2">
                        {
                          data?.tsso.split(",")
                            .map((item) => (
                              <>
                                <span className="inline-flex  rounded-full items-center  bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                  {item}
                                </span>
                              </>
                            ))
                        }
                      </div>

                    </div>
                  }
                </div>

              </>
            }

            {data?.type === SECURITY &&
              <>
                <div className="flex-1 border-t border-gray-300 my-7"></div>

                <h3 className="font-medium leading-[34.32px] text-[24px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit mb-4">
                  Military Background
                </h3>

                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                  {data?.branchOfService !== "null" && data?.branchOfService !== "" && data?.branchOfService !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Branch of Service
                      </h5>

                      <div className="mt-1">
                        {data?.branchOfService}
                      </div>
                    </div>
                  }

                  {data?.rankAtDischarge !== "null" && data?.rankAtDischarge !== "" && data?.rankAtDischarge !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Rank at Discharge
                      </h5>

                      <div className="mt-1">
                        {data?.rankAtDischarge}
                      </div>
                    </div>
                  }

                  {data?.mos !== "null" && data?.mos !== "" && data?.mos !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Military Occupational Speciality
                      </h5>

                      <div className="mt-1">
                        {data?.mos}
                      </div>
                    </div>
                  }
                </div>


                <div className="flex-1 border-t border-gray-300 my-7"></div>

                <h3 className="font-medium leading-[34.32px] text-[24px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit mb-4">
                  Business Information
                </h3>

                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                  {data?.businessName !== "null" && data?.businessName !== "" && data?.businessName !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Business Name
                      </h5>

                      <div className="mt-1">
                        {data?.businessName}
                      </div>
                    </div>
                  }

                  {data?.location !== "null" && data?.location !== "" && data?.location !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Business Address
                      </h5>

                      <div className="mt-1">
                        {data?.location}
                      </div>
                    </div>
                  }

                  {data?.additionalMail !== "null" && data?.additionalMail !== "" && data?.additionalMail !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Business Email
                      </h5>

                      <div className="mt-1">
                        {data?.additionalMail}
                      </div>
                    </div>
                  }

                  {data?.businessPhoneNumber !== "null" && data?.businessPhoneNumber !== "" && data?.businessPhoneNumber !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Business Phone number
                      </h5>

                      <div className="mt-1">
                        {data?.businessPhoneNumber}
                      </div>
                    </div>
                  }
                </div>

              </>
            }

            {data?.type === PRIVATE_INVESTIGATORS &&
              <>
                <div className="flex-1 border-t border-gray-300 my-7"></div>

                <h3 className="font-medium leading-[34.32px] text-[24px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit mb-4">
                  Military Background
                </h3>

                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                  {data?.branchOfService !== "null" && data?.branchOfService !== "" && data?.branchOfService !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Branch of Service
                      </h5>

                      <div className="mt-1">
                        {data?.branchOfService}
                      </div>
                    </div>
                  }

                  {data?.rankAtDischarge !== "null" && data?.rankAtDischarge !== "" && data?.rankAtDischarge !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Rank at Discharge
                      </h5>

                      <div className="mt-1">
                        {data?.rankAtDischarge}
                      </div>
                    </div>
                  }

                  {data?.mos !== "null" && data?.mos !== "" && data?.mos !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Military Occupational Speciality
                      </h5>

                      <div className="mt-1">
                        {data?.mos}
                      </div>
                    </div>
                  }
                </div>


                <div className="flex-1 border-t border-gray-300 my-7"></div>

                <h3 className="font-medium leading-[34.32px] text-[24px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit mb-4">
                  Business Information
                </h3>

                <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                  {data?.businessName !== "null" && data?.businessName !== "" && data?.businessName !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Business Name
                      </h5>

                      <div className="mt-1">
                        {data?.businessName}
                      </div>
                    </div>
                  }

                  {data?.location !== "null" && data?.location !== "" && data?.location !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Business Address
                      </h5>

                      <div className="mt-1">
                        {data?.location}
                      </div>
                    </div>
                  }

                  {data?.additionalMail !== "null" && data?.additionalMail !== "" && data?.additionalMail !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Business Email
                      </h5>

                      <div className="mt-1">
                        {data?.additionalMail}
                      </div>
                    </div>
                  }

                  {data?.businessPhoneNumber !== "null" && data?.businessPhoneNumber !== "" && data?.businessPhoneNumber !== null &&
                    <div>
                      <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Business Phone number
                      </h5>

                      <div className="mt-1">
                        {data?.businessPhoneNumber}
                      </div>
                    </div>
                  }
                </div>

              </>
            }


            <div className="flex-1 border-t border-gray-300 my-7"></div>

            {/* COVERAGE AREA */}
            <div className='my-4'>
              {data?.coverageArea !== "null" && data?.coverageArea !== "" && data?.coverageArea !== null &&
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Coverage Areas
                  </h5>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {
                      data?.coverageArea.split(",")
                        .map((item) => (
                          <>
                            <span className="inline-flex  rounded-full items-center  bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                              {item}
                            </span>
                          </>
                        ))
                    }
                  </div>
                </div>
              }
            </div>

            {/* LANGUAGES */}
            <div className='my-4'>
              {data?.languages !== "null" && data?.languages !== "" && data?.languages !== null &&
                <div>
                  <h5 className="font-normal leading-[17.16px] text-[12px]">
                    Languages Spoken
                  </h5>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {
                      data?.languages.split(",")
                        .map((item) => (
                          <>
                            <span className="inline-flex  rounded-full items-center  bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                              {item}
                            </span>
                          </>
                        ))
                    }
                  </div>
                </div>
              }
            </div>

            {data?.professional !== "null" && data?.professional !== "" && data?.professional !== null &&
              <>
                <div className="flex-1 border-t border-gray-300 my-7"></div>

                <div>
                  <h3 className="font-medium leading-[34.32px] text-[24px] uppercase border-solid border-b-2  border-custom-[orange] max-w-fit mb-4">
                    About Myself
                  </h3>

                  <div className="mt-2 professional_data text-justify">
                    <div dangerouslySetInnerHTML={{ __html: data?.professional }} />
                  </div>
                </div>
              </>
            }

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
