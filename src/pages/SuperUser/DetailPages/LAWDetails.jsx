import PropTypes from 'prop-types';
import profileImg from "../../../assets/avator.png";

const LAWDetails = ({ data, baseUrl }) => {
    return (
        <div className="container mx-auto">
            <div className="mt-10">
                <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
                    <h3 className="lg:col-span-3 font-medium leading-[34.32px] text-[24px]">
                        Personal Information
                    </h3>

                    <div className="sm:col-span-2">
                        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Enter your full name *
                                </h5>
                                <div className="mt-2">
                                    {data?.clientName}
                                </div>
                            </div>
                            <div>
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Enter Email Address *
                                </h5>
                                <div className="mt-2">
                                    {data?.businessMail}
                                </div>
                            </div>
                        </div>

                        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">

                            <div className="mt-2">
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Contact number *
                                </h5>
                                <div className="mt-2">
                                    {data?.contactNumber}
                                </div>
                            </div>
                            <div className="mt-2">
                                <h5 className="font-normal leading-[17.16px] text-[12px]">
                                    Location / Address *
                                </h5>
                                <div className="mt-2">
                                    {data?.businessAddress}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border border-dashed border-gray-900/25">
                        <div className="flex justify-center">
                            <div className="text-center mb-2 ">
                                <div className="w-56">
                                    {data?.idProof ?
                                        <img
                                            className="img-fluid2"
                                            src={`${baseUrl}${data?.idProof}`}
                                            alt="..."
                                        />
                                        :
                                        <img className="img-fluid2" src={profileImg} alt="" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Write a professional Bio
                    </h5>

                    <div className="mt-2 professional_data">
                        <div dangerouslySetInnerHTML={{ __html: data?.professional ? data?.professional : "Not Filled" }} />
                    </div>
                </div>
            </div>

            <div>
                <div className="mt-10">
                    <h3 className="mb-4 font-medium leading-[34.32px] text-[24px] mt-2 text-gray-900 sm:col-span-6">
                        Professional details
                    </h3>

                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Name of practicing law firm
                            </h5>
                            <div className="mt-2">
                                {data?.practicingLaw ? data?.practicingLaw : "Not Filled"}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Legal Specialization
                            </h5>

                            <div className="mt-2">
                                {data?.legalSpecialization ? data?.legalSpecialization : "Not Filled"}
                            </div>
                        </div>
                    </div>

                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Years of Experience
                            </h5>

                            <div className="mt-2">
                                {data?.experience ? data?.experience : "Not Filled"}
                            </div>
                        </div>

                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Bar Association License Number
                            </h5>
                            <div className="mt-2">
                                {data?.licenseNumber ? data?.licenseNumber : "Not Filled"}
                            </div>
                        </div>
                    </div>

                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-gray-200 py-3 sm:col-span-1 sm:px-0">
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Coverage Areas
                            </h5>

                            <div className="mt-2">
                                {data?.coverageArea ? data?.coverageArea : "Not Filled"}
                            </div>
                        </div>
                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Law Field Specialized in
                            </h5>

                            <div className="mt-2">
                                {data?.lawField ? data?.lawField : "Not Filled"}
                            </div>
                        </div>
                    </div>

                    <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">

                        <div>
                            <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                                Languages Spoken
                            </h5>

                            <div className="mt-2">
                                {data?.languages ? data?.languages : "Not Filled"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h3 className="font-medium leading-[34.32px] text-[24px] mt-10">
                    Professional Enhancement
                </h3>

                <div className="flex justify-between  flex-wrap flex-row w-full mt-2">
                    <p className="mt-2 text-[14px]">
                        Boost Your Profile! Connect Google Reviews and Testimonials to
                        showcase your expertise. Click below to
                        <br /> elevate your professional reputation on Global legals
                    </p>
                </div>
            </div>

            <div className="flex-1 border-t border-gray-300 mt-3"></div>

            <div className="mt-4">
                <div className='mb-4'>
                    <h5 className="font-normal leading-[17.16px] text-[12px]">
                        Calendly Event Link
                    </h5>
                    <div className="mt-2">
                        {data?.calendlyUrl ? data?.calendlyUrl : "Not Filled"}
                    </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4 border-t border-b border-gray-200 py-3 sm:col-span-1 sm:px-0">
                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Linkedin profile
                        </h5>
                        <div className="mt-2">
                            {data?.linkedInProfile ? data?.linkedInProfile : "Not Filled"}
                        </div>
                    </div>

                    <div>
                        <h5 className="font-normal leading-[17.16px] text-[12px] mt-2">
                            Twitter Profile
                        </h5>
                        <div className="mt-2">
                            {data?.twitterProfile ? data?.twitterProfile : "Not Filled"}
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default LAWDetails;

LAWDetails.propTypes = {
    data: PropTypes.object,
    baseUrl: PropTypes.string,
}